import Player from './player.js';
import InputHandler from './inputHandler.js';
import Tile from './tile.js';
import { buildLevel, level1, level2 } from './levels.js';
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
        this.currentLevel = level1;
        this.player = new Player(this);
        this.animation = new Animation(this.player, this.Tile);
        this.inputHandler = new InputHandler(this.player, this.animation, this);
        this.tiles = buildLevel(this, this.currentLevel);
        this.gameObjects = [
            this.player,
            ...this.tiles,
            this.animation
        ]
        this.gameState = 2;
        this.menuHue = 255;
        this.colorChange = 1;
        this.menuColor = 'rgb(' + this.menuHue + ',0,0)';
        this.score = 0;
    }


    start(gameState) {
        //dont want to hear this shit while im testing
        this.audio.loop = true;
        this.audio.play();



    }
    pauseGame() {
        if (this.gameState == GAMESTATE.PAUSED) {
            this.audio.play();
            this.gameState = GAMESTATE.RUNNING;
        }
        else if (this.gameState == GAMESTATE.RUNNING) {
            this.audio.pause();
            this.gameState = GAMESTATE.PAUSED;

        }
    }

    menuStart() {
        this.gameState = GAMESTATE.RUNNING;
        this.audio.loop = true;
        this.audio.play();
    }

    centerText(ctx, text, y) {
        var measurement = ctx.measureText(text);
        var x = (ctx.canvas.width - measurement.width) / 2;
        ctx.fillText(text, x, y);
    }

    levelCheck() {
        if(this.score === -1) {
            this.score = 0;
            this.currentLevel = level1;
            this.tiles = buildLevel(this, this.currentLevel);
            this.gameObjects = [
                this.player,
                ...this.tiles,
                this.animation
            ]
            this.player.position = {
                x: 25,
                y: 510 - this.player.height,
            }
        }
        if (this.score === 4) {
            this.player.position = {
                x: this.gameWidth,
                y: 510 - this.player.height,
            }
            this.currentLevel = level2;
            this.tiles = buildLevel(this, this.currentLevel);
            this.gameObjects = [
                this.player,
                ...this.tiles,
                this.animation
            ]

        }
    }

    update(deltaTime) {
        this.inputHandler.keyHandler();
        if (this.gameState == GAMESTATE.PAUSED) return;
        if (this.gameState == GAMESTATE.MENU) {
            this.menuHue += 2 * this.colorChange;
            this.menuColor = 'rgb(' + this.menuHue + ',0,0)';
            if (this.menuHue > 255) this.colorChange = -1;
            if (this.menuHue < 0) this.colorChange = 1;
            return;
        }
        if (this.gameState == GAMESTATE.RUNNING) {
            this.gameObjects.forEach((object) => {
                object.update(deltaTime)
            })
        }
    }
    draw(ctx) {
        if (this.gameState == GAMESTATE.MENU) {
            ctx.font = "48px monospace";
            ctx.fillStyle = "black"
            this.centerText(ctx, 'Rogue Scavenger', 200);
            ctx.font = "24px monospace";
            this.centerText(ctx, 'Control the scavenger with the WASD or arrow keys', 300);
            ctx.fillStyle = this.menuColor;
            this.centerText(ctx, 'Press \"enter\" to start the game', 350);

            return;
        }
        if (this.gameState == GAMESTATE.PAUSED) {
            ctx.font = "48px monospace";
            ctx.fillStyle = "black"
            this.centerText(ctx, 'Game Paused', 250);
            ctx.font = "32px monospace";
            this.centerText(ctx, 'Press \"p\" to resume', 350);
        }
        else {
            this.gameObjects.forEach((object) => {
                object.draw(ctx)
            })
            ctx.font = "12px monospace";
            ctx.fillStyle = "black"
            this.centerText(ctx, 'Score: ' + this.score, 25);
        }

    }
}