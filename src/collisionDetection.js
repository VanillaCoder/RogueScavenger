
export function detectCollision(player, gameObject) {
    let topLeft = player.corners.topLeft



    let spotCheck = {
        check: null
    }

    //checking collisions, returning correct side
    // console.log(topLeft[0])

    if (topLeft[0] > gameObject.corners.botLeft[0] && topLeft[0] < gameObject.corners.botRight[0] &&
        topLeft[1] < gameObject.corners.botLeft[1]
    ) {
        console.log(gameObject.corners.botLeft[1] + " " + topLeft)
        return 'topLeftBottom'
    }

}