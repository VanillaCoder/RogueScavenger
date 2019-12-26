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
        // console.log(this.corners.topLeft[1])
        // collision handling
        if(detectCollision(this.game.player, this) === 'topLeft-Bottom') {
            this.game.player.position.y = this.position.y + this.height;
            this.game.player.updateCorners();
            this.game.player.jumpVel = -1;
        }
        if(detectCollision(this.game.player, this) === 'topRight-Bottom') {
            this.game.player.position.y = this.position.y + this.height;
            this.game.player.updateCorners();
            this.game.player.jumpVel = -1;
        }
        if(detectCollision(this.game.player, this) === 'botRight-Top') {
            this.game.player.jumpVel = -.1;
            this.game.player.position.y = this.position.y - this.game.player.height - .01;
            this.game.player.updateCorners();
            this.game.player.jumpAvailable = 2;
        }
        if(detectCollision(this.game.player, this) === 'botLeft-Top') {
            this.game.player.jumpVel = -.1;
            this.game.player.position.y = this.position.y - this.game.player.height - .01;
            this.game.player.updateCorners();
            this.game.player.jumpAvailable = 2;
        }
        if(detectCollision(this.game.player, this) === 'botRight-Left') {
            this.game.player.position.x = this.position.x - this.game.player.width -.1;
            this.game.player.updateCorners();
        }
        if(detectCollision(this.game.player, this) === 'topRight-Left') {
            this.game.player.position.x = this.position.x - this.game.player.width -.1;
            this.game.player.updateCorners();
        }
        if(detectCollision(this.game.player, this) === 'topLeft-Right') {
            this.game.player.position.x = this.position.x + this.width;
            this.game.player.updateCorners();
        }
        if(detectCollision(this.game.player, this) === 'botLeft-Right') {
            this.game.player.position.x = this.position.x + this.width;
            this.game.player.updateCorners();
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