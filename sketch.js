const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
var rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(500, 200, 400, 30);

	bobObject1 = new Bob(340, 500, 40);
	bobObject2 = new Bob(420, 500, 40);
	bobObject3 = new Bob(500, 500, 40);
	bobObject4 = new Bob(580, 500, 40);
	bobObject5 = new Bob(660, 500, 40);

	rope1 = new Rope(bobObject1.body,roofObject.body,-160,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-80,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,+80,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,+160,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0, 120, 120);

  roofObject.display();
                                                                    
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-300,y:-30})
  }
}