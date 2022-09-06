var cnvs = document.getElementById('Screen');
var circle = cnvs.getContext('2d');
var midX = cnvs.width / 2;
var midY = cnvs.height / 2;

var triangle1 = {
    "base": cnvs.getContext('2d'),
    "angle": 270
}

/* base commands bellow */

function drawCircle(x, y, radius, width=2, colour='black') {
    circle.beginPath();
    circle.strokeStyle = colour;
    circle.lineWidth = width;
    circle.arc(x, y, radius, 0, Math.PI*2);
    circle.stroke();
    circle.closePath();
}

function sin(angleDegrees) {
    return Math.sin(angleDegrees*Math.PI/180);
}

function cos(angleDegrees) {
    return Math.cos(angleDegrees*Math.PI/180);
}
/* base commands above */


function drawTriangle() {
    triangle1.base.beginPath();
    triangle1.base.strokeStyle = 'black';
    triangle1.base.lineWidth = 2;
    triangle1.base.moveTo(midX-100, midY);
    triangle1.base.lineTo(midX+cos(triangle1.angle)*100, midY+sin(triangle1.angle)*100);
    triangle1.base.lineTo(midX+100, midY);
    triangle1.base.stroke();
    triangle1.base.closePath();
}

function doCircle() {
    circle.beginPath();
    circle.strokeStyle = 'grey';
    circle.lineWidth = 1;
    circle.arc(midX, midY, 100, 0, 2*Math.PI);
    circle.stroke();
    circle.closePath();
}

function draw() {
    triangle1.base.clearRect(0, 0, cnvs.width, cnvs.height);
    drawTriangle();
    doCircle();
}

function move() {
    triangle1.angle += 0.4;
}

function base() {
    draw();
    move();
}

setInterval(base, 1)