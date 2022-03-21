import { Player } from "./player"
import { Event } from "./Event";
import { Vector2 } from "./Vector2";
import { Draw_API } from "./draw";
import { Color3 } from "./color";


export class Party
{

    public Player_1: Player
    public  Player_2: Player

    private  Won = false
    private Turn:boolean = false;

    private MyEvent:Event

    private _Draw_API:Draw_API

    private tile_selected: Player|null

    constructor(Canvas:HTMLCanvasElement,Player1:{},Player2:{})
    {
        this._Draw_API = new Draw_API(Canvas)
        this.Player_1 = new Player(this._Draw_API,Player1,'up')
        this.Player_2=  new Player(this._Draw_API,Player2,'down')
        this.MyEvent = new Event(Canvas)

        this.tile_selected = null

        this.MyEvent.AddEvent('click', (v:MouseEvent)=>
        {
             let valid_tiles = ([].concat(this.Player_1.Pions.Pions_Instances)).concat(this.Player_2.Pions.Pions_Instances)
             let origin_x =  Math.abs(v.x-((window.innerWidth/2)-(751/2) )+2)
             let origin_y =  Math.abs(v.y-((window.innerHeight/2)-(751/2)))
             let offset_tile_mouse_x = Math.abs(Math.floor(origin_x/75))
             let offset_tile_mouse_y = Math.abs(Math.floor(origin_y/75))

            let positioned = false

            for(let x in valid_tiles)
            { 
                let mg = Vector2.Magnitude(valid_tiles[x].Position,{x:origin_x,y:origin_y})

                if(mg < 38 && this.tile_selected == valid_tiles[x])
                {
                       this.tile_selected.Color = this.tile_selected.Base_Color
                       this.tile_selected = null
                       break   
            }else if(mg < 38 && this.tile_selected == null)
                { 
                    valid_tiles[x].Color = Color3.brigness(valid_tiles[x].Color,-60)
                    this.tile_selected = valid_tiles[x]
                    positioned = true
                    break
                }else if (this.tile_selected!=null)
                {
                        if(((offset_tile_mouse_x == Math.floor(valid_tiles[x].Position.x/75) && offset_tile_mouse_y == Math.floor(valid_tiles[x].Position.y/75)) || ((offset_tile_mouse_x%2==0 && offset_tile_mouse_y%2==0) || (offset_tile_mouse_x%2!=0 && offset_tile_mouse_y%2!=0))))
                        {
                            positioned = true   
                            break  
                        }   
                }
            }
            if(!positioned && this.tile_selected)
            {
                this.tile_selected.Position.x = ((75*offset_tile_mouse_x)+37)
                this.tile_selected.Position.y = ((75*offset_tile_mouse_y)+37)
                this.tile_selected.Color = this.tile_selected.Base_Color
                this.tile_selected=null
            }
            this._Draw_API.clear()
            for(let x  in valid_tiles)
            {
                this._Draw_API.circle(valid_tiles[x].Color ,valid_tiles[x].Position.x,valid_tiles[x].Position.y)
            }
        }) 
        
    }
}

