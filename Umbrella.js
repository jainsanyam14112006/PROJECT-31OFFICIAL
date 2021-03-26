class Umbrella{
    constructor(x,y){
        var options={
            'isStatic':true,
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        this.image=loadImage("images/walking Frame/walking_1.png","images/walking Frame/walking2.png","images/walking Frame/walking3.png","images/walking Frame/walking4.png","images/walking Frame/walking5.png","images/walking Frame/walking6.png","images/walking Frame/walking7.png","images/walking Frame/walking8.png");
        world.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}