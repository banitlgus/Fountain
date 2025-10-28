class Fountain {
  constructor() {
    this.pos = createVector(random(width), 0);
    this.vel = createVector(0,0.5);
    this.acc = createVector(0, random(0, 0.5));
    this.w = random(0.5,5);
    this.c = color(random(255),200,255);
  }

  drip() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  checkGround() {
    return this.pos.y == height-this.w/2;
  }
  
  jet(){
    if (this.pos.y >= height-this.w/2){
      this.vel.y *= -0.9;
    }
  }

  form() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.w);
  }
}
