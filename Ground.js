class Ground
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}