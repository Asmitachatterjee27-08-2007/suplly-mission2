class Holder{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        width=this.width;
        height=this.height;

        World.add(world,this.body);
      
       
    }

        display(){
            var pos=this.body.position;
                push();
                     translate(pos.x,pos.y);
                     rectMode(CENTER);
                     fill("red");
                    rect(0,0,width,height);
                pop();
        }
    }
