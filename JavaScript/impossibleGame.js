var cnvs = document.getElementById('Screen');

var i;
var s;
var angle;
var player = {
    "draw": cnvs.getContext('2d'),
    "color": "orange",
    "speed": 1,
    "pos": {
        "x": cnvs.width / 2,
        "y": cnvs.height / 2,
        "r": 10
    },
    "button": {
        "up": false,
        "down": false,
        "right": false,
        "left": false
    }
};

function randInt(min, max) {
    return Math.floor(Math.random() * max-min) + min;
}

var walls = {
    "draw": cnvs.getContext('2d'),
    "pos": [
        
        {
            "fillColor": "red",
            "x": 30, "y": 30, "w": 80, "h": 10,
            "sides": {"T": true, "L": false, "B": false, "R": false}
        },
             
        {
            "fillColor": "green",
            "x": 300, "y": 30, "w": 14, "h": 100,
            "sides": {"T": true, "L": true, "B": false, "R": true}
        },
             
        {
            "fillColor": "red",
            "x": 30, "y": 120, "w": 80, "h": 10,
            "sides": {"T": true, "L": false, "B": false, "R": false}
        },
            
        {
            "fillColor": "grey",
            "x": 30, "y": 30, "w": 10, "h": 100,
            "sides": {"T": true, "L": true, "B": true, "R": true}
        },
        
        {
            "fillColor": "yellow",
            "x": 400, "y": 300, "w": 5, "h": 200,
            "sides": {"T": true, "L": false, "B": true, "R": true}
        },
            
        {
            "fillColor": "grey",
            "x": 100, "y": 30, "w": 10, "h": 100,
            "sides": {"T": true, "L": true, "B": true, "R": true}
        }      
]};

var orbs = {
    "draw":  cnvs.getContext('2d'),
    "sprites": [
        
        {
        "draw": cnvs.getContext('2d'),
        "color": 'blue',
        "x": 350, "y": 350, "r": 10,
        "radius": 5,
        "list": [90, 100, 180, 100, 270, 100, 0, 100],
//        "list": [True north angle, distance, True north angle, distance]
        "xList": [],
        "yList": [],
        "step": 0
        }
    ],
    
    'drawSprites': function() {
        for (i in this.sprites) {
//            console.log(this)
            this.sprites[i].draw.beginPath();
            this.sprites[i].draw.arc(this.sprites[i].x, this.sprites[i].y, this.sprites[i].r, 0, Math.Pi*2)
            this.sprites[i].draw.fillStyle = this.sprites[i].color;
            this.sprites[i].draw.fill();
            this.sprites[i].draw.closePath;
        }
    }
}

/*
    player.draw.arc(player.pos.x, player.pos.y, player.pos.r, 0, Math.PI*2);
    player.draw.fillStyle = player.color;
    player.draw.fill();
    player.draw.closePath;
*/

function moveSprites() {}


//right, down, right, left, w, s, d, a
document.addEventListener('keydown', function(key) {
    if (key.keyCode === 38) {
        player.button.up = true;
    }
    if (key.keyCode === 40) {
        player.button.down = true;
    }
    if (key.keyCode === 39) {
        player.button.right = true;
    }
    if (key.keyCode === 37) {
        player.button.left = true;
    }
    if (key.keyCode === 87) {
        player.button.up = true;
    }
    if (key.keyCode === 83) {
        player.button.down = true;
    }
    if (key.keyCode === 68) {
        player.button.right = true;
    }
    if (key.keyCode === 65) {
        player.button.left = true;
    }
});

document.addEventListener('keyup', function(key) {
    if (key.keyCode === 38) {
        player.button.up = false;
    }
    if (key.keyCode === 40) {
        player.button.down = false;
    }
    if (key.keyCode === 39) {
        player.button.right = false;
    }
    if (key.keyCode === 37) {
        player.button.left = false;
    }
    if (key.keyCode === 87) {
        player.button.up = false;
    }
    if (key.keyCode === 83) {
        player.button.down = false;
    }
    if (key.keyCode === 68) {
        player.button.right = false;
    }
    if (key.keyCode === 65) {
        player.button.left = false;
    }
});

function drawWalls() {
    for (i in walls.pos) {
        walls.draw.beginPath();
        walls.draw.rect(walls.pos[i].x, walls.pos[i].y, walls.pos[i].w, walls.pos[i].h);
        walls.draw.fillStyle = walls.pos[i].fillColor;
        walls.draw.fill();
        walls.draw.closePath();
    }
}

function drawPlayer() {
    player.draw.beginPath();
    player.draw.arc(player.pos.x, player.pos.y, player.pos.r, 0, Math.PI*2);
    player.draw.fillStyle = player.color;
    player.draw.fill();
    player.draw.closePath;
}

/*
function drawOrbs() {
    for (i in orbs.sprites) {
        
    }
}
*/

function movePlayer() {
    if (player.button.up == true && player.button.down == true || player.button.right == true && player.button.left == true) {
        null
    }else if (player.button.up == true && player.pos.y - player.pos.r > 0 && collideWithWalls()['bottom'] == false && player.button.left == true && player.pos.x - player.pos.r > 0 && collideWithWalls()['right'] == false) {
        player.pos.y -= Math.sqrt(player.speed/2)
        player.pos.x -= Math.sqrt(player.speed/2)
    }else if (player.button.up == true && player.pos.y - player.pos.r > 0 && collideWithWalls()['bottom'] == false && player.button.right == true && player.pos.x + player.pos.r < cnvs.width && collideWithWalls()['left'] == false) {
        player.pos.y -= Math.sqrt(player.speed/2)
        player.pos.x += Math.sqrt(player.speed/2)
    }else if (player.button.down == true && player.pos.y + player.pos.r < cnvs.height && collideWithWalls()['top'] == false && player.button.left == true && player.pos.x - player.pos.r > 0 && collideWithWalls()['right'] == false) {
        player.pos.y += Math.sqrt(player.speed/2)
        player.pos.x -= Math.sqrt(player.speed/2)
    } else if (player.button.down == true && player.pos.y + player.pos.r < cnvs.height && collideWithWalls()['top'] == false && player.button.right == true && player.pos.x + player.pos.r < cnvs.width && collideWithWalls()['left'] == false) {
        player.pos.y += Math.sqrt(player.speed/2)
        player.pos.x += Math.sqrt(player.speed/2)
    }else if (player.button.up == true && player.pos.y - player.pos.r > 0 && collideWithWalls()['bottom'] == false) {
        player.pos.y -= player.speed;
    }else if (player.button.down == true && player.pos.y + player.pos.r < cnvs.height && collideWithWalls()['top'] == false) {
        player.pos.y += player.speed;
    }else if (player.button.right == true && player.pos.x + player.pos.r < cnvs.width && collideWithWalls()['left'] == false) {
        player.pos.x += player.speed;
    }else if (player.button.left == true && player.pos.x - player.pos.r > 0 && collideWithWalls()['right'] == false) {
        player.pos.x -= player.speed;
    }
}

function distance(dx, dy) {
    var x = Math.abs(player.pos.x - dx)
    var y = Math.abs(player.pos.y - dy)
    var out = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    return out
}

function collideWithWalls() {
    var collide = {
        "top": false,
        "right": false,
        "bottom": false,
        "left": false
    };
    
    for (i in walls.pos) {
        if (walls.pos[i].x <= player.pos.x && player.pos.x <= walls.pos[i].x + walls.pos[i].w && walls.pos[i].y - player.pos.r <= player.pos.y && player.pos.y <= walls.pos[i].y && walls.pos[i].sides.T == true){
            collide.top = true;
        }
        
        if (walls.pos[i].x - player.pos.r <= player.pos.x && player.pos.x <= walls.pos[i].x && walls.pos[i].y <= player.pos.y && player.pos.y <= walls.pos[i].y + walls.pos[i].h && walls.pos[i].sides.L == true) {
            collide.left = true;
        }
        
        if (walls.pos[i].x <= player.pos.x && player.pos.x <= walls.pos[i].x + walls.pos[i].w && walls.pos[i].y + walls.pos[i].h <= player.pos.y && player.pos.y <= walls.pos[i].y  + walls.pos[i].h + player.pos.r && walls.pos[i].sides.B == true) {
            collide.bottom = true;
        }
        
        if (walls.pos[i].x + walls.pos[i].w <= player.pos.x && player.pos.x <= walls.pos[i].x + walls.pos[i].w + player.pos.r && walls.pos[i].y <= player.pos.y && player.pos.y <= walls.pos[i].y + walls.pos[i].h && walls.pos[i].sides.R == true) {
            collide.right = true
        }
        
        if (0 < (player.pos.r - 1) - distance(walls.pos[i].x, walls.pos[i].y) && player.pos.x < walls.pos[i].x && player.pos.y < walls.pos[i].y && walls.pos[i].sides.T == true && walls.pos[i].sides.L == true) {
            collide.top = true;
            collide.left = true;
        }
        
        if (0 < (player.pos.r - 1) - distance(walls.pos[i].x + walls.pos[i].w, walls.pos[i].y) && walls.pos[i].x + walls.pos[i].w < player.pos.x && walls.pos[i].sides.T == true && walls.pos[i].sides.R == true) {
            collide.top = true;
            collide.right = true;
        }
        
        if (0 < (player.pos.r - 1) - distance(walls.pos[i].x, walls.pos[i].y + walls.pos[i].h) && player.pos.x < walls.pos[i].x && walls.pos[i].y + walls.pos[i].h && walls.pos[i].sides.B == true && walls.pos[i].sides.L == true) {
            collide.bottom = true;
            collide.left = true;
        }
        
        if (0 < (player.pos.r - 1) - distance(walls.pos[i].x + walls.pos[i].w, walls.pos[i].y + walls.pos[i].h) && walls.pos[i].x + walls.pos[i].w < player.pos.x && walls.pos[i].y + walls.pos[i].h < player.pos.y && walls.pos[i].sides.B == true && walls.pos[i].sides.R == true) {
            collide.bottom = true;
            collide.right = true;
        }
    }
    return collide
}
function mainDraw() {
    cnvs.getContext('2d').clearRect(0, 0, cnvs.width, cnvs.height)
    drawWalls();
    drawPlayer();
    orbs.drawSprites()
}

function mainMove() {
    movePlayer();
}

function main() {
    mainMove();
    mainDraw();
}

var main = setInterval(main, 1);