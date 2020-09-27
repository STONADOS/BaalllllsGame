const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var kills = 0


var replay;
var songnum = 1;
// var back;

var paperBall, floor, bin, bin2, bin3, slingshot, ball, enemy1, mouse;

var num = 0

var state = "play"

var gamestate =  "launched";
function preload(){
    back = loadImage("sprites/2Untitled.png");
    song = loadSound("sprites/preview.mp3")
}

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    mouse = new Mouse(50, 650, 50 , 50);
    lava = new Lava(700, 850, 1400000, 400);
    floor = new Ground(700, 610, 1400, 35);
    invi = new invis(700, 618, floor.width, 5);    

    ball = new Ball(50, 600, 55);
    enemy1 = new enemy();
    enemy2 = new enemy();
    enemy3 = new enemy();
    enemy4 = new enemy();
    enemy5 = new enemy();
    enemy6 = new enemy();
    enemy7 = new enemy();
    enemy8 = new enemy();
    enemy9 = new enemy();
    enemy10 = new enemy();
    enemy11 = new enemy();
    enemy12 = new enemy();
    enemy13 = new enemy();
    enemy14 = new enemy();
    enemy15 = new enemy();
    enemy16 = new enemy();
    enemy17 = new enemy();
    enemy18 = new enemy();
    enemy19 = new enemy();
    enemy20 = new enemy();
    enemy21 = new enemy();
    enemy22 = new enemy();
    enemy23 = new enemy();
    enemy24 = new enemy();
    enemy25 = new enemy();
    enemy26 = new enemy();
    enemy27 = new enemy();
    enemy28 = new enemy();
    enemy29 = new enemy();
    enemy30 = new enemy();
    enemy31 = new enemy();
    enemy32 = new enemy();
    enemy33 = new enemy();
    enemy34 = new enemy();
    enemy35 = new enemy();
    enemy36 = new enemy();
    enemy37 = new enemy();
    enemy38 = new enemy();
    enemy39 = new enemy();
    enemy40 = new enemy();
    enemy40 = new enemy();
    enemy41 = new enemy();
    enemy42 = new enemy();
    enemy43 = new enemy();
    enemy44 = new enemy();
    enemy45 = new enemy();
    enemy46 = new enemy();
    enemy47 = new enemy();
    enemy48 = new enemy();
    enemy49 = new enemy();
    enemy50 = new enemy();
    enemy51 = new enemy();
    enemy52 = new enemy();
    enemy53 = new enemy();
    enemy54 = new enemy();
    enemy55 = new enemy();
    enemy56 = new enemy();
    enemy57 = new enemy();
    enemy58 = new enemy();
    enemy59 = new enemy();
    enemy60 = new enemy();
    enemy60 = new enemy();
    enemy60 = new enemy();
    enemy61 = new enemy();
    enemy62 = new enemy();
    enemy63 = new enemy();
    enemy64 = new enemy();
    enemy65 = new enemy();
    enemy66 = new enemy();
    enemy67 = new enemy();
    enemy68 = new enemy();
    enemy69 = new enemy();
    enemy70 = new enemy();
    enemy71 = new enemy();
    enemy72 = new enemy();
    enemy73 = new enemy();
    enemy74 = new enemy();
    enemy75 = new enemy();

    killer1 = new killers();
    killer2 = new killers();
    killer3 = new killers();
    killer4 = new killers();
    killer5 = new killers();
    killer6 = new killers();
    killer7 = new killers();


    slingshot = new SlingShot(mouse.body, ball.body);

    replay = createSprite(ball.body.position.x, ball.body.position.y);
    replay.visible = false;



} 

function draw() {
    background("black");
    drawSprites();
    if (keyDown("space") && songnum == 1){
    song.play();
    songnum +=1
    }

    Engine.update(engine);
    lava.display();
    floor.display();

    killer1.display();
    killer2.display();
    killer3.display();
    killer4.display();
    killer5.display();
    killer6.display();
    killer7.display();
    ball.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy11.display();
    enemy12.display();
    enemy13.display();
    enemy14.display();
    enemy15.display();
    enemy16.display();
    enemy17.display();
    enemy18.display();
    enemy19.display();
    enemy20.display();
    enemy21.display();
    enemy22.display();
    enemy23.display();
    enemy24.display();
    enemy25.display();
    enemy26.display();
    enemy27.display();
    enemy28.display();
    enemy29.display();
    enemy30.display();
    enemy31.display();
    enemy32.display();
    enemy33.display();
    enemy34.display();
    enemy35.display();
    enemy36.display();
    enemy37.display();
    enemy38.display();
    enemy39.display();
    enemy40.display();
    enemy41.display();
    enemy42.display();
    enemy43.display();
    enemy44.display();
    enemy45.display();
    enemy46.display();
    enemy47.display();
    enemy48.display();
    enemy49.display();
    enemy50.display();
    enemy51.display();
    enemy52.display();
    enemy53.display();
    enemy54.display();
    enemy56.display();
    enemy57.display();
    enemy58.display();
    enemy59.display();
    enemy60.display();
    enemy61.display();
    enemy62.display();
    enemy63.display();
    enemy64.display();
    enemy65.display();
    enemy66.display();
    enemy67.display();
    enemy68.display();
    enemy69.display();
    enemy70.display();
    enemy71.display();
    enemy72.display();
    enemy73.display();
    enemy74.display();
    enemy75.display();


    fill("pink")
    textSize(55);
    text("Score: "+num, camera.position.x - 120, camera.position.y - 270);
    textSize(30);
    text("Kills: "+kills, camera.position.x - 50, camera.position.y - 230);

    detectollision(ball, enemy1)
    detectollision(ball, enemy2)
    detectollision(ball, enemy3)
    detectollision(ball, enemy4)
    detectollision(ball, enemy5)
    detectollision(ball, enemy6)
    detectollision(ball, enemy7)
    detectollision(ball, enemy8)
    detectollision(ball, enemy9)
    detectollision(ball, enemy10)
    detectollision(ball, enemy11)
    detectollision(ball, enemy12)
    detectollision(ball, enemy13)
    detectollision(ball, enemy14)
    detectollision(ball, enemy15)
    detectollision(ball, enemy16)
    detectollision(ball, enemy17)
    detectollision(ball, enemy18)
    detectollision(ball, enemy19)
    detectollision(ball, enemy20)
    detectollision(ball, enemy21)
    detectollision(ball, enemy22)
    detectollision(ball, enemy23)
    detectollision(ball, enemy24)
    detectollision(ball, enemy25)
    detectollision(ball, enemy26)
    detectollision(ball, enemy27)
    detectollision(ball, enemy28)
    detectollision(ball, enemy29)
    detectollision(ball, enemy30)
    detectollision(ball, enemy31)
    detectollision(ball, enemy32)
    detectollision(ball, enemy33)
    detectollision(ball, enemy34)
    detectollision(ball, enemy35)
    detectollision(ball, enemy36)
    detectollision(ball, enemy37)
    detectollision(ball, enemy38)
    detectollision(ball, enemy39)
    detectollision(ball, enemy40)
    detectollision(ball, enemy41)
    detectollision(ball, enemy43)
    detectollision(ball, enemy44)
    detectollision(ball, enemy45)
    detectollision(ball, enemy46)
    detectollision(ball, enemy47)
    detectollision(ball, enemy48)
    detectollision(ball, enemy49)
    detectollision(ball, enemy50)
    detectollision(ball, enemy51)
    detectollision(ball, enemy52)
    detectollision(ball, enemy53)
    detectollision(ball, enemy54)
    detectollision(ball, enemy55)
    detectollision(ball, enemy56)
    detectollision(ball, enemy57)
    detectollision(ball, enemy58)
    detectollision(ball, enemy59)
    detectollision(ball, enemy60)
    detectollision(ball, enemy61)
    detectollision(ball, enemy62)
    detectollision(ball, enemy63)
    detectollision(ball, enemy64)
    detectollision(ball, enemy65)
    detectollision(ball, enemy66)
    detectollision(ball, enemy67)
    detectollision(ball, enemy68)
    detectollision(ball, enemy69)
    detectollision(ball, enemy71)
    detectollision(ball, enemy72)
    detectollision(ball, enemy73)
    detectollision(ball, enemy74)
    detectollision(ball, enemy75)
    

    // // 
    // detectollision2(killer1, ball)
    // detectollision2(killer2, ball)
    // detectollision2(killer3, ball)
    // detectollision2(killer4, ball)
    // detectollision2(killer5, ball)
    // detectollision2(killer6, ball)
    // detectollision2(killer7, ball)

    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
}

function mouseDragged(){
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    if (gamestate== "on sling" && state == "play"){
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
    if (gamestate == "launched" && state == "play"){
        slingshot.attach(ball.body)
        Body.setPosition(mouse.body, {x:mouseX, y:mouseY});
        gamestate = "on sling";
    }
}

function mouseReleased(){
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    if (gamestate == "on sling" && state == "play"){
    slingshot.fly();
    camera.position.x = ball.body.position.x;
    camera.position.y = ball.body.position.y;
    gamestate = "launched";
    }
}



function detectollision(lstone,lmango){
  lmango.body.position
  lstone.body.position
  
  var distance=dist( lmango.body.position.x, lmango.body.position.y, lstone.body.position.x, lstone.body.position.y)

  	if(distance<=lmango.radius+lstone.radius)
    {
    Body.setStatic(lmango.body, false);
    Body.applyForce(lmango.body, lmango.body.position, {x:25, y:25});
    num += 50;
    kills +=1; 

    }

  }
