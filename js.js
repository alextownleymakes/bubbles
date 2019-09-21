var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
var touch = {
    x: undefined,
    y: undefined
}

var circleCount;
// var colorArray = ['#fa34a3', '#629CAE', '#333333'];
var colorArray = ['#aa2463'];
var strokeColor = ('#ddffdd');

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
});

window.addEventListener('touchmove', 
    function(event) {
        touch.x = event.x;
        touch.y = event.y;
        // console.log(touch);
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});



function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0, Math.PI*2, false);
        c.strokeStyle = strokeColor;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity 

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            this.radius =50;
        } else if (this.radius > radius) {
            this.radius -= 1;
        }

        // mobile


        // if (touch.x - this.x < 50 && touch.x - this.x > -50 && touch.y - this.y < 50 && touch.y - this.y > -50) {
        //     this.radius =50;
        // } else if (this.radius > radius) {
        //     this.radius -= 1;
        // }
        
        this.draw();
    }
}



console.log(circleArray);


var circleArray = [];
function init() {
    circleCount =  10 * (window.innerWidth/10);
    circleArray = [];
    for (var i = 0; i < circleCount; i++) {
        var radius = Math.floor(Math.random()* 10 + 1);
        var speedCap = 3;
        var x = Math.random() * (window.innerWidth - (radius * 2)) + radius;
        var dx = (Math.random() - .5 ) * speedCap;
        var y = Math.random() * (window.innerHeight - (radius * 2)) + radius;
        var dy = (Math.random() - .5 ) * speedCap;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for (var i = 0; i < circleArray.length; i++)  {
        circleArray[i].update();
    }
    
}

init();
animate();  