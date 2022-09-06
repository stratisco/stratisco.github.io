var cnvs = document.getElementById('Screen');
var ctx = cnvs.getContext('2d');


/*function draw_circle(x, y, r, colour = "black") {
    screen.beginPath();
    screen.arc(x, y, r, 0, Math.Pi*2);
    screen.fillStyle = colour;
    screen.fill();
    screen.closePath;
}*/



function draw_circle (x, y, r=1, colour="black") {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
}

draw_circle(10, 100, colour="red")