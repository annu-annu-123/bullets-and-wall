var bullet,wall,speed,weight;
var thickness
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet= createSprite(50, 200, 50, 50);
  wall= createSprite(1200, 200, thickness,height/2);
bullet.shapeColor="white";
bullet.velocityX=speed
}

function draw() {
  background("black");  
 /* 
if(wall.x-car.x<car.width/2+wall.width/2 )
  {car.velocityX=0
    var deformation=0.5*speed*speed*weight/22500
    console.log(deformation)
    if(deformation>180) { car.shapeColor=color(255,0,0); }
     if(deformation<180 && deformation>100) { car.shapeColor=color(230,230,0); } 
     if(deformation<100) { car.shapeColor=color(0,255,0); }
}
*/
if(hascollide(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}



}


  drawSprites();
}
function hascollide(b,w){

  if(b.x+b.width>=w.x){
return true}
else{return false
  }
}
