class bird extends baseClass {
  constructor(x,y){
    super(x,y,width,height)
  }
  display(){
    this.body.position.x = mouseX
    this.body.postion.y = mouseY
  }
}
