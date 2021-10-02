var can;
var ctx;
var x = 75;
var y = 50;
var WIDTH = 400;
var HEIGHT = 300;
var dragok = false;
function rect(x,y,w,h) {
 ctx.beginPath();
 ctx.rect(x,y,w,h);
 ctx.closePath();
 ctx.fill();
}

function clear() {
 ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
function init() {
 can = document.getElementById("deepCan");
 ctx = can.getContext("2d");
 can.onmousedown = doMouseDown;
 can.onmouseup = doMouseUp;
 return setInterval(draw, 10);
}
function draw() {
 clear();
 drawCircle(x-15,y-15,30,3,"yellow","purple");
}
function doMouseMove(e){
 if (dragok){
  x = e.pageX - can.offsetLeft;
  y = e.pageY - can.offsetTop;
 }
}
function doMouseDown(e){
 if (e.pageX < x + 30 + can.offsetLeft && e.pageX > x - 30 +
 can.offsetLeft && e.pageY < y + 30 + can.offsetTop &&
 e.pageY > y -30 + can.offsetTop){
  x = e.pageX - can.offsetLeft;
  y = e.pageY - can.offsetTop;
  dragok = true;
  can.onmousemove = doMouseMove;
 }
}
function doMouseUp(){
 dragok = false;
 can.onmousemove = null;
}
function drawCircle(xPos, yPos, radius,borderwidth, borderColor, fillColor){
      var startAngle =   0 * (Math.PI/180);
      var endAngle   = 360 * (Math.PI/180);

      var radius = radius;

      ctx.strokeStyle = borderColor;
      ctx.fillStyle   = fillColor;
      ctx.lineWidth   = borderwidth;

      ctx.beginPath();
      ctx.arc(xPos, yPos, radius, startAngle, endAngle, false);
      ctx.fill();
      ctx.stroke(); 
      ctx.closePath();
}