import Player from './player.js';
import InputHandler from './inputHandler.js';
import Tile from './tile.js';
import { buildLevel, level1 } from './levels.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

    }

    start() {
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this.player)
        //idk why this line is necessary
        // this.tile = new Tile(this, { x: 300, y: 300 })

        let tiles = buildLevel(this, level1);

        this.gameObjects = [
            this.player,
            ...tiles
        ]
    }
    update(deltaTime) {
        this.gameObjects.forEach((object) => {
            object.update(deltaTime)
        })
        this.inputHandler.keyHandler();
    }
    draw(ctx) {
        this.gameObjects.forEach((object) => {
            object.draw(ctx)
        })
    }
}