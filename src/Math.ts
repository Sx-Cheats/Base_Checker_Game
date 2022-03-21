export class Maths
{
    public static clamp = (value:number,min:number,max:number) : number=>
    {
        return Math.max(Math.min(value,max),min)
    }
    public static random(min:number,max:number):number
    {
       return (Math.random()*max)+min
    }
}