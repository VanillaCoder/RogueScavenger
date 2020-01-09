import Tile from './tile.js';

export function buildLevel(game, level) {
    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (tile !== 0) {
                let position = {
                    x: 50 * tileIndex,
                    y: 50 * rowIndex,
                };
                tiles.push(new Tile(game, position, tile))
            }
            if (tile === 2) {
                let position = {
                    x: 50 * tileIndex,
                    y: 50 * rowIndex,
                };
                tiles.push(new Tile(game, position, tile))
            }
        })
    })
    return tiles;
}

export const level1 = [
    [7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [23, 24, 25, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [39, 40, 41, 42, 0, 0, 0, 7, 8, 9, 10, 0, 12, 13, 21, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 23, 24, 25, 26, 0, 0, 0, 37, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 0, 0, 0, 0, 0, 0, 0, 0, 33],
    [0, 0, 0, 0, 0, 0, 0, 55, 56, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [12, 13, 88, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 104, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 85, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0,101, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

export function tileMap() {
    let tiles = [];

    level.forEach((row, rowIndex) => {
        row.forEach((tile, tileIndex) => {
            if (tile === 1) {
                let position = {
                    x: 50 * tileIndex,
                    y: 50 * rowIndex,
                };
                tiles.push(new Tile(game, position, tile))
            }
            if (tile === 2) {
                let position = {
                    x: 50 * tileIndex,
                    y: 50 * rowIndex,
                };
                tiles.push(new Tile(game, position, tile))
            }
        })
    })
    return tiles;
}