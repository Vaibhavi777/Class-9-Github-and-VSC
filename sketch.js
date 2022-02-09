var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,40)
  
}

function draw() 
{
  background("purple" );
  if(keyDown("right")){
    ball.x = ball.x + 3;
  }
  if(keyDown("left")){
    ball.x = ball.x - 3;
  }
drawSprites()
}




