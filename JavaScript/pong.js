//This is the JavaScript main file

//-------------- Background functions & variables ---------------//

var cnvs = document.getElementById('Screen');
var bg = cnvs.getContext('2d');
var ball = cnvs.getContext('2d');
var ballx = cnvs.width / 2;
var bally = cnvs.height / 2;
var bmx = 2;
var bmy = 2;
var level = 1;
/*
var vpause = {
    "button": false,
    "ballx": 0,
    "bally": 0,
    "p1": 0,
    "p2": 0,
    "togOn": false,
    "bmx": 0,
    "bmy": 0
};
*/

function drawbg() {
    bg.beginPath();
    bg.rect((cnvs.width / 2) - 5, 0, 10, cnvs.height);
    bg.fillStyle = 'lightgrey';
    bg.fill();
    bg.closePath();
    bg.font = '30px monospace';
    bg.strokeText(`${player1.wins}`, (cnvs.width/2)-40, 30);
    bg.font = '30px monospace';
    bg.strokeText(`${player2.wins}`, (cnvs.width/2)+25, 30);
    bg.font = '70px monospace';
    bg.strokeText('P1', ((cnvs.width/4)-35), cnvs.height/2-70);
    bg.font = '70px monospace';
    bg.strokeText('P2', (((cnvs.width/4)*3)-35), cnvs.height/2-70);
}

//--------------- Key press listeners ---------------//

document.addEventListener('keydown', function(key) {
    if(key.keyCode == 79) {
        player2.buttonB = true;
    }
    else if(key.keyCode == 80) {
        player2.buttonA = true;
    }
    else if(key.keyCode == 87) {
        player1.buttonB = true;
    }
    else if(key.keyCode == 69) {
        player1.buttonA = true;
    }
});

document.addEventListener('keyup', function(key) {
    if(key.keyCode == 79) {
        player2.buttonB = false;
    }
    else if(key.keyCode == 80) {
        player2.buttonA = false;
    }
    else if(key.keyCode == 87) {
        player1.buttonB = false;
    }
    else if(key.keyCode == 69) {
        player1.buttonA = false;
    }
});

//--------------- Player 1 ---------------//

var player2 = {
    "paddle": cnvs.getContext('2d'),
    "pos": (cnvs.height/2),
    "width": 10,
    "height": 100,
    "buttonA": false,
    "buttonB": false,
    wins: 0,
};

function draw1() {
    player2.paddle.beginPath();
    player2.paddle.rect(cnvs.width-player1.width, player2.pos-(player2.height/2), player2.width, player2.height);
    player2.paddle.fillStyle = 'grey';
    player2.paddle.fill();
    player2.paddle.closePath();
}

function p_1() {
    if (player2.buttonA == true && player2.pos + (player2.height / 2) < cnvs.height) {
        player2.pos += 4;
    }
    
    if (player2.buttonB == true && player2.pos - (player2.height / 2) > 0) {
        player2.pos -= 4;
    }
}

//--------------- Player 2 ---------------//

var player1 = {
    "paddle": cnvs.getContext('2d'),
    "pos": (cnvs.height/2),
    "width": 10,
    "height": 100,
    "buttonA": false,
    "buttonB": false,
    wins: 0,
};

function draw2() {
    player1.paddle.beginPath();
    player1.paddle.rect(0, player1.pos-(player1.height/2), player1.width, player1.height);
    player1.paddle.fillStyle = 'grey';
    player1.paddle.fill();
    player1.paddle.closePath();
}

function p_2() {
    if (player1.buttonA == true && player1.pos + (player1.height / 2) < cnvs.height) {
        player1.pos += 4;
    }
    
    if (player1.buttonB == true && player1.pos - (player1.height / 2) > 0) {
        player1.pos -= 4;
    }
}

//--------------- Ball ---------------//

function flick() {   
        if (ballx < cnvs.width/2) {
        if (player1.buttonA == true) {
            bmy *= 1.2
            bmx *= 0.8 
        }
    }
}

function bounce() {
    ballx += bmx;
    bally += bmy;
    if ( ballx + 15 > cnvs.width) {
        bmx = -bmx;
        player1.wins += 1;
    }
    
    if ( ballx - 15 < 0 ) {
        bmx = -bmx;
        player2.wins += 1;
    }
    
     if ( bally - 15 < 0 || bally + 15 > cnvs.height) {
        bmy = -bmy;
    }
    
    if ( ballx - 15 < player1.width ) {
        if ( player1.pos - 50 <= bally && bally <= player1.pos - 50 + player1.height) {
            bmx = -bmx;
//            flick()==========================================
            ballx += 5;
        }     
    }
    
    if ( ballx + 15 > cnvs.width-player2.width ) {
        if ( player2.pos - 50 <= bally && bally <= player2.pos - 50 + player2.height) {
            bmx = -bmx;
//            flick()====================================================
            ballx -= 5;
        }     
    }
    
}

function drawBall() {
    ball.beginPath();
    ball.arc(ballx, bally, 15, 0, Math.PI*2);
    ball.fillStyle = 'lightblue';
    ball.strokeStyle = 'black';    
    ball.fill();
    ball.stroke()
    ball.closePath();
}

//--------------- Game functions ---------------//

function level() {
    if (bmx < 0) {
        bmx -= 1;
    } 
    if (bmx > 0){
        bmx += 1;
    }
    if (bmy < 0) {
        bmy -= 1;
    } 
    if (bmy > 0){
        bmy += 1;
    }
    level += 1;
}

var end = cnvs.getContext('2d');

function die(w) {
    clearInterval(draw); 
    clearInterval(move);
    clearInterval(level);
    end.clearRect(0, 0, cnvs.width, cnvs.height);
    end.font = '50px monospace';
    end.strokeText(w, 60, 60);
    setTimeout(() => {
        document.location.reload();
    }, 10000);   
}

function ended() {
    if (player1.wins >= 10) {
        die('Player 1 wins');
    }
    
    if (player2.wins >= 10) {
        die('Player 2 wins');
    }
}

//--------------- Main/Base functions ---------------//

function dev() {
    bmx = 0;
    bmy = 0;
    bally = 200;
    ballx = cnvs.width/2;
    player1.pos = 200;
    player2.pos = 200;
    player1.wins = 0;
    player2.wins = 0;
}

function aip() {
    player1.pos = bally;
    player2.pos = bally;
}


function ai() {
    var vai = setInterval(aip, 10);
    clearInterval(level);
    bmx = 5;
    bmy = 5;
}

/*
function pause() {
    if (vpause.button == true) {
        if (vpause.togOn == false) {
            vpause.bmx = bmx;
            vpause.bmy = bmy;
            vpause.ballx = ballx;
            vpause.bally = bally;
            vpause.p1 = player1.pos;
            vpause.p2 = player2.pos;
            vpause.togOn = true;
            bmx = 0;
            bmy = 0;
        }
        
        if (vpause.togOn == true) {
            bmx = vpause.bmx;
            bmy = vpause.bmy;
            bally = vpause.bally;
            ballx = vpause.ballx;
            player1.pos = vpause.p1;
            player2.pos = vpause.p2;
            vpause.togOn = false;        }
        vpause.button = false;
    }
}
*/

function draw() {
    player2.paddle.clearRect(0, 0, cnvs.width, cnvs.height);
    draw1();
    draw2()
    drawbg();
    drawBall();
    ended();
}

function move() {
    p_1();
    p_2();
    bounce();
}

var draw = setInterval(draw, 1);
var move = setInterval(move, 10);
var level = setInterval(level, 20000);