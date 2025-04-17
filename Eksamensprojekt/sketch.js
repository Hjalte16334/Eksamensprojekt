let health = 5;
let maxHealth = 5;
let playerX = 275;
let playerY = 275;
let round = 0;
let coins = 0;
let playerDirection = 1;
let gameState = 0;
let countdown=0;
let sword;
let swinging = false;
let swingAngle;
let swingSpeed = 0.1;
let attackSpeedLevel = 0;
let attackSpeedPrice = 10;
let swingMaxAngle;
let timer = 0;
let hurting1 = false;
let iFrames = 500;
let resetButton;
let playerSpeed = 1;
let magnetism = 0.2;
let magnetismRange =250;
let canEndRoundEarly = false;
let forestSize = 100;
let maxHealthPrice = 10;
let maxHealthLevel = 0;
let forestPrice = 10;
let forestLevel = 0;
let dead = false
let forestButton;
let maxHealthButton;
let attackSpeedButton;
let movementSpeedButton;
let movementSpeedLevel = 0;
let movementSpeedPrice = 20;
let magnetLevel = 0;
let magnetPrice = 10;
let magnetButton;
let vampireLevel = 0;
let vampirePrice = 60;
let vampireButton;
let crossLevel = 0;
let crossPrice = 100;
let crossButton;
class Blob {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = random(10,25);
		this.speed = random(0.2,0.6);
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;
	}
	draw() {
		fill(0);
		circle(this.x, this.y, this.size);
	}
}
let blobs = [];
class Shadow {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 10;
		this.speed = 1;
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;
	}
	draw() {
		fill(135,2,135);
		circle(this.x, this.y, this.size);
	}
}
let shadows = [];
class Archer {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 15;
		this.speed = 0.2;
		this.cooldown=(random(120,240))
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;
	}
	cooldown1(){
		this.cooldown--
if(this.cooldown<=0){
	this.shoot();
	this.cooldown=random(120,240)
}
	}
	shoot(){
		let dx = playerX-this.x
		let dy = playerY-this.y
		let distance = sqrt(dx*dx+dy*dy);
		let bx = (dx / distance) * 3
		let by = (dy / distance) * 3
		bullets.push(new Bullet(this.x,this.y,bx, by))
	}
	draw() {
		fill(150);
		circle(this.x, this.y, this.size);
	}
}
let archers = [];
class Bullet {
	constructor(x, y,bx,by) {
		this.x = x;
		this.y = y;
		this.bx = bx
		this.by = by
		this.size = 4;
	}
	move() {
		this.x+=this.bx
		this.y+=this.by
	}
	draw() {
		fill(0);
		circle(this.x, this.y, this.size);
	}
}
let bullets = [];
class Coin {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 6;	
		this.speed = magnetism;
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		if(distance<magnetismRange/2){
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;}
		if(distance<magnetismRange/4){
			this.x += (dx / distance) * this.speed;
			this.y += (dy / distance) * this.speed;}
			if(distance<magnetismRange/8){
			this.x += (dx / distance) * this.speed*2;
			this.y += (dy / distance) * this.speed*2;}
		if(distance>magnetismRange/2&&distance<magnetismRange){
			this.x += (dx / distance) * this.speed/2;
			this.y += (dy / distance) * this.speed/2;}
	}
	draw() {
		fill(255,255,0);
		circle(this.x, this.y, this.size);
	}
}
let coins2 = [];
class Heart {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 6;	
		this.speed = magnetism;
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		if(distance<magnetismRange/2){
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;}
		if(distance<magnetismRange/4){
			this.x += (dx / distance) * this.speed;
			this.y += (dy / distance) * this.speed;}
			if(distance<magnetismRange/8){
			this.x += (dx / distance) * this.speed*2;
			this.y += (dy / distance) * this.speed*2;}
		if(distance>magnetismRange/2&&distance<magnetismRange){
			this.x += (dx / distance) * this.speed/2;
			this.y += (dy / distance) * this.speed/2;}
	}
	draw() {
		fill(255,0,0);
		circle(this.x, this.y, this.size);
	}
}
let hearts = [];
class Boss1 {
	constructor() {
		this.x = 275;
		this.y = 500;
		this.size = 100;
		this.speed = 0.3
		this.hp = 20;
		this.hurting1 = false
	}
	move() {
		let dx = playerX - this.x;
		let dy = playerY - this.y;
		let distance = sqrt(dx * dx + dy * dy);
		this.x += (dx / distance) * this.speed;
		this.y += (dy / distance) * this.speed;
	}
	hurting(){
if(this.hurting1==false){
	this.hurting1=true
this.hp--;
if(this.hp<=0){
	coins+=50;
	boss1s=[];
}
}
	}
	draw() {
		fill(0);
		circle(this.x, this.y, this.size);
		fill(255,0,0)
		circle(this.x-20,this.y,10)
		circle(this.x+20,this.y,10)
	}
}
let boss1s = [];
function preload(){
	sword = loadImage('assets/sword2.png');
}
function setup() 
{
	swingMaxAngle = 2*PI;
	createCanvas(950, 550);
	nextRound();
}
function draw(){
	background(71,255,96)
	stroke(0);
	fill(200)
	circle(550/2,height/2,50)
	fill(255)
	rect(550,0,400,height)
	rect(750,0,0,height)
	//wasd movement
	if(keyIsDown(87)){
		if(!swinging){
		playerDirection=1;}
		if(playerY>playerSpeed+forestSize){
		playerY-=playerSpeed;}
	}
	if(keyIsDown(83)){
		if(!swinging){
	playerDirection=2;}
		if(playerY<height-playerSpeed-forestSize){
		playerY+=playerSpeed;}
	}
	if(keyIsDown(65)){
		if(!swinging){
	playerDirection=3;}
		if(playerX>playerSpeed+forestSize){
		playerX-=playerSpeed;}
	}
	if(keyIsDown(68)){
		if(!swinging){
		playerDirection=4;}
		if(playerX<550-playerSpeed-forestSize){
		playerX+=playerSpeed;}
	}
	//coins
	for (let coin of coins2) {
		coin.move();
		coin.draw();
	}
	//hearts
	for (let heart of hearts) {
		heart.move();
		heart.draw();
	}
	//blobs
	for (let blob of blobs) {
		blob.move();
		blob.draw();
	}
//shadows
for (let shadow of shadows) {
	shadow.move();
	shadow.draw();}
	//archers
	for (let archer of archers) {
		archer.move();
		archer.cooldown1();
		archer.draw();}
		//bullets
	for (let bullet of bullets) {
		bullet.move();
		bullet.draw();}
		//boss1wa
	for (let boss1 of boss1s) {
		boss1.move();
		boss1.draw();}
	//blob to player body collision
	for(let i=0;i<blobs.length;i++){
let blob = blobs[i]
let distanceX = playerX-blob.x
let distanceY = playerY-blob.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(25/2+blob.size/2)){
		if(hurting1==false){
			hurting1=true
		blobs.splice(i,1);
		hurting();}
	}
	}
	for(let i=0;i<boss1s.length;i++){
		let boss1 = boss1s[i]
		let distanceX = playerX-boss1.x
		let distanceY = playerY-boss1.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+boss1.size/2)){
				if(hurting1==false){
					hurting1=true
				hurting();}
			}
			}
	//shadow to player body collision
	for(let i=0;i<shadows.length;i++){
		let shadow = shadows[i]
		let distanceX = playerX-shadow.x
		let distanceY = playerY-shadow.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+shadow.size/2)){
				if(hurting1==false){
					hurting1=true
				shadows.splice(i,1);
				hurting();}
			}
			}
			//archer to player body collision
	for(let i=0;i<archers.length;i++){
		let archer = archers[i]
		let distanceX = playerX-archer.x
		let distanceY = playerY-archer.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+archer.size/2)){
				if(hurting1==false){
					hurting1=true
				archers.splice(i,1);
				hurting();}}}
				//bullet to player collision
	for(let i=0;i<bullets.length;i++){
		let bullet = bullets[i]
		let distanceX = playerX-bullet.x
		let distanceY = playerY-bullet.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+bullet.size/2)){
				if(hurting1==false){
					hurting1=true
				bullets.splice(i,1);
				hurting();}}}
	//coin to player collecting
	for(let i=0;i<coins2.length;i++){
		let coin = coins2[i]
		let distanceX = playerX-coin.x
		let distanceY = playerY-coin.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+coin.size/2)){
				coins2.splice(i,1);
				coins++;}}
			//heart to player collecting
	for(let i=0;i<hearts.length;i++){
		let heart = hearts[i]
		let distanceX = playerX-heart.x
		let distanceY = playerY-heart.y
		let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
			if(distance<(25/2+heart.size/2)){
				hearts.splice(i,1);
				if(health<maxHealth){health++;}}}
//player
if(hurting1==false){fill(255);}
else{fill(255,0,0)}
circle(playerX, playerY, 25)
//player eyes
fill(0);
if (playerDirection == 1) { 
	circle(playerX+7.5,playerY-7.5,5)
	circle(playerX-7.5,playerY-7.5,5)
} else if (playerDirection == 2) { 
	circle(playerX+7.5,playerY+7.5,5)
	circle(playerX-7.5,playerY+7.5,5)
} else if (playerDirection == 3) { 
	circle(playerX-7.5,playerY+7.5,5)
	circle(playerX-7.5,playerY-7.5,5)
} else if (playerDirection == 4) { 
	circle(playerX+7.5,playerY+7.5,5)
	circle(playerX+7.5,playerY-7.5,5)
}

//sword
if (swinging) {
	drawSword();
	swordCollision();
	swingAngle += swingSpeed; 
	if (swingAngle > swingMaxAngle) {
		swinging = false; 
	}
}
//timer
let currentTimer = millis()
if(currentTimer-timer>=1000){
	timer=currentTimer;
	if(countdown>0){countdown--}
}
//forest
noStroke();
fill(0,135,18)
rect(0,0,forestSize,height)
rect(0,0,550,forestSize)
rect(0,height-forestSize,550,forestSize)
rect(550-forestSize,0,forestSize,height)
//text
fill(0);
textSize(20);
text(`Round: ${round}`,10,20)
text(`Time: ${countdown}`,10,40)
fill(255,0,0)
text(`Health:${health}/${maxHealth}`,435,20)
fill(255,255,0)
text(`Coins: ${coins}`,10,60)
if(round==10){
	if(boss1s.length==1){
	let boss1 = boss1s[0];
	fill(0)
	text(`Boss Health: ${boss1.hp}`,200,60)}
}
//countdone is 0
if(gameState==1){
if(countdown==0){ 
gameState=2;
shopPhase()}}
//if dead
if(health<1){
	canEndRoundEarly=false;
	fill(0);
	textSize(48);
	text("You Died", 175, 250);
	countdown=3000;
	if(dead==false){
		dead=true
	resetButton = createButton("Try Again")
	resetButton.position(250,275)
	resetButton.mousePressed(ResetPressed);}
}
//end round early if everything is dead
if(canEndRoundEarly==true&&blobs.length==0&&shadows.length==0&&archers.length==0){
	countdown=0;
}
//various shop phase things
if(gameState==2){
	fill(0);
	textSize(16);
	text("Press E on the pedestal to start the next round",100,40)
	if(keyIsDown(69)&&gameState==2){
	let distanceX = playerX-275
	let distanceY = playerY-275
	let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
		if(distance<25&&gameState==2){
			gameState=1;
			nextRound();
		}}
	textSize(20)
	text("Shop",625,20)
	textSize(16)
	text("Buy More Max Health:",555,40)
	if(maxHealthLevel<15){text(`Price: ${maxHealthPrice} coins`,555,60)}
	if(maxHealthLevel==15){text("Max Level Reached",555,60)}
	text("Reduce Forest Area:",555,80)
	if(forestLevel<10)text(`Price: ${forestPrice} coins`,555,100)
	if(forestLevel==10){text("Max Level Reached",555,100)}
	if(round>2){
	text("Buy More Attack Speed:",555,120)
	if(attackSpeedLevel<10){text(`Price: ${attackSpeedPrice} coins`,555,140)}
	if(attackSpeedLevel==10){text("Max Level Reached",555,140)}}
	if(round>5){
		text("Buy More Move Speed:",555,160)
		if(movementSpeedLevel<5){text(`Price: ${movementSpeedPrice} coins`,555,180)}
		if(movementSpeedLevel==5){text("Max Level Reached",555,180)}}

		textSize(20)
	text("Item Shop",800,20)
	textSize(16)
	text("Buy Magnet Upgrade:",755,40)
	textSize(14)
	text("Increase magnet range-",755,60)
	text(`and pick-up speed by ${(magnetLevel+1)*20}%`,755,80)
	textSize(16)
	if(magnetLevel<5){text(`Price: ${magnetPrice} coins`,755,100)}
	if(magnetLevel==5){text(`Max Level Reached`,755,100)}
	if(round>2){
	text("Buy Vampire Amulet:",755,120)
	textSize(14)
	if(vampireLevel<1||round<10){text(`Enemies have a 5% chance`,755,140)}
	else{text(`Enemies have a 10% chance`,755,140)}
	text("of dropping a heart",755,160)
	textSize(16)
	if(vampireLevel<1&&round<10||vampireLevel<2&&round>9){text(`Price: ${vampirePrice} coins`,755,180)}
	if(vampireLevel==1&&round<10||vampireLevel==2&&round>9){text(`Max Level Reached`,755,180)}}
	if(round>5){
	text("Buy Cross Necklace:",755,200)
	textSize(14)
	text("Doubles invulnerability time",755,220)
	text(`after taking damage`,755,240)
	textSize(16)
	if(crossLevel<1){text(`Price: ${crossPrice} coins`,755,260)}
	if(crossLevel==1){text(`Max Level Reached`,755,260)}}
}
//destroy bullets that leave the area
for(let i=0;i<bullets.length;i++){
let bullet = bullets[i];
if(bullet.x>447.5){bullets.splice(i,1)}
if(bullet.x<0){bullets.splice(i,1)}
if(bullet.y>550){bullets.splice(i,1)}
if(bullet.y<0){bullets.splice(i,1)}
}
}

function mousePressed() {
if (!swinging) {
	swinging = true;
	swingAngle = PI
	//boss1
	if(boss1s.length>0){
		let boss1 = boss1s[0];
		boss1.hurting1=false
	}
}
}
function drawSword() {
	push();
	translate(playerX, playerY); 
	
	if (playerDirection == 1) { 
		rotate(swingAngle);
	} else if (playerDirection == 2) { 
		rotate(swingAngle + PI);
	} else if (playerDirection == 3) { 
		rotate(swingAngle-HALF_PI);
	} else if (playerDirection == 4) { 
		rotate(swingAngle+HALF_PI);
	}
	
	imageMode(CENTER);
	image(sword, 40, 0, 70, 70); 
	pop();
}
function swordCollision(){
	//for blobs
	for(let i=0;i<blobs.length;i++){
		let blob = blobs[i]
		for(i2=1;i2<6;i2++){
			let angle = 0
		if (playerDirection == 1){angle = 0;}
		if (playerDirection == 2){angle = PI;}
		if (playerDirection == 3){angle = -HALF_PI;}
		if (playerDirection == 4){angle = HALF_PI;}
			let angle2 = swingAngle + angle;
			let swordX = playerX + cos(angle2) * (10 * i2)
			let swordY = playerY + sin(angle2) * (10 * i2);
let distanceX = swordX-blob.x
let distanceY = swordY-blob.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(blob.size/2)){
		coins2.push(new Coin(blob.x,blob.y));
		if(vampireLevel>0){let heartChance = random(100)
			if(heartChance<vampireLevel*5){hearts.push(new Heart(blob.x+6,blob.y));}}
		blobs.splice(i,1);
		i--
		break;}}}
		//for shadows
	for(let i=0;i<shadows.length;i++){
		let shadow = shadows[i]
		for(i2=1;i2<6;i2++){
			let angle = 0
		if (playerDirection == 1){angle = 0;}
		if (playerDirection == 2){angle = PI;}
		if (playerDirection == 3){angle = -HALF_PI;}
		if (playerDirection == 4){angle = HALF_PI;}
			let angle2 = swingAngle + angle;
			let swordX = playerX + cos(angle2) * (10 * i2)
			let swordY = playerY + sin(angle2) * (10 * i2);
let distanceX = swordX-shadow.x
let distanceY = swordY-shadow.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(shadow.size/2)){
		coins2.push(new Coin(shadow.x,shadow.y));
		coins2.push(new Coin(shadow.x,shadow.y));
		if(vampireLevel>0){let heartChance = random(100)
			if(heartChance<vampireLevel*5){hearts.push(new Heart(shadow.x+6,shadow.y));}}
		shadows.splice(i,1);
		i--
		break;}}}
		//for archers
	for(let i=0;i<archers.length;i++){
		let archer = archers[i]
		for(i2=1;i2<6;i2++){
			let angle = 0
		if (playerDirection == 1){angle = 0;}
		if (playerDirection == 2){angle = PI;}
		if (playerDirection == 3){angle = -HALF_PI;}
		if (playerDirection == 4){angle = HALF_PI;}
			let angle2 = swingAngle + angle;
			let swordX = playerX + cos(angle2) * (10 * i2)
			let swordY = playerY + sin(angle2) * (10 * i2);
let distanceX = swordX-archer.x
let distanceY = swordY-archer.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(archer.size/2)){
		coins2.push(new Coin(archer.x,archer.y));
		coins2.push(new Coin(archer.x,archer.y));
		coins2.push(new Coin(archer.x,archer.y));
		if(vampireLevel>0){let heartChance = random(100)
			if(heartChance<vampireLevel*5){hearts.push(new Heart(archer.x+6,archer.y));}}
		archers.splice(i,1);
		i--
		break;}}}
		//for bullets
	for(let i=0;i<bullets.length;i++){
		let bullet = bullets[i]
		for(i2=1;i2<30;i2++){
			let angle = 0
		if (playerDirection == 1){angle = 0;}
		if (playerDirection == 2){angle = PI;}
		if (playerDirection == 3){angle = -HALF_PI;}
		if (playerDirection == 4){angle = HALF_PI;}
			let angle2 = swingAngle + angle;
			let swordX = playerX + cos(angle2) * (2 * i2)
			let swordY = playerY + sin(angle2) * (2 * i2);
let distanceX = swordX-bullet.x
let distanceY = swordY-bullet.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(bullet.size/2)){
		bullets.splice(i,1);
		i--
		break;}}}
		//for boss1
	for(let i=0;i<boss1s.length;i++){
		let boss1 = boss1s[i]
		for(i2=1;i2<6;i2++){
			let angle = 0
		if (playerDirection == 1){angle = 0;}
		if (playerDirection == 2){angle = PI;}
		if (playerDirection == 3){angle = -HALF_PI;}
		if (playerDirection == 4){angle = HALF_PI;}
			let angle2 = swingAngle + angle;
			let swordX = playerX + cos(angle2) * (10 * i2)
			let swordY = playerY + sin(angle2) * (10 * i2);
let distanceX = swordX-boss1.x
let distanceY = swordY-boss1.y
let distance = sqrt(distanceX*distanceX+distanceY*distanceY);
	if(distance<(boss1.size/2)){
		boss1.hurting();
		break;}}}
}
function nextRound(){
	if(maxHealthButton){maxHealthButton.remove()}
	if(forestButton){forestButton.remove()}
	if(attackSpeedButton){attackSpeedButton.remove()}
	if(movementSpeedButton){movementSpeedButton.remove()}
	if(magnetButton){magnetButton.remove()}
	if(vampireButton){vampireButton.remove()}
	if(crossButton){crossButton.remove()}
	round+=1;
if(round<10){
	countdown=30;}
	if(round==10){
		countdown=60;
		boss1s.push(new Boss1());}
		if(round<20&&round>10){
			countdown=30;}
		if(round<11){
	for (let i = 0; i < 20; i++) {
		summonBlob();}
if(round==1){
canEndRoundEarly=true;
for (let i = 0; i < 10; i++) {
	summonBlob();}}
if(round>1){
setTimeout(()=>{for(let i = 0; i < 20; i++) {
	summonBlob();}
	if(round==2){canEndRoundEarly=true}},10000);}
if(round>2){
	setTimeout(()=>{for (let i = 0; i < 20; i++) {
		summonBlob();}
	canEndRoundEarly=true;},20000)}
if(round>3){
	for (let i = 0; i < 10; i++) {
		summonShadow();}}
if(round>4){
	setTimeout(()=>{for(let i = 0; i < 10; i++) {
		summonShadow();}},10000);}
if(round>5){
	setTimeout(()=>{for(let i = 0; i < 10; i++) {
		summonShadow();}},20000);}
if(round>6){
	for (let i = 0; i < 5; i++) {
		summonArcher();}}
if(round>7){
	setTimeout(()=>{for(let i = 0; i < 5; i++) {
		summonArcher();}},10000);}
if(round>8){
	setTimeout(()=>{for(let i = 0; i < 5; i++) {
		summonArcher();}},20000);}}
	if(round>10){

		
	}
gameState=1;
}//when timer is 0 do shop phase
function shopPhase(){
canEndRoundEarly=false;
blobs=[];
shadows=[];
archers=[];
bullets=[];
boss1s=[];
health=maxHealth
setTimeout(()=>{coins2=[];},2000)
if(maxHealthLevel<15){
maxHealthButton = createButton("Buy")
	maxHealthButton.position(718,50)
	maxHealthButton.mousePressed(maxHealthFunction);}
if(forestLevel<10){	forestButton = createButton("Buy")
	forestButton.position(718,90)
	forestButton.mousePressed(forestFunction);}
	if(magnetLevel<5){magnetButton = createButton("Buy")
	magnetButton.position(918,90)
	magnetButton.mousePressed(magnetFunction);}
	if(round>2){
	if(attackSpeedLevel<10){attackSpeedButton = createButton("Buy")
	attackSpeedButton.position(718,130)
	attackSpeedButton.mousePressed(attackSpeedFunction);}}
	if(round>5){
	if(movementSpeedLevel<5){movementSpeedButton = createButton("Buy")
	movementSpeedButton.position(718,170)
	movementSpeedButton.mousePressed(movementSpeedFunction);}}
	if(round>2){
	if(round<10&&vampireLevel<1||round>9&&vampireLevel<2){
		vampireButton = createButton("Buy")
		vampireButton.position(918,170)
		vampireButton.mousePressed(vampireFunction);}}
	if(round>5){
		if(crossLevel<1){crossButton = createButton("Buy")
		crossButton.position(918,250)
		crossButton.mousePressed(crossFunction);}}
}
function maxHealthFunction(){
	if(coins>=maxHealthPrice){
		coins-=maxHealthPrice
		maxHealthPrice+=10;
		maxHealth+=1;
		health+=1;
		maxHealthLevel+=1;
		if(maxHealthLevel==15){maxHealthButton.remove()}}}
function forestFunction(){
if(coins>=forestPrice){
	coins-=forestPrice;
	forestPrice+=10
	forestSize-=10;
	forestLevel+=1;
	if(forestLevel==10){forestButton.remove()}}}
function attackSpeedFunction(){
	if(coins>=attackSpeedPrice){
coins-=attackSpeedPrice;
attackSpeedPrice+=10
swingSpeed+=0.01
attackSpeedLevel+=1
if(attackSpeedLevel==10){attackSpeedButton.remove()}}}
function movementSpeedFunction(){
	if(coins>=movementSpeedPrice){
coins-=movementSpeedPrice;
movementSpeedPrice+=10;
playerSpeed+=0.1;
movementSpeedLevel+=1;
if(movementSpeedLevel==5){movementSpeedButton.remove()}}}
function magnetFunction(){
	if(coins>=magnetPrice){
coins-=magnetPrice;
magnetPrice+=10;
magnetism+=0.04;
magnetismRange+=50;
magnetLevel+=1;
if(magnetLevel==5){magnetButton.remove()}}}
function vampireFunction(){
	if(coins>=vampirePrice){
coins-=vampirePrice;
vampirePrice+=100;
vampireLevel+=1;
if(vampireLevel==1&&round<10||round>9&&vampireLevel==2){vampireButton.remove()}}}
function crossFunction(){
	if(coins>=crossPrice){
coins-=crossPrice;
iFrames+=500;
crossLevel+=1;
if(crossLevel==1){crossButton.remove()}}}
function hurting(){
		hurting1=true;
health--
setTimeout(()=>{hurting1=false},iFrames)
}
function ResetPressed(){
	location.reload()}
function summonBlob(){
	let canPlace = false
	let proposedX;
	let proposedY;
	while(canPlace==false){
	proposedX=random(537.5)
	proposedY=random(height)
	let distanceX=proposedX-playerX
	let distanceY=proposedY-playerY
	let distance = sqrt(distanceX*distanceX+distanceY*distanceY)
	if(distance>100){canPlace=true;}}
	blobs.push(new Blob(proposedX, proposedY));
}
function summonShadow(){
	let canPlace = false
	let proposedX;
	let proposedY;
	while(canPlace==false){
	proposedX=random(545)
	proposedY=random(height)
	let distanceX=proposedX-playerX
	let distanceY=proposedY-playerY
	let distance = sqrt(distanceX*distanceX+distanceY*distanceY)
	if(distance>150){canPlace=true;}}
	shadows.push(new Shadow(proposedX, proposedY));
}
function summonArcher(){
	let canPlace = false
	let proposedX;
	let proposedY;
	while(canPlace==false){
	proposedX=random(542.5)
	proposedY=random(height)
	let distanceX=proposedX-playerX
	let distanceY=proposedY-playerY
	let distance = sqrt(distanceX*distanceX+distanceY*distanceY)
	if(distance>150){canPlace=true;}}
	archers.push(new Archer(proposedX, proposedY));
}
//vampire amulet after round 3
//cross necklace after round 6
//bullet time after round 9
//vampire amulet 2 electro boogaloo after round 10
//dmg bonus after round 13