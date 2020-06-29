class Ball {
    constructor(x,y,radius) {
      var options = {
        restitution:1.0,
        friction:1.0,
        density:1.0
       
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius=radius
     

      World.add(world, this.body);
    }
    display(){
     
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(pos.x,pos.y,this.radius,this.radius)
    }
  };