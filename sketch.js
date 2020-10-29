const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var object
var ball
var box1, box2
var ground1

function setup(){
createCanvas (650,650);
engine = Engine.create();
world = engine.world
box1 = new box(200,100,50,50);
box2 = new box(100,50,50,100);
ground1 = new name(325,650,650,50);

}

function draw(){
background("red");
Engine.update(engine);
box1.display()
box2.display()
ground1.display()
}