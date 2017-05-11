const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let ballX = 400;
let ballY = 400;

//------------------------------------------------------------
//-------make a circle----------------------------------------
//------------------------------------------------------------
ctx.beginPath();
ctx.arc(ballX,ballY,20,0,2*Math.PI, true);
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
    (mouseX>ballX) ? ballX+= 10 : ballX -= 10;
  }
  if (mouseY !== ballY) {
    (mouseY>ballY) ? ballY+= 10 : ballY -= 10;
  }

  if (Math.abs(mouseX - ballX) <= 5 && Math.abs(mouseY - ballY) <= 5) {
    alert('loser!');
  }
});
