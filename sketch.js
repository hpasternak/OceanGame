var gameState=0;
var database,form,player,game,playerCount
var diverimg
var litter1, litter2, litter3, litter4, litter5, litter6, litter7, liter8, litter9, litter10, litter11, litter12, litter13, litter14, litter15, litter16, litter17, litter18, litter19, litter20, litter21, litter22
var diverx = 572;
var divery = 275;

function preload() {
  scene1img=loadImage("images/abovewater.jpg");
  scene2img=loadImage("images/underwater.jpg");
  diverimg=loadImage("images/diver-under-water.png");
  litter1img=loadImage("images/balloons.png");
  litter2img=loadImage("images/bubblewrap.png");
  litter3img=loadImage("images/can-rings.png");
  litter4img=loadImage("images/can1.png");
  litter5img=loadImage("images/can2.png");
  litter6img=loadImage("images/candy-wrappers.png");
  litter7img=loadImage("images/ear-pick.png");
  litter8img=loadImage("images/fork.png");
  litter9img=loadImage("images/glove.png");
  litter10img=loadImage("images/mask1.png");
  litter11img=loadImage("images/mask2.png");
  litter12img=loadImage("images/milk-jug.png");
  litter13img=loadImage("images/noodlecups.png");
  litter14img=loadImage("images/plastic-bag.png");
  litter15img=loadImage("images/plastic-cup.png");
  litter16img=loadImage("images/plastic-cup1.png");
  litter17img=loadImage("images/spoon.png");
  litter18img=loadImage("images/straw1.png");
  litter19img=loadImage("images/straw2.png");
  litter20img=loadImage("images/take-out.png");
  litter21img=loadImage("images/tire.png");
  litter22img=loadImage("images/water-bottle.png");
}


function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  database=firebase.database()
  game = new Game();
  game.getState();
  game.start();
  //form = new Form();
  //diver = createSprite(572, 275, 100, 50);
 // diver.addImage("diver",diverimg);
  litter1 = createSprite(200, 100, 40, 40);
  litter1.addImage("litter",litter1img);
  litter1.velocityX = 4
  litter1.velocityY = 3
  //litter1.visible = false
  littergroup = new Group();
}

function draw() {
  background(scene1img);
  if(playerCount === 1) {
    game.update(1);
    //gameState = 2
  }
   if(gameState === 1) {
  //form.hide();
  game.update(2);
  //background(scene1img);
  }

   if(gameState === 2) {
     background(scene2img);
     text(mouseX+","+mouseY,mouseX,mouseY);
     //diver = createSprite(400,500);
     //diver.addImage("diver",diverimg);
     //litter1.visible = true
     imageMode(CENTER);
     image(diverimg,diverx, divery,100,50);
     image(litter1img,49,127,50,60);
     image(litter2img,1123,550,50,50);
     image(litter3img,70,551,50,50);
     image(litter4img,1189,479,50,50);
     image(litter5img,707,582,50,50);
     image(litter6img,512,171,50,50);
     image(litter7img,198,442,50,50);
     image(litter8img,905,185,50,50);
     image(litter9img,1119,282,50,50);
     image(litter10img,923,116,50,50);
     image(litter11img,246,138,50,50);
     image(litter12img,153,318,50,50);
     image(litter13img,1371,208,50,50);
     image(litter14img,690,223,50,50);
     image(litter15img,918,499,50,50);
     image(litter16img,375,252,50,50);
     image(litter17img,324,840,50,50);
     image(litter18img,727,504,50,50);
     image(litter19img,79,787,50,50);
     image(litter20img,968,810,50,50);
     image(litter21img,613,808,50,50);
     image(litter22img,1382,431,50,50);
     //if(keyDown("s")){
    //diverimg.x = diverimg.x - 2
    //diverimg.velocityX = -2
    //}
   }
  }
  function keyPressed () {
    if(keyCode === 69) {
    divery = divery -15
    }
    if(keyCode === 68) {
    divery = divery +15
    }
    if(keyCode === 70) {
    diverx = diverx +15
    }
    if(keyCode === 83) {
    diverx = diverx -15
    }
    if(keyCode === 32) {
      litter1img.velocityX = 4
      litter1img.velocityY = 3
    }
  }