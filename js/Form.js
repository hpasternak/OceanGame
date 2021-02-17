class Form {
constructor() {
    this.input=createInput("NAME");
    this.button=createButton("Play");
    this.greeting=createElement("h2");
    this.title=createElement("h1");
    this.greeting1=createElement("h3");
    this.button1=createButton("Begin")
}
hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.button1.hide();
}
display() {
    this.title.html("The Blues Of The Ocean");
    this.title.position(displayWidth/2-300,0);
    this.input.position(displayWidth/2 - 120 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 120, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + " ,welcome to the costal cleanup team!");
      this.greeting.position(displayWidth/2 - 375, displayHeight/7);
      this.greeting1.html("To win the game you have to clean up all the trash in the ocean. if you try to clean up something like a fish It won't let you. Did you know that over 70% of earths surface is water and the majority of earths life is aquatic. In real life there is plastic in the ocean. There is a massive island made of plastic in the ocean.")
      this.greeting1.position(displayWidth/2 - 600, displayHeight/3);
      //gameState = 1
      this.button1.position(displayWidth/2 - 100, displayHeight/2);
    });

    this.button1.mousePressed(()=>{
    //this.input.hide();
    //this.button.hide();
    this.greeting.hide();
    this.greeting1.hide();
    this.title.hide();
    game.update(2)
    //backgroung(scene2img);
    this.button1.hide();
    //image(diverimg,displayWidth/2,displayHeight/2);
    //gameState = 2;
    })
}
}
