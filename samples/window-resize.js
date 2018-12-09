require('../dist');

const canvas = createCanvas("Resize");
const ctx = canvas.getContext("2d");
// canvas.height = 150;

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
};

canvas.addEventListener('resize', draw);
draw(null);

