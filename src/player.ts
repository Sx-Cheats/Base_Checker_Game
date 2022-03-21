import { Pion } from "./pion"



export class Player 
{
    private Data : {}
    public Pions: Pion 

    constructor(Draw_A,Data:object[],position) {
        this.Data = Data 
        this.Pions = new Pion(Draw_A,this.Data.Color,position)
    }
    get Name():String
    {
        return this.Data.Name;
    }
}