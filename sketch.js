const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1, box2,box3,box4,box5;
var ground;
var bird1;

var bgimg;

function preload(){
  bgimg= loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  var box_options = {restitution:1,density:1.5}

  //var options = {isStatic:true}
  //ground = Bodies.rectangle(200,390,400,20,options)
  //World.add(world,ground);

  ground= new Ground(600,390,1200,20)
  box1 = new Box(700,320,70,70);
  box2= new Box(920,320,70,70);  
  pig1= new pig(810,350)
  log1= new log(810,260,300,PI/2);
  
  box3 = new Box(700,240,70,70);
  box4= new Box(920,240,70,70);  
  pig2= new pig(810,220)
  log2= new log(810,180,300,PI/2);

  box5= new Box(810,160,70,70);
  log3= new log(760,120,150,PI/7);
  log4= new log(870,120,150,-PI/7);

  bird1= new bird(100,50)
  
  //console.log(ground);
}

function draw() {
  background(bgimg);  

  Engine.update(engine);
  

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  bird1.display();
  
  ground.display();

}