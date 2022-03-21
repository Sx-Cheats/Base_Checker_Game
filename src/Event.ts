export class Event
{
    private canvas:HTMLCanvasElement;
    constructor(canvas:HTMLCanvasElement) {
        this.canvas = canvas   
    }
    AddEvent(_event:string,callback,args_callback:object[]=[])
    {   
        this.canvas.addEventListener(_event,v=>callback(v,...args_callback))
    }
}