
const canvas = document.querySelector('canvas');
const button = document.querySelector('.tlacitko');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
let curve = 10;


function drawTree(x, y, len, angle, branchWidth, color1, color2)
{
    context.beginPath();
    context.save();
    context.strokeStyle = color1;
    context.fillStyle = color2;
    context.shadowBlur = 15;
    context.shadowColor = 'black';
    context.lineWidth = branchWidth;
    context.translate(x,y);
    context.rotate(angle * Math.PI/180);
    context.moveTo(0,0);
    //context.lineTo(0, -len);
    if(angle > 0)
    {
        context.bezierCurveTo(curve, -len/2, 10, -len/2, 0, -len);
    }
    else{
        context.bezierCurveTo(curve, -len/2, -10, -len/2, 0, -len);
    }   
     
    context.stroke();

    if(len < 15)
    {
        context.beginPath();
        context.arc(0, -len, 10, 0, Math.PI/2);
        context.fill();
        context.restore();
        return;
    }
    curve = (Math.random() * 10) + 10;
    drawTree(0, -len, len * 0.8, angle + curve, branchWidth * 0.5);
    drawTree(0, -len, len * 0.8, angle - curve, branchWidth * 0.5);

    context.restore()
}
drawTree(canvas.width/2, canvas.height - 80, 120, 0, 30, 'brown', 'pink');
 
function generateRandomTree()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    let centerPointX = canvas.width/2;
    let len = Math.floor((Math.random() * 20) + 100);
    let angle = 0;
    let branchWidth = (Math.random() * 70) + 1;
    let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';

    button.style.background = color1;

    drawTree(centerPointX, canvas.height - 80, len, angle, branchWidth, color1, color2);
}

button.addEventListener('click', generateRandomTree);