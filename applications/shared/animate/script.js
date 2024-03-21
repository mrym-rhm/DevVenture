let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// default width, height is 300, 150
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = '../assets/images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
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
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
];
// crete loc object for each state to identify frame position
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    };
    for(let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;
})

function animate() {
    // clear old paint from canvas between every animation frame

    // specify what area of canvas we want to clear (here it's all of it)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // to make sure position will always have a value in range of [0, #frames]
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y

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
        frameY,
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

    // built in method to run a function we pass to it
    requestAnimationFrame(animate);
}

animate();