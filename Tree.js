class tree {
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        'restitution':0,
        'friction':10,
        'density':20
    }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
        this.image=loadImage("images/tree.png")
    }
display(){
    var pos=this.body.position;
    push()
    translate(pos.x, pos.y+10);
  
    imageMode(CENTER);
    image(this.image, 0,0,this.width,this.height)
    pop()
    
}
}