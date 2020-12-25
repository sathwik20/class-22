const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ground;

function setup() {
  createCanvas(400,400);
  
engine=Engine.create()
world=engine.world

var ground_options={
  isStatic: true
}

ground=Bodies.rectangle(200,390,200,20,ground_options)
World.add(world,ground)
//console.log(object)
//console.log(object.type)
//console.log(object.position.x)
}

function draw() {
  background(0);  
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 
 
 
 
  drawSprites();



}