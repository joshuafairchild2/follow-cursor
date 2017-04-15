const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//------------------------------------------------------------
//-------make a circle----------------------------------------
//------------------------------------------------------------
ctx.beginPath();
ctx.arc(250,250,20,0,2*Math.PI, true);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();

//------------------------------------------------------------
//-------get cursor coords------------------------------------
//------------------------------------------------------------
function getMousePos(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  let mouseX = e.clientX - rect.left - root.scrollLeft;
  let mouseY = e.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

//------------------------------------------------------------
//-------follow the cursor------------------------------------
//------------------------------------------------------------
let ballX = 250;
let ballY = 250;
let mousePos;
let mouseX;
let mouseY;

canvas.addEventListener('mousemove', function(e) {
  mousePos = getMousePos(canvas, e);
  mouseX = mousePos.x;
  mouseY = mousePos.y;

  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,500,500);

  ctx.beginPath();
  ctx.arc(ballX,ballY,20,0,2*Math.PI, true);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  if (mouseX >= ballX) {
    ballX += 10;
  }
  if (mouseY >= ballY) {
    ballY += 10;
  }
  if (mouseX <= ballX) {
    ballX -= 10;
  }
  if (mouseY <= ballY) {
    ballY -= 10;
  }
});
