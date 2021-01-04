class baseClass {
    constructor(xpos, ypos, width, height, angle)
    {
    var box_options= {restitution:1, friction:1.2}
    this.body = Bodies.rectangle(xpos,ypos,width,height,box_options);
    World.add(world,this.body);
    
    this.width= width;
    this.height= height;
    this.image= loadImage("sprites/base.png")
    }

   display()
   {
    var position= this.body.position;
    var angle = this.body.angle;

    push();
    translate(position.x,position.y)
    imageMode(CENTER)
    rotate(angle)
    
    image(this.image,0,0,this.width,this.height)
    pop();
   }
}
