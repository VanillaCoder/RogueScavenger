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
    [76, 101, 102, 79, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,83, 0, 0],
    [92, 117, 118, 95, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 51, 0, 0],
    [123, 123, 123, 123, 123, 0, 0, 7, 8, 9, 10, 0, 12, 13, 21, 0, 0, 115, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 23, 24, 25, 26, 0, 28, 29, 37, 0, 0, 0, 0, 0],
    [0, 0, 123, 0, 0, 0, 0, 39, 40, 41, 42, 0, 0, 0, 0, 0, 0, 0, 0, 76],
    [123, 0, 123, 0, 0, 0, 0, 55, 56, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0, 76],
    [0, 0, 104, 105, 0, 0, 0, 71, 72, 73, 74, 0, 0, 0, 0, 0, 0, 0, 0, 92],
    [0, 0, 120, 121, 0, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [49, 0, 0, 0, 0, 0, 0, 0, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 49, 49, 0, 0, 0, 10, 9, 7, 8, 9, 10, 7, 8, 9, 10, 7, 8, 9, 10],
    [81, 81, 49, 49, 49, 49, 23, 26, 23, 24, 25, 26, 23, 24, 25, 26, 23, 24, 25, 26],
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