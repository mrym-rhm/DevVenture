const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '../assets/images/shadow_dog.png';
x = 0;

function animate() {
    // clear old paint from canvas between every animation frame
    // specify what area of canvas we want to clear (here it's all of it)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // create a rectangle
    ctx .fillRect(x, 50, 100, 100);
    x++;
    // built in method to run a function we pass to it
    requestAnimationFrame(animate);
}

animate();