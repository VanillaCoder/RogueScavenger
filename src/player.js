export default class Player {

    constructor(game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.width = 25;
        this.height = 25;
        this.maxSpeed = 3;
        this.speed = 0;
        this.jumpVel = 0;
        this.jumpAvailable = 2;
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10,

        }

    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx) {
        ctx.fillStyle = "#f00"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    jump() {
        if (this.jumpAvailable === 2) {
            this.jumpAvailable -= 1;
            this.jumpVel += 7;
        }
        else if (this.jumpAvailable === 1) {
            this.jumpAvailable -= 1;
            this.jumpVel /= 3;
            this.jumpVel += 5;
        }
    }


    update(deltaTime) {
        if (!deltaTime) return;
        this.position.x += this.speed;
        if (this.jumpVel > 0 || this.jumpAvailable < 2) {
            this.position.y -= this.jumpVel;
            this.jumpVel -= .18;
        }
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > 1000 - this.width) this.position.x = 1000 - this.width;
        if (this.position.y < 0) this.position.y = 0;
        if (this.position.y > 600 - this.height) {
            this.position.y = 600 - this.height;
            this.jumpVel = 0;
            this.jumpAvailable = 2;
        };


    }
}