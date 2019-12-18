document.addEventListener('DOMContentLoaded', init);
function init() {
    setInterval( () => {
        for(let i = 0; i < circles.length; i++){
            move(circles[i]);
            canvas.onclick = canvasClick;
        }
    },15)

}


