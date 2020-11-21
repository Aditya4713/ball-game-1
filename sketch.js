//var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,100);
	ground = new Ground(600,height,1200,20);
	box1=new Box2(600,690);
    box2=new Box1(500,650);
    box3=new Box1(700,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85})
	}
}



