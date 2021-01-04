class bird extends baseClass{
    constructor(x,y)
  {
      super(x,y,50,50)

      this.image=loadImage("sprites/bird.png")
  }

  display()
      {
       var position=this.body.position;
       position.x = mouseX;
       position.y = mouseY;
       
       super.display();
      }

}