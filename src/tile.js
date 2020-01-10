import { detectCollision } from './collisionDetection.js';


export default class Tile {
    constructor(game, position, tile) {
        this.image = document.getElementById("tile-set");
        this.tileID = tile;
        this.game = game;
        this.position = position;
        this.width = 50;
        this.height = 50;
        this.count = 0;
        this.corners = {
            topLeft: [this.position.x, this.position.y],
            topRight: [this.position.x + this.width, this.position.y],
            botRight: [this.position.x + this.width, this.position.y + this.height],
            botLeft: [this.position.x, this.position.y + this.height]
        }

    }

    interpretTile(tileID) {
        if (tileID === 1) {
            return this.image;
        }
    }

    colliosionInterpreter() {
        // collision handling
        // to understand conditional it is 'playerCorner-sideOfTile'
        if (this.count > 0) {
            if (detectCollision(this.game.player, this) === 'topLeft-Bottom') {
                this.game.player.position.y = this.position.y + this.height;
                this.game.player.updateCorners();
                this.game.player.jumpVel = -1;
            }
            if (detectCollision(this.game.player, this) === 'topRight-Bottom') {
                this.game.player.position.y = this.position.y + this.height;
                this.game.player.updateCorners();
                this.game.player.jumpVel = -1;
            }
            if (detectCollision(this.game.player, this) === 'botRight-Top') {
                this.game.player.jumpVel = -.1;
                this.game.player.position.y = this.position.y - this.game.player.height - .01;
                this.game.player.updateCorners();
                this.game.player.jumpAvailable = 2;
            }
            if (detectCollision(this.game.player, this) === 'botLeft-Top') {
                this.game.player.jumpVel = -.1;
                this.game.player.position.y = this.position.y - this.game.player.height - .01;
                this.game.player.updateCorners();
                this.game.player.jumpAvailable = 2;
            }
            if (detectCollision(this.game.player, this) === 'botRight-Left') {
                this.game.player.position.x = this.position.x - this.game.player.width - .01;
                this.game.player.updateCorners();
            }
            if (detectCollision(this.game.player, this) === 'topRight-Left') {
                this.game.player.position.x = this.position.x - this.game.player.width - .01;
                this.game.player.updateCorners();
            }
            if (detectCollision(this.game.player, this) === 'topLeft-Right') {
                this.game.player.position.x = this.position.x + this.width;
                this.game.player.updateCorners();
            }
            if (detectCollision(this.game.player, this) === 'botLeft-Right') {
                this.game.player.position.x = this.position.x + this.width;
                this.game.player.updateCorners();
            }
        }

    }

    update() {
        this.colliosionInterpreter();

    }


    draw(ctx) {
        if (this.tileID * 16 > 256) {
            while (this.tileID * 16 > 256) {
                this.count += 1;
                this.tileID -= 16;
            }
        }
        else {
            ctx.drawImage(
                this.image,
                (this.tileID * 16),
                (this.count * 16),
                16,
                16,
                this.position.x,
                this.position.y,
                50,
                50
            );
        }


        // ctx.drawImage(
        //     this.image,
        //     16,
        //     16,
        //     16,
        //     16,
        //     this.position.x,
        //     this.position.y,
        //     50,
        //     50
        // );
    }
}