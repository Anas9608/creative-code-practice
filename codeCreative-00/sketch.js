function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hR = hour();
  let min = minute();
  let sec = second();


  strokeWeight(4);
  stroke(250, 70, 150);
  noFill();

  //end angle according to the curser position
  //seconds
   stroke(150, 100, 255);
  let sc = map(sec, 0, 59, 0, 360)
  arc(0, 0, 200, 200, 0, sc);

  //second hand 
  
  push();
  strokeWeight(1);
  rotate(sc);
  stroke(150, 100, 255); 
  line(0, 0, 60, 0);
  pop();
  
  //minutes
  stroke(250, 70, 70);
  let mn = map(min, 0, 59, 0, 360) + map(sc, 0, 360, 0, 6);
  arc(0, 0, 180, 180, 0, mn);

  //minute hand
  push();
  rotate(mn);
  stroke(250, 70, 70);
  line(0, 0, 50, 0);
  pop();
  
  //hours
  stroke(100, 120, 80);
  let hr = map(hR % 24, 0, 12, 0, 360) + map(min, 0, 360, 0, 30);
  arc(0, 0, 160, 160, 0, hr);

  //hour hand
  push();
  rotate(hr);
  stroke(100, 120, 80);
  line(0, 0, 30, 0);
  pop();

  stroke(0);
  
  point(0,0);









}