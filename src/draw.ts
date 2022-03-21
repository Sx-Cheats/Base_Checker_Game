import { Color3 } from "./color";

export class Draw_API
{
    private context:CanvasRenderingContext2D;

    constructor(Canvas:HTMLCanvasElement) {
        this.context = Canvas.getContext('2d') 
 
    }
    clear()
    {
        this.context.clearRect(0,0,753,753)
    }
    circle(color:string,x:number,y:number)
    { 
        this.context.beginPath()
        this.context.lineWidth=4
        this.context.strokeStyle=Color3.brigness(color,-80)
        this.context.fillStyle=color
        this.context.arc(x, y, 25, 0, 2 * Math.PI);
        this.context.fill()
        this.context.stroke()
    }
}