

export default class InputHandler {
    constructor(player) {
        this.player = player;

        this.keyDownEvent = false;
        this.keyUpEvent = false;

        this.keyState = {
            37: false,
            38: false,
            39: false,
            87: false,
            65: false,
            68: false
        };

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.keyDownEvent = true;
            }
            this.keyState[e.keyCode || e.which] = true;
        }, true);

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.keyUpEvent = false;
            }
            this.keyState[e.keyCode || e.which] = false;
        }, true);


    }

    keyHandler() {
        if ((this.keyState[38] || this.keyState[87]) && (this.keyDownEvent && !this.keyUpEvent)) {
            this.keyUpEvent = true;
            this.player.jump();
        }
        if (this.keyState[37] || this.keyState[65]) {
            this.player.moveLeft();
        }
        else if (this.keyState[39] || this.keyState[68]) {
            this.player.moveRight();
        }
        else {
            this.player.speed = 0;
        }
    }
}