
var sword, swordImage;
var fruit,fruitGroup;
var appleImage, orangeImage;
var grapeImage;
var fruit4, lemonImage;
var alien, alien1, alien2, alien1Image,alien2Image, enemyGroup;
var PLAY=1;
var END=0;
var gameState = PLAY;

var score;
var gameover,gameoverImage;

function preload(){
  swordImage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png");
  
}

function setup(){
  createCanvas(600,600);
 
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;

  gameover = createSprite(300,300,20,20);
  gameover.addImage(gameoverImage);
  gameover.scale = 2;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();

  score = 0
  
  sword.setCollider("circle",0,0,40);
  sword.debug = true;
 
 
}
function draw(){
 
 background("Red");
 
 text("Score="+score,500,30);
   
  sword.x=World.mouseX;
  sword.y=World.mouseY;
    
   r = Math.round(random(1,4));
  
   a = Math.round(random(1,4));
  
Fruit();
enemy();
 
  if(gameState===PLAY){
     gameover.visible=false;
    
   if(fruitGroup.isTouching(sword)) { 
     
         fruitGroup.destroyEach();
         score=score+2; 
   }
  }
  if(enemyGroup.isTouching(sword)) {
    enemyGroup.destroyEach();
    gameState=END
    
  } if (gameState===END) {
    sword.destroy();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();  
    gameover.visible=true;
  }
  drawSprites();
}
function Fruit(){
  
 if(World.frameCount%80==0){
   fruit = createSprite(400,200,20,20);
   fruit.scale=0.4;
   fruit.y = Math.round(random(50,340));
   fruit.velocityX=-7;
   fruit.setLifetime = 100;
   if(r==1){
     fruit.addImage(fruit1Image);
   } else if(r ==2) {
      fruit.addImage(fruit2Image);
   }  else if(r ==3) {
      fruit.addImage(fruit3Image);
   }  else if(r ==4) {
      fruit.addImage(fruit4Image);
   }
   fruitGroup.add(fruit);  
}
}
   
function enemy(){
   if(World.frameCount%80==0){
  alien = createSprite(300,300,20,20);
  alien.addImage(alien1Image);   
  alien.scale=1;
  
  alien.velocityX=-7; 
  alien.setLifetime = 100;
  if(a==1){
     alien.addImage(alien1Image);
   } 
   enemyGroup.add(alien);  
}
}