const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;


var engine,world;

var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;

var ground1;

var hexagonal,hex,img;
var base;
var BImg,backImg;
function preload()
{
  backImg=loadImage("bg.jpg");
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(900,400);
  
  //Creation of Blocks
  //Level 1.
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40,);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  //Level 2.
  //Creation of Blocks.
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  //level two
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  //top
  block25 = new Block(700,95,30,40);
  //Ground Creation.
  ground1=new Ground(390,295,250,10);
  ground2=new Ground(700,200,200,10);
  //Ground Creation.


  //Hexagon Creation.
  img=loadImage('hexagon.png')
  var opt={
    density:1.5
  }
  hexagonal=Bodies.circle(50,200,20,opt);
  World.add(world,hexagonal);
  base=new Ground(450,390,900,20);


  hex=new Target(hexagonal,{x:200,y:100});
  //Hexagon Creation.
  getTime();
  World.add(world,engine);
  Engine.run(engine);
}
async function getTime(){ 
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
  var responseJSON = await response.json(); 
  console.log(responseJSON); 
  var datetime=responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=6 && hour<=18)
  {
    BImg="bg.jpg";
  }
  else
  {
      BImg="bg1.jpg";
  }
  backImg=loadImage(BImg);
}
function draw() {
  Engine.update(engine);
  if(backImg)
  {
    background(backImg);  
  }

  //hex.trajectory();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightgreen");
  block13.display();
  block14.display();
  block15.display();
  fill("red");
  block16.display();
  fill("lightgreen");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("pink")
  block22.display();
  block23.display();
  block24.display();
  fill("grey")
  block25.display();
  fill("brown")
  ground1.display();
  ground2.display();

  imageMode(CENTER);
  image(img,hexagonal.position.x,hexagonal.position.y,40,40);
  hex.display();
  base.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagonal,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  hex.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    this.hex.attach(this.hexagonal);
  }
}

