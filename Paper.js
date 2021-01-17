class Paper{
constructor(x,y){

var options = {
 'isStatic':false,
'restitution':0.3,
'friction':0.5,
'density':1.2
}

this.body = Bodies.circle(x,y,20/2,options,10);
this.radius = 20/2;

World.add(world, this.body);
}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
ellipseMode(RADIUS);
fill("pink");
ellipse(0,0, this.radius);
pop();



}



}