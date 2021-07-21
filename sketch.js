const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


//join the object with the class
box1=new Box(200,100,50,50);
box2=new Box(100,50,50,100);

}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
}