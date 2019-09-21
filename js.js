var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255,0,0,0.2)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(255,100,0,0.2)';
// c.fillRect(300,100,100,100);
// c.fillStyle = 'rgba(255,0,170,0.2)';
// c.fillRect(500,100,100,100);
// c.fillStyle = 'rgba(25,150,180,0.2)';
// c.fillRect(100,600,100,100);

console.log(canvas);

// Line

// c.beginPath();
// c.moveTo(200,600);
// c.lineTo(600,400);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// arc
// c.beginPath();
// c.arc(300,300,30, 0, Math.PI*2, false);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// for (var i = 0; i < 200; i++) {
//     var x = Math.floor(Math.random()*window.innerWidth);
//     var y = Math.floor(Math.random()*window.innerHeight);
    let color = ("#" + Math.floor(Math.random()*999999));
//     c.beginPath();
//     c.arc(x,y,800, 0, Math.PI*2, false);
//     c.strokeStyle = color;
//     c.stroke();
// }

    // c.beginPath();
    // c.arc(x,y,800, 0, Math.PI*2, false);
    // c.strokeStyle = color;
    // c.stroke();


    var x = Math.floor(Math.random()*window.innerWidth);
    var dx = Math.floor((Math.random() - .5 )*18);
    var y = Math.floor(Math.random()*window.innerHeight);
    var dy = Math.floor((Math.random() - .5 )*15);
    var radius = 30;
    
function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius, 0, Math.PI*2, false);
        c.strokeStyle = "#fa34a3";
        c.stroke();
        c.fill();
        c.fillStyle = "#aa2463";
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var colorArray=["#0067B1", "#FFD700", "#629CAE", "#60696b", "#ffffff", "#333333"];

var circleArray = [];
for (var i = 0; i < 500; i++) {
    var radius = Math.floor(Math.random()* 10);
    var speedCap = 3;
    var x = Math.random() * (window.innerWidth - (radius * 2)) + radius;
    var dx = (Math.random() - .5 ) * speedCap;
    var y = Math.random() * (window.innerHeight - (radius * 2)) + radius;
    var dy = (Math.random() - .5 ) * speedCap;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for (var i = 0; i < circleArray.length; i++)  {
        circleArray[i].update();
    }
    
}

animate();  