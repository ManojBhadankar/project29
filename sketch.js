
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  
  fill("black")
  var polygon_options={
    restitution:0.8
  }
  polygon = Bodies.circle(100,50,20,polygon_options);
  World.add(world,polygon);

  chain=new slingshot(polygon.body,{x:100,y:50})
  
  stand1 = new Ground(590,300,270,20);
  stand2 = new Ground(700,200,200,20)
  // create blocks I
  block1 = new Box(640,175,30,40);
  block2 = new Box(670,175,30,40);
  block3 = new Box(700,175,30,40);
  block4 = new Box(730,175,30,40);
  block5 = new Box(760,175,30,40);

  block7 = new Box(670,135,30,40);
  block8 = new Box(700,135,30,40);
  block9 = new Box(730,135,30,40);

  block10 = new Box(700,90,30,40);

  // create block II

  block11 = new Box(490,275,30,40);
  block12 = new Box(530,275,30,40);
  block13 = new Box(570,275,30,40);
  block14 = new Box(610,275,30,40);
  block15 = new Box(650,275,30,40);
  block16 = new Box(690,275,30,40);
  block17 = new Box(730,275,30,40);

  block18 = new Box(530,235,30,40);
  block19 = new Box(570,235,30,40);
  block20 = new Box(610,235,30,40);
  block12 = new Box(650,235,30,40);
  block22 = new Box(730,235,30,40);

  block23 = new Box(570,195,30,40);
  block24 = new Box(610,195,30,40);
  block25 = new Box(650,195,30,40);
  
}

function draw() {
  imageMode(CENTER)
  
  background(255,255,255);  

  stand1.display();
  stand2.display();

  fill("orange")
  block1.display();
  block2.display();
  block3.display();
  block4.display(); 
  block5.display();

 fill("orange")
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  // create block II

  fill("orange")
  block11.display(); 
  block12.display(); 
  block13.display(); 
  block14.display();
  block15.display();
  block16.display();
  block17.display(); 

  fill("orange")
  block18.display();
  block19.display(); 
  block20.display(); 
  block12.display(); 
  block22.display(); 

  fill("orange")
  block23.display(); 
  block24.display(); 
  block25.display(); 

  chain.display();
  
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,20,20)

  drawSprites();
}
function mouseDragged() {
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
chain.fly();
};
