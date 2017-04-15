const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//------------------------------------------------------------
//-------make a circle----------------------------------------
//------------------------------------------------------------
ctx.beginPath();
ctx.arc(400,400,20,0,2*Math.PI, true);
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
let ballX = 400;
let ballY = 400;

canvas.addEventListener('mousemove', e => {
  let mousePos = getMousePos(canvas, e);
  let mouseX = mousePos.x;
  let mouseY = mousePos.y;

  ctx.clearRect(0,0,800,800);
  ctx.beginPath();
  ctx.arc(ballX,ballY,20,0,2*Math.PI, true);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  if (mouseX !== ballX) {
    (mouseX>ballX) ? ballX+= 15 : ballX -= 15;
  }
  if (mouseY !== ballY) {
    (mouseY>ballY) ? ballY+= 15 : ballY -= 15;
  }

  if (Math.abs(mouseX - ballX) <= 10 && Math.abs(mouseY - ballY) <= 10) {
    alert('loser!');
  }
});
