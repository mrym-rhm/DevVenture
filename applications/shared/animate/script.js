const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// default width, height is 300, 150
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '../assets/images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
// used to slow down animation
let gameFrame = 0;
const staggerFrames = 5;
// main container to hold all data for all of animations
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
];
animationStates.forEach((state, index) => {

})

function animate() {
    // clear old paint from canvas between every animation frame

    // specify what area of canvas we want to clear (here it's all of it)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // to make sure position will always a value in rage of [0, 6]
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;

    /*
    drawImage gets 3, 5 or 9 arguments dependent on how much control you want to have over the image
    drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    s used to cut out an area of image, also scale and stretch
    d position and stretch the cutout area
    dx:0, dy:0 => start from top left corner of canvas, keep image original width and height
    dw, dh => stretch image to match canvas area, used the image width and height to draw frame at its original size
    */
    ctx.drawImage(
        playerImage,
        frameX,
        frameY * spriteWidth,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight);
    if(gameFrame % staggerFrames === 0) {
        if (frameX < 6) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    gameFrame++;

    // built in method to run a function we pass to it
    requestAnimationFrame(animate);
}

animate();