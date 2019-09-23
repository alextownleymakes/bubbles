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

var popSound = new Audio('pop.wav');

var circleCount;
var colorArray = ['#fa34a3', '#629CAE', '#333333'];
var colorArray = ["#262626"];
var strokeColor = ('#dde5dd');
var dyG = 1;
var currentColor = "#262626";

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log(mouse);
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

function changeColor() {
    $('.color-change').on('click', function() {
        // if (colorArray.includes(this.id) == false) {
        //     colorArray.push(this.id);
        //     popSound.play();
        //     $(this).addClass('click-shadow');
        // } else {
        //     let cap = colorArray.indexOf(this.id);
        //     colorArray.splice(cap);
        //     popSound.play();
        //     $(this).removeClass('click-shadow');
        // }
        if (this.id == "ACID") {
            currentColor = ("colorArray[Math.floor(Math.random()*colorArray.length)]");
            $('.color-change').removeClass('click-shadow');
            $(this).addClass('click-shadow');
        } else {
            if (currentColor == this.id) {
                currentColor = "#262626";
                $('.color-change').removeClass('click-shadow');
                popSound.play();
            } else {
                currentColor =  (this.id); 
                console.log(this.id);
                popSound.play();
                    $('.color-change').removeClass('click-shadow');
                    $(this).addClass('click-shadow');
            }
        }

    });
}

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
        c.fillStyle = currentColor;
        c.fill();
    }

    this.update = function () {

        // var colorArray = ['#33a678'];
        var strokeColor = ('#ddffdd');
        if (this.y == (innerHeight)) {
            this.dy = 0;
            this.y = window.innerHeight-radius;
        }
       
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }    

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
            // this.dy += .8;
        }
        
        
        this.x += this.dx;
        this.y += this.dy;

        // interactivity 

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            this.radius =50;
            // console.log(currentColor);
            this.fillStyle = currentColor;
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
        this.fillStyle =  "\"\#" + currentColor + "\"";
    }
    
}

init();
animate();  

function gravity() {

}

$(document).ready(changeColor());