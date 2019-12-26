import { detectCollision } from './collisionDetection.js'

export default class Player {

    constructor(game) {
        this.game = game;
        this.tile = this.game.tile
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.width = 25;
        this.height = 25;
        this.maxSpeed = 3;
        this.speed = 0;
        this.jumpVel = -1;
        this.jumpAvailable = 2;
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight / 2 - this.height - 10,
        }
        this.oldX = this.position.x;
        this.oldY = this.position.y;
        this.corners = {
            topLeft: [this.position.x, this.position.y],
            topRight: [this.position.x + this.width, this.position.y],
            botRight: [this.position.x + this.width, this.position.y + this.height],
            botLeft: [this.position.x, this.position.y + this.height]
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

        this.oldX = this.position.x;
        this.position.x += this.speed;
        this.corners.topLeft[0] = this.position.x
        //handles jump velocity
        if (this.jumpVel != 0 || this.jumpAvailable < 2) {
            this.oldY = this.position.y;
            this.position.y -= this.jumpVel;
            this.corners.topLeft[1] = this.position.y;
            this.jumpVel -= .18;
        }
        //if player hits edges of screen
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > 1000 - this.width) this.position.x = 1000 - this.width;
        if (this.position.y < 0) this.position.y = 0;
        //handles double jump case for bottom screen
        if (this.position.y > 600 - this.height) {
            this.position.y = 600 - this.height;
            this.corners.topLeft[1] = this.position.y;
            this.jumpVel = 0;
            this.jumpAvailable = 2;
        };


    }
}