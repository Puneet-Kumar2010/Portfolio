const Canvas = document.getElementById('canvas');
const Context = Canvas.getContext('2d');


Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
window.addEventListener('resize', function () {
    Canvas.width = window.innerWidth;

    Canvas.height = window.innerHeight;
    init();
})
// Create a Rectangle object 
// Context.fillRect(x, y, width, height);
// Context.fillStyle = '#fafa55'
// Context.fillRect(100, 100, 100, 100); //rectangle

/* These lines of code are drawing a line on the canvas using the 2D drawing context. */
// Context.beginPath();
// Context.moveTo(50, 300);
// Context.lineTo(70, 150);
// Context.lineTo(100, 200);
// Context.lineTo(80, 300);
// Context.strokeStyle = 'honeygreen'
// Context.stroke();
let color = [
    "#731702",
    "#F27405",
    "#03A678",
    "#02735E",
    "#014040"
]
let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function (e) {
    console.log(e);
    mouse.x = e.x;
    mouse.y = e.y;

})

let x = Math.random() * innerWidth;
let dx = (Math.random() - 0.5) * 15;
let radius = Math.random() * 15
let dy = (Math.random() - 0.5) * 15;
let y = Math.random() * innerHeight;
let colors = color[Math.floor(Math.random() * color.length)]
let minRadius = Math.random() * 5 + 1;

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.minRadius = minRadius;
    this.colors = color[Math.floor(Math.random() * color.length)]

    let maxRadius = 30;


    this.draw = function () {

        let rcolor = color[Math.floor(Math.random() * color.length)];
        let rcolor2 = color[Math.floor(Math.random() * color.length)];
        // document.body.style.background = rcolor

        Context.beginPath();
        Context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        Context.strokeStyle = rcolor;
        Context.fillStyle = this.colors;
        Context.stroke();
        Context.fill()
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 &&
            mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;

            }
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        this.draw();
    };
}


let CircleArray = []


function init(){
    CircleArray = []
    for (let index = 0; index < 1000; index++) {
        let radius = 30
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
    
        CircleArray.push(new Circle(x, y, dx, dy, radius, minRadius, colors));
        console.log(CircleArray);
    }
}

function animate() {
    requestAnimationFrame(animate);

    Context.clearRect(0, 0, innerWidth, innerHeight)

    for (let index = 0; index < CircleArray.length; index++) {
        CircleArray[index].update();
    }
}
init()

animate()

console.log(window.innerWidth);