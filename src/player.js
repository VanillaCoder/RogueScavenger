export default class Player {

    constructor(game) {
        this.game = game;
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
        this.position.x += this.speed;
        //handles jump velocity
        if (this.jumpVel > 0 || this.jumpAvailable < 2) {
            this.position.y -= this.jumpVel;
            this.jumpVel -= .18;
        }
        //if player hits edges of screen
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > 1000 - this.width) this.position.x = 1000 - this.width;
        if (this.position.y < 0) this.position.y = 0;
        //handles double jump case for bottom screen
        if (this.position.y > 600 - this.height) {
            this.position.y = 600 - this.height;
            this.jumpVel = 0;
            this.jumpAvailable = 2;
        };

        //check collision with in-game floor
        let bottomOfPlayer = this.position.y + this.height
        let topOfFloor = this.game.tile.position.y
        if((bottomOfPlayer >= topOfFloor) && this) {
            // this.jumpVel = 0;
            // this.jumpAvailable = 2;
            // console.log("ping")
        }


    }
}