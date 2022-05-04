let xSpeed;
let ySpeed;
let x;
let y;
let logo;
let r, g, b;

function preload() {
  logo = loadImage("logo.png");
}

function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(length);
  xSpeed = 7;
  ySpeed = 7;
  r = random(256);
  g = random(256);
  b = random(256);

}

function draw() {
  background(0);
  //

  //use moving image
  
  //image(logo,x, y,200,150);
  rect(x, y, 40, 40);
  fill(r,g,b);

  if (x + 80 >= width) {
    changeColor()
    x = width - 80;
    xSpeed = -xSpeed;
    
    
  }
  else if(x <= 0){
    changeColor()
   x =0;
    xSpeed = -xSpeed;
    fill(r,g,b);

  }
  if (y + 40 >= height) {
    changeColor()
    y = height - 40;
    ySpeed = -ySpeed;
    fill(r,g,b);

  }
  else if( y <= 0){
    changeColor()
    y = 0;
    ySpeed = -ySpeed;
    fill(r,g,b);
  }
  x += xSpeed;
  y += ySpeed;


  // creating my plank

  //create 2d object
  rect(400,0,

}



function changeColor(){
  r = random(256);
  g = random(256);
  b = random(256);

}