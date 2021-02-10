var gameState=0;
var database,form,player,game,playerCount

function preload() {
  scene1img=loadImage("images/abovewater.jpg");
  scene2img=loadImage("images/underwater.jpg");
  diverimg=loadImage("images/diver-under-water.png");
}
function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  database=firebase.database()
  game = new Game();
  game.getState();
  game.start();
  form = new Form();
}

function draw() {
  if(gameState === 0){
    //background(scene1img);
    form.display();
    diver = createSprite(300, 600, 100, 400);
    diver.addImage("diver",diverimg);
  }
  if(playerCount === 1) {
    game.update(1);
    //gameState = 2
  }
   if(gameState === 1) {
  form.hide();
  game.update(2);
  }
  if(gameState === 2){
    
    background(scene2img);
    }
}