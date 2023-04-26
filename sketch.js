const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;
function preload(){
bg = loadImage("background.png");
basket= loadImage("basket.png");
melon = loadImage("melon.png");

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Challenge1:
 fruit = Bodies.circle(50,200,20);
  World.add(world,fruit)

 slingshot = new Slingshot(this.fruit,{x:50,y:50}) 

}
function draw() {
  background(bg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  ground.display();
  imageMode(CENTER)
 image(melon,fruit.position.x,fruit.position.y,40,40)
 basket.scale = 0.25;
image(basket,450,270)

slingshot.display();

}

function mouseDragged(){
Matter.Body.setPosition(this.fruit,{x:mouseX,y:mouseY})

}

function mouseReleased(){
slingshot.fly()

}