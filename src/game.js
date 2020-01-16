import Player from './player.js';
import InputHandler from './inputHandler.js';
import Tile from './tile.js';
import { buildLevel, level1 } from './levels.js';
import Animation from './animation.js'


const GAMESTATE = {
    RUNNING: 0,
    PAUSED: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.audio = document.getElementById("test-audio")
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.currentLevel = level1
        this.player = new Player(this);
        this.animation = new Animation(this.player)
        this.inputHandler = new InputHandler(this.player, this.animation, this)
        this.tiles = buildLevel(this, this.currentLevel);
        this.gameObjects = [
            this.player,
            ...this.tiles,
            this.animation
        ]
        this.gameState = 0;

    }


    start(gameState) {
        //dont want to hear this shit while im testing
        // this.audio.loop = true;
        // this.audio.play();



    }
    pauseGame() {
        if (this.gameState == GAMESTATE.PAUSED) {
            this.gameState = GAMESTATE.RUNNING;
        }
        else {
            this.gameState = GAMESTATE.PAUSED;

        }
    }

    update(deltaTime) {
        this.inputHandler.keyHandler();
        if (this.gameState == GAMESTATE.PAUSED) return;
        if (this.gameState == GAMESTATE.RUNNING) {
            this.gameObjects.forEach((object) => {
                object.update(deltaTime)
            })
        }


    }
    draw(ctx) {
        this.gameObjects.forEach((object) => {
            object.draw(ctx)
        })
    }
}