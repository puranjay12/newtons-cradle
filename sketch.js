var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;const Constraint = Matter.Constraint

var ball1,ball2,bal3,ball4,ball5
var ground1
var chain1, chain2,chain3,chain4, chain5



function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
ball1 = new Ball(350,600,20)
ball2 = new Ball(390,600,20)
ball3 = new Ball(430,600,20)
ball4 = new Ball(470,600,20)
ball5 = new Ball(510,600,20)
  ground1 = new Ground(430,200,220,10)
  chain1 = new Chain(ball1.body,ground1.body,-75,0)
  chain2 = new Chain(ball2.body,ground1.body,-35,0)
  chain3 = new Chain(ball3.body,ground1.body,0,0)
  chain4 = new Chain(ball4.body,ground1.body,35,0)
  chain5 = new Chain(ball5.body,ground1.body,75,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === 49) {
   
   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
    
   }
   if (keyCode === 50) {
   
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
    Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-85,y:-85})
    }
    if (keyCode === 51) {
   
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
      Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-85,y:-85})
      Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-85,y:-85})
      }
      if (keyCode === 52) {
   
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
        Matter.Body.applyForce(ball5.body,ball5.body.position,{x:85,y:-85})
        
        }
        if (keyCode === 53) {
   
          Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
          Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-85,y:-85})
          Matter.Body.applyForce(ball5.body,ball5.body.position,{x:85,y:-85})
          Matter.Body.applyForce(ball4.body,ball4.body.position,{x:85,y:-85})
          }
 }





