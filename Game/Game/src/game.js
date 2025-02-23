import {Bird} from "bird"
import{ctx,canvas} from "utils"
import{Gates} from "gates"

export class Game {
    bird = new Bird()
    gates = new Gates()

    start() {
        this.id = requestAnimationFrame(() => this.run())
        this.bindEvents()
    }

    bindEvents() {
        window.onkeydown = (evt) => {
            if (evt.key === " ") {
                this.bird.fly()
            }
        }
    }

    collisonDetection() {
        this.gates.sticks.forEach(gate => {
            const birdCollidesHorizontally = this.bird.x + this.bird.w > gate.x && this.bird.x < gate.x + gate.w
            const birdCollidesVertically = this.bird.y < gate.y + gate.h && this.bird.y + this.bird.h > gate.y

            if (birdCollidesHorizontally && birdCollidesVertically) {
                this.over()
            }
        })
    }

    over() {
        cancelAnimationFrame(this.id)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        
        ctx.font = "100px serif"
        ctx.fillStyle = "darkred"
        ctx.textAlign = "center"
        ctx.fillText("Game Over",canvas.width/2,canvas.height/2)
        this.id = null
    }

    run() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.gates.move();
        this.bird.move();
        this.collisonDetection();

        if (this.id !== null) {
            this.id = requestAnimationFrame(() => this.run());
        }
    }
}
