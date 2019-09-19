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

for (var i = 0; i < 20000; i++) {
    var x = Math.floor(Math.random()*window.innerWidth);
    var y = Math.floor(Math.random()*window.innerHeight);
    let color = ("#" + Math.floor(Math.random()*999999));
    c.beginPath();
    c.arc(x,y,800, 0, Math.PI*2, false);
    c.strokeStyle = color;
    c.stroke();
}