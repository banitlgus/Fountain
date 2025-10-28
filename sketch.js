let droplets = [];

function setup() {
  createCanvas(400, 800);
  noStroke();
  resetFountain();

  for (let i = 0; i < 1000; i++) {
    let w = new Fountain();
    droplets.push(w);
  }
}
function draw() {
  background(0);
  for (let w of droplets) {
    w.drip();
    if (!w.checkGround()) {
      w.jet();
    }
    w.form();
  }
}

function mousePressed() {
  resetFountain(); 
}

function resetFountain() {
  droplets = []; 
  for (let i = 0; i < 1000; i++) {
    droplets.push(new Fountain());
  }
}
