class Block {
    constructor(x, y) {
         this.x = x; 
         this.y = y;
        this.angle = 0;
    }
    display() {
        translate(this.x, this.y);
        rotate(this.angle);
        rect(0, 0, size, size);
    }

    move() {
        let distance = dist(mouseX, mouseY, 
            this.x, this.y);
            if (distance < distMouse) {
            this.angle += 1;
        }
    }
}