class Box{

constructor(x,y,width,height)
{

    //default function
    //create bodies and add to the world

    var options={
        restitution:1.0,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}


display()
{
    var pos=this.body.position;
    fill ("white")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height)

}









};