export function detectCollision(player, gameObject) {
    let bottomOfPlayer = player.positon.y + player.height;
    let topOfPlayer = player.position.y;
    let leftOfPlayer = player.position.x;
    let rightOfPlayer = player.position.x + player.width;

    let bottomOfObject = gameObject.positon.y + gameObject.height;
    let topOfObject = gameObject.position.y;
    let leftOfObject = gameObject.position.x;
    let rightOfObject = gameObject.position.x + gameObject.width;
}