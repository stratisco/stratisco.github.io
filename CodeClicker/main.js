/*
----- there is sound affects so turn on sound -----
*/

var pClick = 1;
var pSec = 0;
var lines = 0;
var item;

var upSFX = new Audio('SFX/newCookie.mp3');

var upgrades  = { //for upgrading clicks/seconds
    'a1': {
        'price': 100,
        'value': 1,
        'amount': 0
    },
    
    'a2': {
        'price': 255,
        'value': 5,
        'amount': 0
    },
    
    'a3': {
        'price': 700,
        'value': 30,
        'amount': 0
    },
    
    'a4': {
        'price': 1500,
        'value': 100,
        'amount': 0
    },
    
    'a5': {
        'price': 10000,
        'value': 500,
        'amount': 0
    },
    
    'a6': {
        'price': 100000,
        'value': 2000,
        'amount': 0
    },
    /* -----#-----#----- */
    'b1': {
        'price': 30,
        'value': 1,
        'amount': 0
    },
    
    'b2': {
        'price': 100,
        'value': 5,
        'amount': 0
    },
    
    'b3': {
        'price': 500,
        'value': 20,
        'amount': 0
    },
    
    'b4': {
        'price': 3000,
        'value': 100,
        'amount': 0
    }
};


var cookies = { //for button switching
    'c1': {
        'price': 0,
        'src': 'cookie1.png',
        'owned': 1
    },
    
    'c2': {
        'price': 1000,
        'src': 'cookie2.png',
        'owned': 0
    },
    
    'c3': {
        'price': 5000,
        'src': 'cookie3.png',
        'owned': 0
    },
    
    'c4': {
        'price': 10000,
        'src': 'cookie4.png',
        'owned': 0
    },
    
    'c5': {
        'price': 30000,
        'src': 'cookie5.png',
        'owned': 0
    },
    
    'c6': {
        'price': 100000,
        'src': 'cookie6.png',
        'owned': 0
    }    
}

/*
var color = { //for dark/light mode switch (Not-Used)
    'dark': [
        {'name': '--bgTint',
            'value': '#48596c'},
        
        {'name': '--darkTint',
            'value': '#34404d'},
        
        {'name': '--board',
            'value': '#ffa54f'},
        
        {'name': '--boardOut',
            'value': '#a0522d'},
        
        {'name': '--headerHover',
            'value': '#53667b'}
    ]
};
*/

function upgrade(item) { //upgrades the clicks/second
    if (upgrades[item].price <= lines) {
        lines -= upgrades[item].price;
        if (item[0] == 'b') {
            pClick += upgrades[item].value;
            upgrades[item].amount++;
        } else if (item[0] == 'a') {
            pSec += upgrades[item].value
            upgrades[item].amount++;
        } else {
            console.log('Value error 01')
        }
    }
}

setInterval(function() { //refreshes the page
    document.querySelector("#cCount").textContent = lines;
    document.querySelector("#cps").textContent = pSec;
    document.querySelector("#cpc").textContent = pClick;
    for (i in upgrades) {
        document.querySelector(`#${i}`).textContent = upgrades[i].amount
    }
}, 5);

function buy(item) { //Differet button image purchasing
    if (cookies[`c${item}`].owned == 1) {
        document.getElementById('cookie').src = `images/${cookies[`c${item}`].src}`;
        upSFX.play();
    } else if (cookies[`c${item}`].price <= lines ){
        lines -= cookies[`c${item}`].price;
        cookies[`c${item}`].owned = 1;
        document.querySelector(`#cookie${item}`).style.background = 'limegreen'
        document.getElementById('cookie').src = `images/${cookies[`c${item}`].src}`;
        document.querySelector(`#cookie${item} > li > p`).textContent = 'Owned';
        upSFX.play();
    }
}

function Hax() {
    lines = 1000000;
}

function Halo() {
    console.log('Welcome Back Dev Angel')
    lines = Infinity;
}
var win = setInterval(function() {
    if (lines > 100000000) {
        alert('you have hacked the world')
        clearInterval(win)
    }
}, 100)

setInterval(function() {lines += pSec}, 1000);