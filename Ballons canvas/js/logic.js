function createBall(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
}
function move(ball) {
    drawStatic(ball);
    if(ball.x + ball.dx > 680 || ball.x + ball.dx < 20) {
        ball.dx = -ball.dx;
    }

    if(ball.y + ball.dy > 780 || ball.y + ball.dy < 20) {
        ball.dy = -ball.dy;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;
}
