let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);


let color = document.querySelector('#color')

let radius = 10

tela.onmousemove = event => {
    if(desenha) {
        var x = event.pageX - tela.offsetLeft;
        var y = event.pageY - tela.offsetTop;
        pincel.fillStyle = color.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
}
tela.onmousedown = () => {desenha = true;}
tela.onmouseup = () => {desenha = false;}

// let colorSelected = document.querySelector('#color')
// tela.oncontextmenu = () => {
//     colorIndex++;
//     if(colorIndex >= colors.length) {
//         colorIndex = 0;
//     }
//     // colorSelected.style.background = colors[colorIndex]
//     return false;
// }

// if (event.shiftKey) {
//     radius += 10
// }

// if (event.shiftKey && event.altKey) {
//     return alert('Não aperte mais que uma tecla');
// } else
// if(event.shiftKey && radius + 5 <= 20) {
//     radius += 5;
// } else
// if(event.altKey && radius - 5 >= 10) {
//     radius -= 5;
// }