var player1
var player2
var player1img
var player2img
var medisina
var plataforma1
var plataforma2
var stamina1
var stamina2
var stamina1img
var stamina2img
var staminamat1
var staminamat2
var staminapimg1
var staminapimg2
var piso
var bacgrawndimg
var borde1
var borde2

function preload(){

bacgrawndimg = loadImage("g/caca.png");

player1img = loadImage("g/tsdgsgs (7).png");

player2img= loadImage("g/gthdchjm,khjknj.png")

stamina1img = loadImage("g/salud.png");
stamina2img = loadImage("g/salud.png");




}
function setup(){
createCanvas(windowWidth,windowHeight);
player1 = createSprite(100,600,60,60);
player1.addImage(player1img);
player1.scale=3;
player2 = createSprite(1800,600,60,60);
player2.addImage(player2img);
player2.scale=3;
piso = createSprite(950,900,2000,90);
plataforma1 = createSprite(497,500,313,10);
plataforma1.shapeColor = "black"
plataforma2 = createSprite(1350,507,313,10);
plataforma2.shapeColor = "red"
stamina1 = createSprite(350,50,400,11);
stamina1.addImage(stamina1img);
stamina1.scale=0.05;
stamina2 = createSprite(1550,50,400,11);
stamina2. addImage(stamina2img);
stamina2.scale=0.05;

borde1=createSprite(0,0,1,4000);
borde2=createSprite(1950,0,1,4000);

piso.visible=false;
plataforma1.visible=false;
plataforma2.visible=false;
}

function draw(){
    background(bacgrawndimg)
    player1.velocityX=0;
    player2.velocityX=0;
    player1.velocityY=0;
    player2.velocityY=0;
    
  if (keyDown(LEFT_ARROW)){
player2.velocityX=-5;

  }
  if (keyDown(RIGHT_ARROW)){
    player2.velocityX=5;
  }
  if(keyDown(UP_ARROW)){
player2.velocityY=-12;
  }
 if(keyDown(DOWN_ARROW)){
    player2.velocityY=5;

 }
 if(keyDown("A")){
player1.velocityX=-5;
 }
 if(keyDown("W")){
player1.velocityY=-12;
 }
 if(keyDown("S")){
player1.velocityY=5;
 }
 if(keyDown("D")){
player1.velocityX=5;
 }
player1.velocityY=player1.velocityY+5;
player2.velocityY=player2.velocityY+5;

 player1.collide(piso);
 player2.collide(piso);
 player1.collide(plataforma1);
 player1.collide(plataforma2);
 player2.collide(plataforma1);
 player2.collide(plataforma2);
 player1.collide(player2);
player2.collide(player1);
player1.collide(borde1);
player2.collide(borde2);
player1.collide(borde1);
player2.collide(borde2);

    drawSprites();
     
    function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}

