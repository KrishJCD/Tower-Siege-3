class Block
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            //'isStatic':true
        }
        this.visibility=255;
        //this.color=color;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        var angle =this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        if(this.body.speed>3)
        {
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            //rect(0,0,this.w,this.h);
            World.remove(world,this.body);
        }
        else
        rect(0,0,this.w,this.h);
        pop();
    }
}