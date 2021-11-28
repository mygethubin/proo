var rocketImg,rocket,obstacle,obstacleImg,landing,landingImg;
var rocketup,rocketl,rocketr;
var bg;
var fuel = 100;
var distance;
var rocketsound;
var rocketcrash;
function preload(){
bg=loadImage("bg.png");
rocketImg=loadImage("normal.png")
obstacleImg=loadImage("obstacle.png");
landingImg=loadImage("lz.png");
rocketup=loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
rocketl=loadAnimation("left_thruster_1.png","left_thruster_2.png");
rocketr=loadAnimation("right_thruster_1.png","right_thruster_2.png");
rocketcrash=loadAnimation("crash1.png","crash2.png","crash3.png")
rocketup.playing=true;
rocketup.looping=false;
rocketl.looping=false;
rocketr.looping=false;
rocketsound=loadSound("rocketb.mp3");
}
function setup(){
createCanvas(1500,680);
rocket=createSprite(100,50,30,30);
rocket.addImage(rocketImg);
rocket.scale=0.1;
rocket.addAnimation("thrusting",rocketup);
rocket.addAnimation("thrustingl",rocketl);
rocket.addAnimation("thrustingr",rocketr);

obstacle=createSprite(300,300,50,100);
obstacle.addImage(obstacleImg);
obstacle.scale=0.7;

landing=createSprite(600,350,50,20);
landing.addImage(landingImg);
landing.scale=0.5;

rocket.addAnimation("rocketc",rocketcrash);
rocket.scale=0.1;
}
function draw(){
background(bg);
//image(bg,0,0);
strokeWeight(4);
stroke("black");
fill("red");
textSize(24);
text("Velocity: "+rocket.velocityY,1200,50);
text("Fuel:" +fuel,1200,75);
text("Distance:"+distance,1200,100);
distance = landing.y-rocket.y;

if(frameCount%10===0){
fuel--

}


if (keyDown("up")){
    rocket.changeAnimation("thrusting")
 rocket.velocityY=-25
 rocketsound.play();
}
if (keyDown("left")){
    rocket.changeAnimation("thrustingl")
 rocket.velocityX=-10
}
if (keyDown("right")){
    rocket.changeAnimation("thrustingr")
    rocket.velocityX=10
}
//rocket.velocityY=rocket.velocityY+3;
rocket.velocityY+=3

if(rocket.isTouching(obstacle)){
    rocket.changeAnimation("rocketc",rocketcrash)
    rocket.velocityX=0;
    rocket.velocityY=0;
    }

if(rocket.isTouching(landing)){
    rocket.velocityY=0;
    rocket.velocityX=0;
    
    }

    obstacle.setCollider("rectangle",-50,200,100,300)
    landing.setCollider("rectangle",-20,200,500,10)
drawSprites();
}


/*function keyPressed(){
if(keyCode=UP_ARROW){
rocket.changeAnimation("thrusting")

}
if(keyCode=LEFT_ARROW){
    rocket.changeAnimation("thrustingr")
    
    }
}*/