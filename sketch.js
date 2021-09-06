const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var width = 480
var height = 800

for (var k = 0; k <= width; k = k+80){
  divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight))
}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height, 480,10)
  for (var k = 0; k <= width; k = k+80){
    divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var j = 40; j <= width; j+=50){
    plinkos.push(new Plinko(j, 75))
  }
  for (var j = 15; j <= width; j+=50){
    plinkos.push(new Plinko(j, 175))
  }
  for (var j = 40; j <= width; j+=50){
    plinkos.push(new Plinko(j, 275))
  }
  for (var j = 15; j <= width; j+=50){
    plinkos.push(new Plinko(j, 375))
  }
  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display()
  }
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display()
  }
  for (var i = 0; i < particles.length; i++){
    particles[i].display()
  }
  ground.display()
  drawSprites();
}