
const canvas = document.querySelector('canvas');
const button = document.querySelector('.tlacitko');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');


function nakresliStrom(x,y,delka,uhel,sirka,barva1,barva2)
{
    context.beginPath();
    context.save();
    context.strokeStyle = barva1;
    context.fillStyle = barva2;
    context.lineWidth = sirka;
    context.translate(x,y);
    context.rotate(uhel * Math.PI/180);
    context.moveTo(0,0);
    context.lineTo(0, -delka);
    context.stroke();

    if(delka < 10)
    {
        context.restore();
        return;
    }
    nakresliStrom(0, -delka, delka*0.8, uhel + 17, sirka);
    nakresliStrom(0, -delka, delka*0.8, uhel - 17, sirka);

    context.restore()
}
nakresliStrom(canvas.width/2, canvas.height - 80, 120, 0, 2, 'brown', 'green');
