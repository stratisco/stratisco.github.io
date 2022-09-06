cnvs = document.getElementById('Screen');

var bg = cnvs.getContext('2d');

var circle1 = {
    "draw": cnvs.getContext('2d'),
    "a": 90,
    "x": cnvs.width/4,
    "y": cnvs.height/2,
    "radius": 40,
    "color": "black",
};

var circle2 = {
    "draw": cnvs.getContext('2d'),    
    "a": 5,
    "x": (cnvs.width/4)*3,
    "y": cnvs.height/2,
    "radius": 40,
    "color": "black",
};

function collide(obj1, obj2) {
    var r = obj1.radius + obj2.radius;
    var x = obj1.x - obj2.x;
    var y = obj1.y - obj2.y;
    return (r**2 > x**2 + y**2)
};

function calcMove1() {
    var x = Math.cos(circle1.a * Math.PI / 180);
    var y = Math.sin(circle1.a * Math.PI / 180);
    circle1.x += x;
    circle1.y += y;
}

function calcMove2() {
    var x = Math.cos(circle2.a * Math.PI / 180);
    var y = Math.sin(circle2.a * Math.PI / 180);
    circle2.x += x;
    circle2.y += y;
}

function draw(obj) {
    obj.draw.beginPath();
    obj.draw.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2)
    obj.draw.strokeStyle = obj.color
    obj.draw.lineWidth = 3;
    obj.draw.stroke()
    obj.draw.closePath()
}

function bounce() {
    if (collide(circle1, circle2))
}

function main() {
    bg.clearRect(0, 0, cnvs.width, cnvs.height);
    draw(circle1);
    draw(circle2);
    calcMove1();
    calcmove2();
}

function move() {
    
}

setInterval(main, 5)