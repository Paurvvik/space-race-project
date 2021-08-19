function setup() {
  createCanvas(800,800);
 player1 = new Player(width/4)
 player2 = new Player(height-width/4)
}

function draw() {
  background(0);  
  drawSprites();
}