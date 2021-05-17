var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var background,backgroundImg;

function preload() {

backgroundImg = loadImage("garden.png");
catImg1 = loadAnimation("cat1.png");
catImg2 = loadAnimation("cat2.png,cat3.png");
catImg3 = loadAnimation("cat4.png");
mouseImg1 = loadAnimation("mouse1.png");
mouseImg2 = loadAnimation("mouse2.png,mouse3.png"); 
mouseImg3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    background = createSprite(1000,800);
    background.addImage(backgroundImg);

    cat = createSprite(30,30);
    cat.addAnimation(catImg1);

    mouse = createSprite(50,50);
    mouse.addAnimation(mouseImg1);
}

function draw() {

    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation(mouseImg3)  
        mouse.changeAnimation(mouseImg3);

        cat.addAnimation(catImg3);
        cat.changeAnimation(catImg3);
        cat.velocityX = 0;
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
      mouse.addAnimation(mouseImg2)  
      mouse.changeAnimation("mouseTeasing",mouseImg2);
      mouse.frameDelay = 25;
      cat.velocityX = -2;
      cat.addAnimation("runningCat",catImg2);
      cat.changeAnimation(catImg2);
    }
     
 



}
