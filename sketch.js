var gameState = 0



var bgImg1 , bgImg2 ,hunter, hunterImg ;
function preload(){
  bgImg1 = loadImage("bg1.jpg") ;
  bgImg2 = loadImage("bg2.jpg") ;
  hunterImg= loadImage("hunter.png") ;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  hunter = createSprite(400, 650, 50, 50);
  


}

function draw() {
  background(0); 
  if(gameState=== 0) {
    image(bgImg1,0,0,windowWidth,windowHeight) ;

    if(keyDown("ENTER")){
     
      
      gameState=1
       }
  }
  else 
  if(gameState=== 1){
    image(bgImg2,0,0,windowWidth,windowHeight) ;
    hunter.addImage(hunterImg) ;
  }
  
  
  drawSprites();
}