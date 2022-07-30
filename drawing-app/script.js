const canvas = document.getElementById("canvas");
const size = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const inputColor = document.getElementById("color");

const ctx = canvas.getContext("2d");

let color = "black";
let sizePx = 10;
let isPressed = false;
let x,y;


window.onload = () =>{
    canvas.addEventListener("mousedown", (e) => {
        isPressed = true;

        x = e.offsetX;
        y = e.offsetY;
    })
    document.addEventListener("mouseup", () => {
        isPressed = false;

        x = null;
        y = null;
    })
    canvas.addEventListener('mousemove', (e) => {
        if(isPressed) {
            const x2 = e.offsetX
            const y2 = e.offsetY
    
            drawCircle(x2, y2)
            drawLine(x, y, x2, y2)
    
            x = x2
            y = y2
        }
    })

    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, sizePx, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = sizePx * 2; 
        ctx.stroke();
    }

    clearBtn.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    increaseBtn.addEventListener("click", () => {
        if (sizePx < 101){
            sizePx += 2;
        }
        size.innerHTML =  sizePx;
    })
    decreaseBtn.addEventListener("click", () => {
        if (sizePx > 0){
            sizePx -= 2;
        }
        size.innerHTML =  sizePx;
    })

    inputColor.addEventListener("change", () => {
        color = inputColor.value;
    })

}