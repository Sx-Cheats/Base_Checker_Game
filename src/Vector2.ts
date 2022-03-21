export class Vector2
{
    public x:number
    public y:number
    constructor(X:number=0,Y:number=0) {
        this.x=X 
        this.y=Y   
    }
    public static  lerp(p0:number,p1:number,t:number): number
    {
            return p0+t*(p1-p0)
    }
    public static Magnitude(Vec_1:Vector2,Vec_2:Vector2):number
    {
     return Math.sqrt(((Vec_1.x-Vec_2.x)**2)+((Vec_1.y-Vec_2.y)**2))
    }
    set pos(position:number[])
    {
        this.x = position[0]
        this.y = position[1]
    }
}