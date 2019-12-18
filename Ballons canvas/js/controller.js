const ball = new createBall(x,y, dx, dy);
circles.push(ball);

function drawStatic() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = '#AFEEEE';
    ctx.fillRect(0, 0, 700, 800);
    const colors =['green','black','yellow','red','blue'];
    let rand = Math.floor(Math.random() * (4 + 1));
    ctx.fillStyle = colors[rand];
    for(let i = 0; i < circles.length; i++) {
        ctx.arc(circles[i].x, circles[i].y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath()
    }
}


function canvasClick(e) {
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;
    console.log(clickX+"  "+clickY);
    for(let i = circles.length-1; i >= 0; i--) {
        let circle = circles[i];
        let distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));
        console.log(distanceFromCenter);
        if (distanceFromCenter <= 20) {
            let ball = new createBall(circles[i].x + 40, circles[i].y + 40, 2, 2);
            let ball2 = new createBall(circles[i].x + 40, circles[i].y - 40, -2,-2);
            let ball3 = new createBall(circles[i].x + 40, circles[i].y + 40, 2,-2);
                circles.push(ball);
                circles.push(ball2);
                circles.push(ball3);
                console.log(circles);
        }
    }
}
