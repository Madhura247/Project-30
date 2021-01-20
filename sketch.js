const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon, polygon_img;

function preload() {
    polygon_img = loadImage("polygon.png")
}

function setup() {
    createCanvas(1200,500);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500, 430, 300, 13);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon, {x:100, y:200});

    block1 = new Block(400, 401, 32, 42);
    block2 = new Block(431, 401, 32, 42);
    block3 = new Block(462, 401, 32, 42);
    block4 = new Block(494, 401, 32, 42);
    block5 = new Block(526, 401, 32, 42);
    block6 = new Block(558, 401, 32, 42);
    block7 = new Block(590, 401, 32, 42);

    block8 = new Block(431, 358, 32, 42);
    block9 = new Block(462, 358, 32, 42);
    block10 = new Block(494, 358, 32, 42);
    block11 = new Block(526, 358, 32, 42);
    block12 = new Block(558, 358, 32, 42);

    block13 = new Block(462, 315, 32, 42);
    block14 = new Block(494, 315, 32, 42);
    block15 = new Block(526, 315, 32, 42);

    block16 = new Block(494, 273, 32, 42);



    ground2 = new Ground(850,230, 250, 13);
    block17 = new Block(770, 200, 32, 42);
    block18 = new Block(802, 200, 32, 42);
    block19 = new Block(834, 200, 32, 42);
    block20 = new Block(866, 200, 32, 42);
    block21 = new Block(898, 200, 32, 42);

    block22 = new Block(802, 158, 32, 42);
    block23 = new Block(834, 158, 32, 42);
    block24 = new Block(866, 158, 32, 42);

    block25 = new Block(834, 115, 32, 42);
}


function draw() {

    background("rgb(58, 45, 35)")
    Engine.update(engine);
    
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    ground1.display();
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


    ground2.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32 ) {
        slingShot.attach(polygon);
    }
}