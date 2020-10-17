




var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
monkey=createSprite(200,300,10,10)
monkey.addImage(monkey_running)
ground=createSprite(200,380,400,20)


  
}


function draw() {
background("LightGreen")
  drawSprites();
  if(keyDown('space')&&monkey.y >=100)
    monkey.velocityY = -12
  
}

if(ground.X<0)
{
 ground.X=ground.width/2 
  
  
}
monkey.collide(ground)

  
  
  
  
  
  
  
  
}
function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.5;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
   
    //add each cloud to the group
    foodGroup.add(food);
  }
}
function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}




















