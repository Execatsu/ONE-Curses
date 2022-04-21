let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

let x = 20;
let y = 20;

let tax = 3;

function drawCircle(x, y, raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

document.onkeydown = event => {
    if (event.code === "ArrowUp" || event.code === "KeyW") {y-=tax} else
    if (event.code === "ArrowDown" || event.code === "KeyS") {y+=tax} else
    if (event.code === "ArrowLeft" || event.code === "KeyA") {x-=tax} else
    if (event.code === "ArrowRight" || event.code === "KeyD") {x+=tax}
}

setInterval(() => {
    tela.width = tela.width;
    drawCircle(x, y, 10);
}, 20);