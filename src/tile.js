import { detectCollision } from './collisionDetection.js';


export default class Tile {
    constructor(game, position) {
        this.image = document.getElementById("pixel-tile");
        this.game = game;
        this.position = position;
        this.width = 50;
        this.height = 30;
        this.corners = {
            topLeft: [this.position.x, this.position.y],
            topRight: [this.position.x + this.width, this.position.y],
            botRight: [this.position.x + this.width, this.position.y + this.height],
            botLeft: [this.position.x, this.position.y + this.height]
        }

    }
    update() {
        if(detectCollision(this.game.player, this) === 'topLeftBottom' && this.game.player.oldY > (this.position.y + this.height)) {
            this.game.player.position.y = this.position.y + this.height;
            this.game.player.corners.topLeft[1] = this.game.player.position.y;
            this.game.player.jumpVel = -1;
        }
    }



    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}