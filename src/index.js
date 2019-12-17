import Player from './player.js';
import InputHandler from './input.js'

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let player = new Player(GAME_WIDTH, GAME_HEIGHT)

// player.draw(ctx);

let lastTime = 0;
new InputHandler();
function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
    player.update(deltaTime);
    player.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();