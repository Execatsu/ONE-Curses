var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
let targetSize = 10;
let timeInterval = 1500;

function drawCircle(x, y, radius, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radius, 0, 2 * Math.PI);
    pincel.fill();
}

function drawTarget(x, y) {
    drawCircle(x, y, targetSize + 20, 'red');
    drawCircle(x, y, targetSize + 10, 'white');
    drawCircle(x, y, targetSize, 'red');
}

function intRandom(max) {
    return Math.floor(Math.random() * max);
}

let xTarget, yTarget;
setInterval(() => {
    tela.width = tela.width //Equivalente a pincel.clearRect(0, 0, tela.width, tela.height);
    xTarget = intRandom(tela.width);
    yTarget = intRandom(tela.height);
    drawTarget(xTarget, yTarget)
}, timeInterval)

tela.onclick = event => {
    let x = event.pageX - tela.offsetLeft;
    let y = event.pageY - tela.offsetTop;

    if ((x > xTarget - targetSize)
    && (x < xTarget + targetSize)
    && (y > yTarget - targetSize)
    && (y < yTarget + targetSize) ) {
        alert("Congratulations!!")
    }
}