import Player from './player.js';
import InputHandler from './inputHandler.js';
import Tile from './tile.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

    }

    start() {
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this.player)
        this.tile = new Tile(this, { x: 200, y: 550 });
        // this.gameObjects = [tile]

        // this.gameObjects = [
        //     this.player,
        //     this.tile
        // ]
    }
    update(deltaTime) {

        this.player.update(deltaTime);
        this.inputHandler.keyHandler();
    }
    draw(ctx) {
        this.tile.draw(ctx)
        this.player.draw(ctx)
    }
}