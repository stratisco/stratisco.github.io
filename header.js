var i = 0;
var cHead;
var cPage;
var style = getComputedStyle(document.body);
var colourMode = 0;
var tmp;
var colourList = ['bannerAccent', 'bannerInteract', 'itemHover', 'background'];
var allowCookies = false;

if (document.cookies == '' && window.location.protocol != 'file:') {
    document.write(`
<div class="cookieBanner">
	<p>By using my website you are agreeing to the use of cookies</p>
	<button class="cookieButton" onClick='document.querySelector("body > div").style.display = "none"; document.cookie = "cookies=accepted"; allowCookies = true'>&times;</button>
</div>`)
}



var headers = {
    '1 Player Games': {
        'src': '1PlayerGames.html',
        'id': null,
        'index': 0
    },
 
    '2 Player Games': {
        'src': '2PlayerGames.html',
        'id': null,
        'index': 1
    },

    'Self-Coded': {
        'src': 'selfCoded.html',
        'id': null,
        'index': 2
    },

    'Links': {
        'src': 'links.html',
        'id': null,
        'index': 3
    },

    'Algorithms': {
        'src': 'algorithms.html',
        'id': null,
        'index': 4
        
    }
};

var pages = {
    'Asteroid Shooter': {
        'src': 'asteroid.html',
        'tags': '10000',
        'class': null,
        'show': true
    },

    'Test Lab': {
        'src': 'asteroid.html',
        'tags': '00100',
        'class': 'personal',
        'show': true
    },
    
    'Pong' : {
        'src': 'pong.html',
        'tags': '01100',
        'class': null,
        'show': true
    },
    
    'The Box' : {
        'src': 'impossibleGame.html',
        'tags': '10100',
        'class': 'developing',
        'show': true
    },
    
    'Virtual Physics' : {
        'src': 'virtualPhysicsLab.html',
        'tags': '00100',
        'class': 'developing',
        'show': false
    },
    
    'Tik Tak Toe' : {
        'src': 'tikTakToe.html',
        'tags': '01100',
        'class': 'developing',
        'show': false
    },
    
    'Js Keycodes' : {
        'src': 'https://js-keycodes.stackblitz.io/',
        'tags': '00010',
        'class': null,
        'show': true
    },
    
    'Hummas Beings' : {
        'src': 'http://mcserver.pii.at/',
        'tags': '00010',
        'class': null,
        'show': true
    },
    
    'Hummas Server' : {
        'src': 'http://hummasserver.ddns.net/',
        'tags': '00010',
        'class': null,
        'show': true
    },
    
    'Hacked Asteroid Shooter' : {
        'src': 'hackedAsteroid.html',
        'tags': '00100',
        'class': null,
        'show': true
    },
    
    'Math test' : {
        'src': 'math1.html',
        'tags': '00001',
        'class': null,
        'show': true
        
    },
    
    'Bezier Curve' : {
        'src': 'bezier.html',
        'tags': '00001',
        'class': 'developing',
        'show': false
    }
    
/*    '3D display' : {
        'src': '3d_display.html',
        'tags': '00101',
        'class': "developing",
        'show': true
        
    }*/
};

function setCookie(name, value) {
    if (allowCookies) {
        document.cookie = `${name}=${value}`;
    }
};

function getCookie(cname) { //from w3schools
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(i=0;i<ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

function modeSwitcher(elm=null) {
    for (peice in colourList) {
        tmp = style.getPropertyValue(`--${colourList[peice]}1`);
        
            document.body.style.setProperty(`--${colourList[peice]}1`, style.getPropertyValue(`--${colourList[peice]}0`));

        
        document.body.style.setProperty(`--${colourList[peice]}0`, tmp);
    }
    if (getCookie('_colourMode') == 'blue') {
        setCookie('_colourMode', 'orange');
    } else {setCookie('_colourMode', 'blue');}
};

document.write(`<header><ul><li id='/home'><a href='index.html'>Home</a></li>`);

for (cHead in headers) {
    if (i !== 0) {
        document.write(`</ul>`);
    }
    document.write(`</li><li><a href='${headers[cHead].src}'>${cHead}</a><ul>`);
    for (cPage in pages) {
        if (pages[cPage].tags[i] == 1 && pages[cPage].show) {
            if (pages[cPage].class == null) {
                document.write(`<li><a href='${pages[cPage].src}'>${cPage}</a></li>`);
            } else {
                document.write(`<li><a href='${pages[cPage].src}' class='${pages[cPage].class}'>${cPage}</a></li>`);
            }
        }
    }
    i++;
};

document.write(`</ul></li>
<label class="modeSwitch">
<input type="checkbox" onchange="modeSwitcher(this)">
<div class="ball"></div>
</label>
</ul></header>`);

document.addEventListener('keydown', function (key) { // no arrow key web move
  if([37,38,39,40].indexOf(key.keyCode) > -1){
    key.preventDefault();
  }
}, false);

if (getCookie('_colourMode') == 'blue') {
    modeSwitcher();
    setCookie('_colourMode', 'blue');
} else {
    setCookie('_colourMode', 'orange');
}