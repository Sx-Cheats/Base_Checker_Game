import { Color3 } from "./color"
import { Draw_API } from "./draw"
import { Vector2 } from "./Vector2"


export class Pion
{

    public Pions_Instances:object = []
    
 
    constructor(_Draw_API:Draw_API, color:String,tile_position:string|number) {

        tile_position = tile_position.toLowerCase()
        if (tile_position != "up" && tile_position != "down") {
            throw 'Error Invalid tile position, use up/down'
            
        }

        tile_position = tile_position == "up" ? 0 : 450
        let align_table=0
        let offset
        let origin_color = color
        for(let x=0;x<=40;x++)
        { 
            offset = x%10 == 0 ? (x/10)+1 :  offset
               
            let position = new Vector2( ((75* (x%10))+37),   (((75*offset)+37)-76)+tile_position  )
             
            if((x%2!=0 && offset%2 != 0) || x%2==0 && offset%2 == 0)
            {     
                         if((x <= 9 && tile_position== 0) || (x > 29 && tile_position== 450) )
                         {
                           color = Color3.brigness(origin_color,30)
                           align_table=1
                         }else
                            {
                                color = origin_color
                                align_table=0
                            }
                _Draw_API.circle(color, position.x,position.y )
                this.Pions_Instances[x] = {Rang:align_table,Position:position,Color:color,Base_Color:color}
            }
    }
}
}
