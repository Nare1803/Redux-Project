import{ctx,canvas} from "utils"
export class Gates{
    constructor(){
        this.sticks = new Array(16).fill(null).map((_,i) => {
          let w = 100
          let h = 50 + Math.floor(Math.random() * 250)
          let x = 300 + i * 90//0-rdy klini 300 mnacacy 70-ov heru
          let y = i % 2 == 0 ? 0 : canvas.height - h//canvasi bardzrutyunic hanenq ira baedzrutyuny
            return {x,y,w,h}
        })//20 lengthov array//_ enq drel mapum vortev petq chi galu    
    }
    draw() {
        //gatesy uxxankyunneri zangvac a,voronc bardzrutyuny patahakan tiv a
        this.sticks.forEach(st => {
            ctx.fillStyle = "white"
            ctx.fillRect(st.x,st.y,st.w,st.h)
        })
    }
    move() {
        this.sticks.forEach((elm,i) => {
            elm.x -= 10
            if(elm.x < -5) {
                elm.x = canvas.width + 10
                elm.h = 50 + Math.floor(Math.random() * 250) //patahakan tiv veragrenq u stugenq kenta te zuyg,vor haskananq 
                if(i % 2 != 0) {
                    elm.y = canvas.height - elm.h//tarber gcer generation anenq
                }
            }
        })
        this.draw()
    }
}