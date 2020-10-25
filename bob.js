class Bob {
  constructor(x, y, radius){
    var options = {
      isStatic: false,
      restitution:1,
      friction:0.1,
      density: 1.0
  }

  this.body = Bodies.circle(x, y, radius, options);
  this.radius = radius;

  World.add(world, this.body);
}
display(){
  
 // var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
  fill("blue");
  //ellipseMode(RADIUS);
  ellipse(0, 0, 2*this.radius, 2*this.radius);
  pop();
}
}