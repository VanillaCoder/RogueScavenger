import Game from './game.js'


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");


const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;
let lastTime = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT)
game.start();
//**********************************************
//section adds event listeners for keypresses
// var keyState = {
//     37: false,
//     38: false,
//     39: false,
//     87: false,
//     65: false,
//     68: false
// };

// let keyDownEvent = false;
// let keyUpEvent = false;


// window.addEventListener('keydown', function (e) {
//     if(e.keyCode === (87 || 38)){
//         keyDownEvent = true;
//     }
//     keyState[e.keyCode || e.which] = true;
// }, true);

// window.addEventListener('keyup', function (e) {
//     if(e.keyCode === (87 || 38)) {
//         keyUpEvent = false;
//     }
//     keyState[e.keyCode || e.which] = false;
// }, true);



// function inputHandler() {
//     if (keyState[38] || keyState[87] && keyDownEvent && !keyUpEvent) {
//         keyUpEvent = true;
//         player.jump();
//     }
//     if (keyState[37] || keyState[65]) {
//         player.moveLeft();
//     }
//     else if (keyState[39] || keyState[68]) {
//         player.moveRight();
//     }
//     else {
//         player.speed = 0;
//     }
// }
// end of keypress related code
// ************************************************

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);