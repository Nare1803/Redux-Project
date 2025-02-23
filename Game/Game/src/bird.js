import {ctx,canvas} from "utils"
export class Bird{
    #image = new Image()
    x = 100
    y = 300
    w = 100
    h = 100
    isFlying = false//i skzbane ch trnum
    constructor() {
        this.#image.src = "https://cdn0.iconfinder.com/data/icons/summer-253/512/flamingo_animal_bird_zoo_animals_wildlife_wild-512.png"
        this.#image.onload = () => ctx.drawImage(this.#image,this.x,this.y,this.w,this.h)

    }
    fly() {
        // console.log("fly")
        this.isFlying = true
    }
    draw() {
       this.#image.onload()
    }
    move() {
    
      if(!this.isFlying) {
        this.y +=3
      } else {
        this.y -= 100
        this.isFlying = false
      }
 
      if(this.y + this.h >= canvas.height){
         this.y = canvas.height - this.h
      }
   
      this.draw()
    }
}

//https://cdn0.iconfinder.com/data/icons/summer-253/512/flamingo_animal_bird_zoo_animals_wildlife_wild-512.png