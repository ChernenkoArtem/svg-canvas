svg = document.getElementById("svg");

function clock() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
    drawStatic();
    drawLine((hour*30)+(minute/60)*30,140,3,'black');
    drawLine(minute*6+(seconds/60)*6,120,2,'blue');
    drawLine(seconds*6,100,1,'red');
}
function drawLine(angle,height,width,color) {
    let element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    element.setAttribute('x1', '250');
    element.setAttribute('y1', '250');
    element.setAttribute('x2', '250');
    element.setAttribute('y2', height);
    element.setAttribute('transform', 'rotate(' + angle + ' 250 250)');
    element.setAttribute('style', 'stroke:'+color+'; stroke-width:'+ width+';');
    document.querySelector('svg').appendChild(element);
}

function drawStatic() {
    const clock_frame = document. createElementNS("http://www.w3.org/2000/svg", "circle");
    clock_frame.setAttribute("cx", "250");
    clock_frame.setAttribute("cy", "250");
    clock_frame.setAttribute("r", "150");
    clock_frame.setAttribute("style", "fill:none;stroke:black; stroke-width:2px");
    document.querySelector('svg').appendChild(clock_frame);
    for(let i = 1; i <= 12; i++) {
        let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        el.setAttribute('x1', '250');
        el.setAttribute('y1', '100');
        el.setAttribute('x2', '250');
        el.setAttribute('y2', '110');
        el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 250 250)');
        el.setAttribute('style', 'stroke: black; stroke-width:3px;');
        document.querySelector('svg').appendChild(el);
    }
    for(let j = 1; j <= 12; j++) {
        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '240');
        text.setAttribute('y', '90');
        text.setAttributeNS(null,'font-size','20');
        text.setAttribute('transform', 'rotate(' + (j*360/12) + ' 250 250)');
        text.setAttribute('style', 'stroke: black; stroke-width:3px;');
        // text.setAttribute('transform','translate(0, 150)');
        // text.setAttribute('transform', 'rotate(' + (j*360/12) + ' 0 0)');
        text.innerHTML = ''+j+'';
        document.querySelector('svg').appendChild(text);
    }

}

setInterval('clock()', 500);
