import Player from './player.js';
import InputHandler from './inputHandler.js'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

    }

    start() {
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this.player)
    }
    update(deltaTime) {
        this.player.update(deltaTime);
        this.inputHandler.keyHandler();
    }
    draw(ctx) {
        this.player.draw(ctx)
    }
}