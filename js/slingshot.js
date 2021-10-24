class Slingshot{

constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB = pointB
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
}
//null implies nothing in javascript.
fly(){
//over here we are changing to body A to null
this.chain.bodyA = null;
}
display(){
    //We only want to use the display function if a body is not null
    if(this.chain.bodyA){
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}