import Player from './player.js';
let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let player = new Player(GAME_WIDTH, GAME_HEIGHT)

//sets an initial lastTime
let lastTime = 0;
//**********************************************
//section adds event listeners for keypresses, function is then called in gameLoop()
var keyState = {
    37: false,
    38: false,
    39: false,
    87: false,
    65: false,
    68: false
};

let keyDownEvent = false;
let keyUpEvent = false;


window.addEventListener('keydown', function (e) {
    if(e.keyCode === (87 || 38)){
        keyDownEvent = true;
    }
    keyState[e.keyCode || e.which] = true;
}, true);

window.addEventListener('keyup', function (e) {
    if(e.keyCode === (87 || 38)) {
        keyUpEvent = false;
    }
    keyState[e.keyCode || e.which] = false;
}, true);



function inputHandler() {
    if (keyState[38] || keyState[87] && keyDownEvent && !keyUpEvent) {
        keyUpEvent = true;
        player.jump();
    }
    if (keyState[37] || keyState[65]) {
        player.moveLeft();
    }
    else if (keyState[39] || keyState[68]) {
        player.moveRight();
    }
    else {
        player.speed = 0;
    }
}
//weird proxy shit trying to get double juump to work prob outdated now
// var targetProxy = new Proxy(keyState, {
//   set: function (target, key, value) {
//       if(key === "87" && value === true){
//           player.jump();
//       }
//       target[key] = value;
//       return true;
//   }
// });
// ************************************************


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
    player.update(deltaTime);
    player.draw(ctx);
    inputHandler();
    requestAnimationFrame(gameLoop);
}

gameLoop();