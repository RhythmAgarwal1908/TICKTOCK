var hr,min,sec;
function setup(){
    createCanvas(800,800)
    player1 = createSprite(100,750,50,50);
    player2 = createSprite(600,750,50,50);
 
}

function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
  }

function draw(){
    background("black")
  translate(180,180)
    var hr = hour();
    var min = minute();
    var sec = second();

    strokeWeight(8);
    noFill();

    stroke(68, 43, 209);
    let secondsAngle = map(sec, 0 , 60 , 0 , 360);
    arc(0, 0 , 360 , 360 , 0 , secondsAngle);
  
    stroke(255,165,0);
    let minuteAngle = map(min, 0 , 60 , 0 , 360);
    arc(0, 0 , 340 , 340 , 0 , minuteAngle );
  
    stroke(255, 38, 81);
    let hourAngle = map(hr % 12 , 0 , 12 , 0 , 360);
    arc(0, 0 , 320 , 320 , 0 , hourAngle);


    
push();
rotate(secondsAngle);

stroke(255,0,0);
line(0,0,100,0);
pop();

push();
rotate(minuteAngle);
stroke(214, 68, 192);
line(0,0,90,0);
pop();

push();
rotate(hourAngle);
stroke(255,223,0);

line(0,0,60,0);
pop();

stroke(255); 
point(0,0);
}