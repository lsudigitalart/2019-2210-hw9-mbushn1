var myCar;
var cars = [];
var mySpeed = 1;
var myFont

function preload(){
  myFont=loadFont('Terminal.ttf')
}

function setup() {
  frameRate(60)
  createCanvas(windowWidth,windowHeight);

  textFont(myFont);
  textSize(150);
  textAlign(CENTER, CENTER);

  myCar = new Car(10,200);

  for(var i =0; i < 10; i++){
    cars.push(new Car(random(5),random(225)));
    
  }
  for(var i =0; i < 10; i++){
   cars[i].display(); 
  }

}

function draw() {


  background(100);
  push();
  fill("black")
  rect(1450,35,100,900)
  pop();

  push();
  fill("red");
  square(0+mySpeed,20,70,4);
  pop();

  for(var i =0; i < 10; i++){
   cars[i].update();
  }
  if (mySpeed>1450){
      push();
      textAlign(CENTER);
      fill("Green");
      text('You Win', 800, 450);
      frameRate(0);
      pop();
  
  }

}

class Car {
  constructor(tempSpeed, tempColor) {
    this.speed = tempSpeed;
    this.color = tempColor;
    this.yMov = random(height)
    this.xPos = 0
  

    this.display = function () {
      fill(0,0,this.color)
    };

    this.update = function () {
      if(keyIsPressed){
        if(key="d"){
        mySpeed+=.6
        }
      }

      push();
      translate(this.xPos,this.yMov,0);
      square(0,20,70,4);
      this.xPos += this.speed;
      pop();
      
      if (this.xPos>1450){
        push();
        fill("red");
        text('You Lose', 800, 450);
        frameRate(0);
        pop();
      }
    };


    this.interaction = function () {
      
    }

  }
}
  