var i = 0;
var cHead;
var cPage;
var cVis;

var headers = {
    '1 Player Games': {
        'src': null,
        'id': null
    },
 
    '2 Player Games': {
        'src': null,
        'id': null
    },

    'Self-Coded': {
        'src': null,
        'id': null
    },

    'Links': {
        'src': null,
        'id': null
    },

    'Algorithms': {
        'src': null,
        'id': null
    }
};

var pages = {
    'Asteroid Shooter': {
        'src': 'asteroid.html',
        'tags': '10000',
        'class': null
    },

    'Test Lab': {
        'src': 'asteroid.html',
        'tags': '00100',
        'class': 'personal'
    },
    
    'Pong' : {
        'src': 'pong.html',
        'tags': '01100',
        'class': null
    },
    
    'The Box' : {
        'src': 'impossibleGame.html',
        'tags': '10100',
        'class': 'developing'
    },
    
    'Virtual Physics' : {
        'src': 'virtualPhysicsLab.html',
        'tags': '00100',
        'class': 'developing'
    },
    
    'Tik Tak Toe' : {
        'src': 'tikTakToe.html',
        'tags': '01100',
        'class': 'developing'
    },
    
    'Js Keycodes' : {
        'src': 'https://js-keycodes.stackblitz.io/',
        'tags': '00010',
        'class': null
    },
    
    'Hummas Beings' : {
        'src': 'http://mcserver.pii.at/',
        'tags': '00010',
        'class': null
    },
    
    'Hummas Server' : {
        'src': 'http://hummasserver.ddns.net/',
        'tags': '00010',
        'class': null
    },
    
    'Hacked Asteroid Shooter' : {
        'src': 'hackedAsteroid.html',
        'tags': '00100',
        'class': null
    },
    
    'Math test' : {
        'src': 'math1.html',
        'tags': '00001',
        'class': null
        
    },
    
    'Bezier Curve' : {
        'src': 'bezier.html',
        'tags': '00001',
        'class': 'developing'
    }
    
/*    '3D display' : {
        'src': '3d_display.html',
        'tags': '00101',
        'class': "developing"
        
    }*/
};

document.write(`<header><ul><li id='home'><a href='index.html'>Home</a></li>`);

for (cHead in headers) {
    if (i !== 0) {
        document.write(`</ul>`);
    }
    cVis = -1;
    document.write(`</li><li><span>${cHead}</span><ul>`);
    for (cPage in pages) {
        cVis++;
        if (pages[cPage].tags[i] == 1) {
            if (pages[cPage].class == null) {
                document.write(`<li><a href='${pages[cPage].src}'>${cPage}</a></li>`);
            } else {
                document.write(`<li><a href='${pages[cPage].src}' class='${pages[cPage].class}'>${cPage}</a></li>`);
            }
        }
    }
    i++;
}
document.write(`</ul></li></ul></header>`);

document.addEventListener('keydown', function (key) { // no arrow key web move
  if([37,38,39,40].indexOf(key.keyCode) > -1){
    key.preventDefault();
  }
}, false);