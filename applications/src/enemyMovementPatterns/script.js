const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 100;
let enemiesArray = [];

class Enemy{
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.heghit = 100;
        /*
            Math.random() * 4 : random number between 0 and 4
            Math.random() * 4 - 2 : random number between 0-2 and 4-2
         */
        this.speed = Math.random() * 4 - 2;
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;
    }

    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.heghit);
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}

animate();