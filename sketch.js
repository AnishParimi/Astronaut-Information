var iss,issImg;
var brush;
var sleep;
var gym;
var drink;
var eat;
var moveImg;
var bath;
var astronaut;
var edges;



function preload(){
 issImg=loadImage("iss.png")
 sleep=loadImage("sleep.png")
 brush=loadImage("brush.png")
 gym=loadAnimation("gym1.png","gym2.png","gym11.png")
 drink=loadAnimation("drink1.png","drink2.png")
 eat=loadAnimation("eat1.png","eat2.png")
 moveImg=loadAnimation("move.png","move1.png")
 bath=loadAnimation("bath1.png","bath2.png")
 

}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
   iss.scale=0.2;
  iss.addImage("ISS",issImg);

  astronaut=createSprite(400,210)
  astronaut.addImage("sleeping",sleep)
  astronaut.scale=0.15;

 
  
}

function draw() {
  background(255,255,255);  

  

  edges=createEdgeSprites()

  astronaut.bounceOff(edges)
  
  if (keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=240;
    astronaut.velocityX=0;
    astronaut.velocityY=0
  }

  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("Working Out",gym)
    astronaut.changeAnimation("Working Out")
    astronaut.y=240;
    astronaut.velocityX=0;
    astronaut.velocityY=0
  }

  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("Bathing",bath)
    astronaut.changeAnimation("Bathing")
    astronaut.y=240;
    astronaut.velocityX=0;
    astronaut.velocityY=0
  }
  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=240;
    astronaut.velocityX=0;
    astronaut.velocityY=0
  }

  if (keyDown("m")){
    astronaut.addAnimation("Moving",moveImg)
    astronaut.changeAnimation("Moving")
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }

  

  

  
  drawSprites();
  text("UP_ARROW=Brushing",20,40)
  text("DOWN_ARROW=Gym",20,50)
  text("RIGHT_ARROW=Bathing",20,60)
  text("LEFT_ARROW=Eating",20,70)
  text("M Key=Move",20,80)

}