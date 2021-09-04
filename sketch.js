const Engine = Matter.Engine;
const World = Matter.Matter;
const Bodies = Matter.Bodies;

var engine,world;
var drops;
var maxdrops=100;
var umbrella;
var rand;
var thunder,thunder1,thunder2,thunder3,thunder4;
 var thundercreatedFrame=0;


function preload(){

    thunder1 = loadImage("images/thunderbolt/thunder-1.png");
    thunder2 = loadImage("images/thunderbolt/thunder-2.png");
    thunder3 = loadImage("images/thunderbolt/thunder-3.png");
    thunder4 = loadImage("images/thunderbolt/thunder-4.png");
    
}

function setup(){

    var canvas = createCanvas(500,700);

    engine = Engine.create();
    

    umbrella = new Umbrella(200,500);

    for(var i = 0; i < maxDrops; i++){
         drops.push(new createDrops(random(0,500),random(0,500)));
    }
   
    
}

function draw(){

    Engine.update(engine);
    background("black");

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
         thunderCreateFrame = frameCount;
         Thunder = createSprite(random(10,370), random(10,30),10,30);
         switch(rand){
               case 1:Thunder.addImage(thunder1);
               break;
               case 2:Thunder.addImage(thunder2);
               break;
               case 3:Thunder.addImage(thunder3);
               break;
               case 4:Thunder.addImage(thunder4);
               break;
               default:break;
         }
         Thunder.scale = 0.7;
    }

    if(thunderCeratedFrame + 10 === frameCount && Thunder){
         Thunder.destory();
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].display();
    }
    
    drawSprites();
    
}   

