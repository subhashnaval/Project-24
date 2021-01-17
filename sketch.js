
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper, box1, box2, box3;

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,280,1200,20);
	paper = new Paper(300,200);
    box1 = new Box(900,180,20,150);
	box2 = new Box(1000,260,190,20);
	box3 = new Box(1100,180,20,150);
	//Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
   keyPreseed();

}

function keyPreseed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
}

}
