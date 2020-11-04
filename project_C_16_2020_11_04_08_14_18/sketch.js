
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300)
  
monkey=createSprite(25,270,20,20)
  monkey.addAnimation("sss",monkey_running)
  monkey.scale=0.1
 
  ground=createSprite(350,275,700,10)
   ground.velocityX=-10
  ground.x=ground.width/2
  score=0;
  obstacleGroup=createGroup();
}


function draw() {
background("red")
  
  if(keyDown("space") && monkey.y>210){
    
    monkey.velocityY=-12
  }
  if(ground.x > 0){
    ground.x=ground.width/2
  }
 monkey.velocityY=  monkey.velocityY+ 0.8
  monkey.collide(ground)
  text("score:"+ score,400,30)
 if(frameCount%10===0){
   score=score+1
 }
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach()
    score=0
  }
  spawnObstacles();
  spawnBananas();
  drawSprites();
}

function spawnBananas(){
  if(frameCount%100===0){
    banana=createSprite(400,120,20,20)
    banana.addImage("bbb",bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=80
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,250,20,20)
    obstacle.addImage("ooo",obstaceImage)
    obstacle.scale=0.15
obstacle.velocityX=-2
obstacle.lifetime=200
    obstacleGroup.add(obstacle)
  }
}



