const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
function preload() {
    song=loadSound("sonicastronomia.mp3")
}
function setup() {
    var canvas=createCanvas(900,600)
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(450,600,900,20);
    ground1 = new Ground(400,400,300,20);
    ground2 = new Ground(700,300,300,20);
    block1=new Blocks(300,275,30,40);
    block2=new Blocks1(330,275,30,40);
    block3=new Blocks(360,275,30,40);
    block4=new Blocks1(390,275,30,40);
    block5=new Blocks(420,275,30,40);
    block6=new Blocks1(450,275,30,40);
    block7=new Blocks(480,275,30,40);
    
    //level 2
    block8=new Blocks1(330,235,30,40);
    block9=new Blocks(360,235,30,40);
    block10=new Blocks1(390,235,30,40);
    block11=new Blocks(420,235,30,40);
    block12=new Blocks1(450,235,30,40);
    //level 3
    block13=new Blocks(360,195,30,40);
    block14=new Blocks1(390,195,30,40);
    block15=new Blocks(420,195,30,40);
    //top
    block16=new Blocks1(390,155,30,40);

        //level 2
        block17=new Blocks(700,235,30,40);
        block18=new Blocks1(730,235,30,40);
        block19=new Blocks(760,235,30,40);
        block20=new Blocks1(790,235,30,40);
        block21=new Blocks(820,235,30,40);
        //level 3
        block22=new Blocks1(730,275,30,40);
        block23=new Blocks(760,275,30,40);
        block24=new Blocks1(790,275,30,40);
        //top
        block25=new Blocks(760,155,30,40);

    hexagon=new Hexagon(300,145,50,50);
    slingshot=new SlingShot(hexagon.body,{x:200,y:100}); 
    
}
function draw() {
    background("lightblue");
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    ground.display();
    hexagon.display();
    slingshot.display();
    ground1.display();
    ground2.display(); 
    sound1()
    fill("black")
    textSize(30)
    text("drag the hexagon and throw",300,50)
}
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function sound1() {
  if(frameCount-1===0){
    song.play();
  }
}
