const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var edicio1;
var ground1;

function setup(){
    createCanvas(1500,800);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(750,800,1500,20);

    edicio1 = new Edificio(700,400,20,100);

}

function draw(){
    background("Black");

    Engine.update(engine);

    ground1.display();

    edicio1.display();
}