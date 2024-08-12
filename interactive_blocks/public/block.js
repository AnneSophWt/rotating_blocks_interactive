class Block {
    constructor(x, y) {
         this.x = x; 
         this.y = y;
        this.angle = 0;
        this.c = 70;
        this.greenValue = 255;
    }
    display() {
       // noFill();
        fill(0, this.greenValue, 0)
        //stroke(0, 0, 255);
        push();
        translate(this.x, this.y);
        rotate(this.angle);

        if (this.angle > 0 && this.angle < 45) {
            stroke(0, 0, 255);
            this.drawRect();
        } else {
            stroke(0, 0, 255);
            this.drawX();
        }
        pop();
    }

    move() {
        // If the mouse is moving, check distance between mouse lox and center of sqaure
        let distance;
        if (pmouseX - mouseX != 0 || pmouseY - mouseY !=0) {
            distance = dist(mouseX, mouseY, 
                this.x, this.y);
                if (distance < distMouse) {
                this.angle += 1;
                this.c = 255;
            }
        }
    
        // if squares are already rotating, keep rotating until angle = 90
            if (this.angle > 0 && this.angle < 90) {
                this.angle += 1; 
                if (this.c > 70) {
                    this.c -= 5;
            }
            if (this.angle < 45) {
            if (this.greenValue < 100) {
                this.greenValue -=5;
            }
            } else {
                if (this.greenValue > 0) {
                    this.greenValue -=5;
                }
            }
        } else {
            this.angle = 0;
            this.c = 70; 
            this.greenValue = 255;
        }
    }

    drawRect() {
        rect(0, 0, size- offset, size - offset);
    }

    drawX() {
        let margin = -size/2;
        line(margin + offset/2, margin + offset/2, margin + size - offset/2, margin + size - offset/2);
        line(margin + size - offset/2, margin + offset/2, margin + offset/2, margin + size - offset/2);
    }
    

}