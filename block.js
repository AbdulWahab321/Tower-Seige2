class Blocks{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
       
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}