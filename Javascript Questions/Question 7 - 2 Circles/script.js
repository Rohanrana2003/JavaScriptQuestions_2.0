const circleCoor = [];

function circleIntersect(x0, y0, r0, x1, y1, r1){
    return Math.hypot(x0-x1, y0-y1) <= r0+r1;
}

function logIfCirclesInntersect() {
    const first = circleCoor[0];
    const second = circleCoor[1];


    const x0 = first.x;
    const y0 = first.y;
    const r0 = first.radius;

    const x1 = second.x;
    const y1 = second.y;
    const r1 = second.radius;

    return circleIntersect(x0, y0, r0, x1, y1, r1);

}

document.addEventListener('click', (e) => {

    const totalCircles = document.querySelectorAll('.class')
    if (totalCircles.length === 2) {
        totalCircles.forEach(element => {
            document.body.removeChild(element);
            circleCoor.shift();
        });
    }

    const x = e.clientX;
    const y = e.clientY;

    const radius = Math.floor(Math.random() * 100)
    circleCoor.push({ x, y, radius });


    const circle = document.createElement('div');
    circle.classList.add('class');
    circle.style.top = (y - (radius)) + "px";
    circle.style.left = (x - (radius)) + "px";
    circle.style.width = radius*2 + "px";
    circle.style.height = radius*2 + "px";

    document.body.appendChild(circle);

    if (circleCoor.length === 2) {
        const res = logIfCirclesInntersect();
        console.log('Intersecting result = ', res);
    }


})