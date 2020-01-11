
export default class Animator {
    constructor(player) {
        this.player = player;
        this.direction = 0;
        this.image = player.image
        this.count = 0;
        this.spriteCount = 0;
        this.delay = 25;
        this.frame = 0;
        this.frame_index = 0;
        this.frame_set = 
            [
                [0,1,2,3],
                [9, 10, 11, 12, 13, 14]
            ]
        

    }

    update() {
        // if(this.player.speed > 0) {
        //     this.direction = 1;
        // }
        // if(this.player.speed < 0) {
        //     this.direction = 1;
        // }
        // if(this.player.speed === 0) {
        //     this.direction = 0;
        // }     
        this.count ++;
        if (this.count >= this.delay) {
            this.count = 0;
            this.frame_index = (this.frame_index == this.frame_set[this.direction].length - 1) ? 0 : this.frame_index + 1;
            this.frame = this.frame_set[this.direction][this.frame_index]
        }
    }

    draw(ctx) {   
        
        let currentFrame = this.frame_set[this.direction][this.frame_index] + 1;
        if (currentFrame * 48.125 > 385) {
            while (currentFrame * 48.125 > 385) {
                this.spriteCount += 1;
                currentFrame -= 8;
            }
        }
        // console.log(this.spriteCount, currentFrame)
        ctx.drawImage(
            this.image,
            ((currentFrame - 1) * 50),
            (this.spriteCount * 37),
            48,
            37,
            this.player.position.x - 20,
            this.player.position.y - 10,
            72,
            55.5
        );
        this.spriteCount = 0;
    }

}