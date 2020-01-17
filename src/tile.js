import { detectCollision } from './collisionDetection.js';


export default class Tile {
    constructor(game, position, tile) {
        this.image = document.getElementById("tile-set");
        this.coinImage = document.getElementById("coins");
        this.tileID = tile;
        this.coinID = -1;
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

        //fuckery
        this.delay = 20;
        this.coinSprite = 0;
        this.coinCount = 0;
        this.coin = 0;
        this.coinFrame = 0;
        this.coinFrame_index = 0;
        this.coinFrame_set = [
            [15, 16, 17, 18]
        ]

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
        if (this.coinID > 0) {
            if (detectCollision(this.game.player, this) === 'topLeft-Bottom') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'topRight-Bottom') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'botRight-Top') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'botLeft-Top') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'botRight-Left') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'topRight-Left') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'topLeft-Right') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }
            if (detectCollision(this.game.player, this) === 'botLeft-Right') {
                // this.game.player.updateCorners();
                this.coinID = -1;
                this.tileID = 0;
                console.log("Point")
            }

        }

    }

    update() {
        this.colliosionInterpreter();
        this.coinUpdate();

    }
    coinUpdate() {
        this.coinCount++;
        if (this.coinCount >= this.delay) {
            this.coinCount = 0;
            this.coinFrame_index = (this.coinFrame_index == this.coinFrame_set[this.coin].length - 1) ? 0 : this.coinFrame_index + 1;
            this.coinFrame = this.coinFrame_set[this.coin][this.coinFrame_index]

        }
    }
    drawCoin(ctx) {

        var currentFrame = this.coinFrame_set[this.coin][this.coinFrame_index];

        if (currentFrame * 64 > 1472) {
            console.log(currentFrame)
            while (currentFrame * 64 > 1472) {
                this.coinSprite += 1;
                currentFrame -= 23;
            }
        }
        else {
            ctx.drawImage(
                this.coinImage,
                (currentFrame * 64),
                (this.coinSprite * 64),
                64,
                64,
                this.position.x,
                this.position.y,
                50,
                50
            );
        }


    }


    draw(ctx) {
        if (this.tileID < 0) {
            this.coinID = (this.tileID * -1)
            this.drawCoin(ctx);
        }
        if (this.tileID > 0) {
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

        }


    }
}