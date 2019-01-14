console.log('reading.js');


//!!!script example
// function setup(){
//   // size is createCanvas in p5
//   // create variable to reference the canvas
//   var myCanvas = createCanvas(800,250);
//   //connect myCanvas to mySketch
//   myCanvas.parent('mySketch');
// }
//
// function draw(){
//   ellipse(mouseX,mouseY,50,50);
// }


var brushSize = 20;
var bgs, bgx, bgy;
function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  bgs = 50;
  bgx = 20;
  bgy = 0;
}

function draw() {
  background(255, 229, 240);
  for (var i=0; i<width; i+=100) {
    fill(255, 102, 107, 50);
    rect(bgx+i, bgy, bgs, bgs+250);
    i++;
  }
  noStroke();
  fill(255, 102, 150, 50);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  ellipse(mouseX+50, mouseY, brushSize, brushSize);
  ellipse(mouseX-50, mouseY, brushSize, brushSize);
  ellipse(mouseX, mouseY+50, brushSize, brushSize);
  ellipse(mouseX, mouseY-50, brushSize, brushSize);
  ellipse(mouseX+30, mouseY+30, brushSize, brushSize);
  ellipse(mouseX-30, mouseY-30, brushSize, brushSize);
  ellipse(mouseX+30, mouseY-30, brushSize, brushSize);
  ellipse(mouseX-30, mouseY+30, brushSize, brushSize);

  if (mouseIsPressed) {
    fill(255, 255, 255);
    ellipse(mouseX+60, mouseY+60, brushSize, brushSize);
    ellipse(mouseX-60, mouseY-60, brushSize, brushSize);
    ellipse(mouseX+60, mouseY-60, brushSize, brushSize);
    ellipse(mouseX-60, mouseY+60, brushSize, brushSize);

    ellipse(mouseX+100, mouseY+100, brushSize/2, brushSize/2);
    ellipse(mouseX-100, mouseY-100, brushSize/2, brushSize/2);
    ellipse(mouseX+100, mouseY-100, brushSize/2, brushSize/2);
    ellipse(mouseX-100, mouseY+100, brushSize/2, brushSize/2);
  }
}
