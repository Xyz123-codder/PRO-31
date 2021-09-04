class Drops{

    constructor(x,y){

        var options={
            restitution:0.1,
            friction:0.01
        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 5;
        World.add(world,this.body);

    }


    display(){

        nostroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }












































}