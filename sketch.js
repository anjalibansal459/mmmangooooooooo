const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,tree1,boy1,m1,m2,m3,m4,m5,stone1,m6
var slingshot
function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(width/2,980,2000,100)
    tree1=new tree(1150,500,700,800)
    boy1=new Boy(300,800,500,500)
    m1=new Mango(1300,250,50)
    m2=new Mango(1000,400,50)
    m3=new Mango(1100,200,50)
    m4=new Mango(1200,450,50)
    m5=new Mango(1150,330,50)
    m6=new Mango(1400,400,50)
    stone1=new Stone(280,750,30)
    slingshot=new SlingShot(stone1.body,{x:130,y:700})
}




function draw(){
    background("skyblue")
    textSize(50)
    text("Press space to get another chance ",200,50)
Engine.update(engine)
ground1.display()
tree1.display()
boy1.display()
m1.display()
m2.display()
m3.display()
m4.display()
m5.display()
m6.display()
stone1.display()
slingshot.display()

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode===32){
        slingshot.attach(stone1.body)
    }
}