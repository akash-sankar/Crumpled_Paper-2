
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustBin, crumpledPaper,groundObj	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	crumpledPaper=new paper(200,450,70);
	groundObj=new ground(width/2,670,width,20);
	dustBin=new dustbin(1100,650);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
	background(157, 97, 62);
	
	rectMode(CENTER);

    crumpledPaper.display();
    groundObj.display();
    dustBin.display();

}

function keyPressed() {
    	if (keyCode === UP_ARROW) {
        	Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:130,y:-145}); 
  	}
}





