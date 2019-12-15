const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clock() {
    const date = new Date();
    let hour = date.getHours();
    console.log(hour);
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLine((hour*30)+(minute/60)*30,60,3);
    drawLine(minute*6+(seconds/60)*6,90,2);
    drawLine(seconds*6,100,1);
    drawClock();
}
function drawClock() {
    ctx.font = 'bold 20px serif';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.fillStyle= 'black';
    ctx.arc(200,200,5,0,Math.PI*2,false);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200,200,150,0,Math.PI*2,false);
    ctx.stroke();
    ctx.translate(200,200);
    for(let i = 0; i < 12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI*2 /12);
        ctx.moveTo(0, 150);
        ctx.lineTo(0,150*0.95);
        ctx.stroke();
    }
    for(let i = 1; i < 13;i++){
        ctx.save();
        let ang = i * Math.PI*2 / 12;
        ctx.rotate(ang);
        ctx.translate(0, -150 * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(i, -5, 2);
        ctx.restore();
    }
    ctx.translate(-200,-200);
}
function drawLine(angle,length,width) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.translate(200,200);
    ctx.rotate(angle * Math.PI/180+180*Math.PI/180);
    // ctx.rotate(180*Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

window.setInterval('clock()', 500);