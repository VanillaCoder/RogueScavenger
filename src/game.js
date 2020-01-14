import Player from './player.js';
import InputHandler from './inputHandler.js';
import Tile from './tile.js';
import { buildLevel, level1 } from './levels.js';
import Animation from './animation.js'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.audio = document.getElementById("test-audio")
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

    }

    start() {
        //dont want to hear this shit while im testing
        this.audio.loop = true;
        this.audio.play();
        this.player = new Player(this);
        this.animation = new Animation(this.player)
        this.inputHandler = new InputHandler(this.player, this.animation)
        let tiles = buildLevel(this, level1);

        this.gameObjects = [
            this.player,
            ...tiles,
            this.animation
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