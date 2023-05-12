let rectObjs = []; 
let circleObjs = [];

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

}

function draw() {
 background(50);
 noStroke();
 rectMode(CENTER);
 fill(255);
 for (let i = 0; i < rectObjs.length; i++) {
//  fill(rectObjs[i].fillColor);
 rect(rectObjs[i].xpos,
 rectObjs[i].ypos, 50, 25);
//  rectObjs[i].ypos += 1;
}

}

function mousePressed() {
 rectObjs.push({xpos: mouseX, ypos: mouseY,
 fillColor: random(255)});
 }

//  if (mode == 1) {
//     displayTrees();
//   }

//     if ((xpos>650 && xpos<750) && (ypos>100 && ypos<150)){
//       background.style.display='block';
//       trees.style.display='none';
//     }

//     removeElements();
//     let trees = createImg("images/face3.png");
//      trees.size(118.8,220.2);
//      trees.id('trees');