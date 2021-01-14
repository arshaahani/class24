const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
 var myengine,myworld,box1,box2;
function setup(){
  createCanvas(1200,400)
  myengine = Engine.create();
   myworld = myengine.world;
    box1 = new Box(700,320,70,70);
     box2 = new Box(900,320,70,70)
     box3 = new Box(900,240,70,70)
     box4 = new Box(700,240,70,70)
     box5=new Box(800,160,70,70)
     ground=new Ground(600,390,1200,20)
     pig1= new Pig(800,350)
     pig2= new Pig(800,240)
     log1= new Log(800,260,300,PI/2)
     log2=new Log(800,180,300,PI/2)
     log3=new Log(750,120,150,PI/7)
     log4=new Log(850,120,150,-PI/7)
     bird=new Bird(100,100)

}

function draw() {
  background("lightblue");
   Engine.update(myengine);
    box1.display(); 
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
  }



















