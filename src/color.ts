import { Maths } from "./Math";

export class Color3
{
    private static hextodec(str:string): number[]
    {
        return [parseInt(str.substring(1,3),16),parseInt(str.substring(3,5),16),parseInt(str.substring(5,7),16)]
    };
    public static RandomColor(): string
    {
        return `rgb(${Maths.random(0,254)},${Maths.random(0,254)},${Maths.random(0,254)})`
    }
    public static hextorgb(hex:string):string
    {
        if(hex.includes('rgb('))
        {
            return hex
        }
       return `rgb(${this.hextodec(hex).join(',')})`; 
        
    }
    
    public static brigness(str:string,n:number):string
    {
        if(!str.includes('rgb('))
        {
           throw "color format must be rgb(number(0-255),number(0-255),number(0-255))"
        }
        const  obj_v:string[] = str.substring(4,str.length-1).split(',')
        return `rgb(${(obj_v.map(v=>parseInt(v)+n)).join(',')})`

    }

}
