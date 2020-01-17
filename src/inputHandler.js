import animator from './animation.js'

export default class InputHandler {
    constructor(player, animator, game) {
        this.player = player;
        this.game = game;
        this.animator = animator;
        this.keyDownEvent = false;
        this.keyUpEvent = false;
        this.animationChange = false;
        this.animationChangeChk = false;
        this.pause = false;
        this.pauseChk = false;

        this.keyState = {
            37: false,
            38: false,
            39: false,
            87: false,
            65: false,
            68: false
        };
//13 === enter btw
        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.keyDownEvent = true;
            }
            if (e.keyCode === 80) {
                this.pause = true;
            }
            if (e.keyCode === 39 || e.keyCode === 68 || e.keyCode === 37 || e.keyCode === 65) {
                this.animationChange = true;
            }
            this.keyState[e.keyCode || e.which] = true;
        }, true);

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.keyUpEvent = false;
            }
            if (e.keyCode === 80) {
                this.pauseChk = false;
            }
            if (e.keyCode === 39 || e.keyCode === 68 || e.keyCode === 37 || e.keyCode === 65) {
                this.animationChangeChk = false;
                this.animator.changeDirection(0)
            }
            this.keyState[e.keyCode || e.which] = false;
        }, true);


    }

    keyHandler() {
        if (this.keyState[13]) {
            this.game.menuStart();
        }
        if (this.keyState[80] && (this.pause && !this.pauseChk)) {
            this.pauseChk = true;
            this.game.pauseGame();
        }
        if ((this.keyState[38] || this.keyState[87]) && (this.keyDownEvent && !this.keyUpEvent) && this.game.gameState == 0) {
            this.keyUpEvent = true;
            this.player.jump();
        }
        if (this.keyState[37] || this.keyState[65]) {
            this.player.moveLeft();
            if(this.animationChange && !this.animationChangeChk){
                this.animationChangeChk = true;
                this.animator.changeDirection(2);
            }
        }
        else if (this.keyState[39] || this.keyState[68]) {
            this.player.moveRight();
            if(this.animationChange && !this.animationChangeChk){
                this.animationChangeChk = true;
                this.animator.changeDirection(1);
            }
        }

        else {
            this.player.speed = 0;
        }
    }
}