class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        
        this.sprite = new Sprite(trainerImg, 4, 10, 64, 64);
    }
    
    draw() {
        this.sprite.draw(this.x, this.y, 64, 64);
    }
    
    move() {
        var xvel = 0;
        var yvel = 0;
        
        if (register[LEFT_ARROW]) {
            xvel = -4;
            yvel = 0;
            this.sprite.animationNumber = 1;
        }
        if (register[RIGHT_ARROW]) {
            xvel = 4;
            yvel = 0;
            this.sprite.animationNumber = 2;
        }
        if (register[DOWN_ARROW]) {
            xvel = 0;
            yvel = 4;
            this.sprite.animationNumber = 0;
        }
        if (register[UP_ARROW]) {
            xvel = 0;
            yvel = -4;
            this.sprite.animationNumber = 3;
        }
        
        if (xvel === 0 && yvel === 0) {
            this.sprite.frameSpeed = 0;
            this.sprite.frame = 0;
        } else {
            this.sprite.frameSpeed = 10;
        }
        
        this.x += xvel;
        this.y += yvel;
    }
    
    update() {
        this.draw();
        this.move();
    }
}