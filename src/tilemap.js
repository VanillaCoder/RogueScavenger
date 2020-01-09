//useless garbage atm
export function tileMap() {
    this.image = document.getElementById("pixel-tile");
    var map = {
        cols: 15,
        rows: 7,
        tsize: 32,
        tiles: [
          1, 3, 3, 3, 1, 1, 3, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 2, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 2, 1, 1, 1, 1,
          1, 1, 1, 1, 2, 1, 1, 1,
          1, 1, 1, 1, 2, 1, 1, 1,
          1, 1, 1, 0, 0, 1, 1, 1
        ],
        getTile: function(col, row) {
          return this.tiles[row * map.cols + col]
        }
      };
}