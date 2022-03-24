import { Color3 } from './color'
import { Party } from './Party'
import './style.css'


let Player_1_Color = Color3.RandomColor()
let Player_2_Color = Color3.RandomColor()


let tiles:HTMLDivElement = document.getElementById('Ground')
let canvas:HTMLDivElement = document.getElementById('game')

let offset=0

Player_1_Color = Color3.hextorgb(Player_1_Color)
Player_2_Color = Color3.hextorgb(Player_2_Color)

Object.values(tiles.getElementsByTagName('div')).forEach((value,index)=>{
  offset = index%10 == 0 ? index/10: offset
  if( ((index%2)==0 && (offset%2)!=0) || ((index%2)!=0 && (offset%2)==0) )
  { 
         if(40<= index && index  < 60)
         {
          value.style.backgroundColor  = 'rgb(170,170,170)'
          value.style.boxShadow  = `inset 3px 0 12px 2px #01161d, 0 0 5px 2px ${Color3.brigness('rgb(170,170,170)',-40)}`
         }if(index  < 40)
         {
          value.style.backgroundColor = Color3.brigness(Player_1_Color,-30)
          value.style.boxShadow  = `inset 3px 0 12px 2px #01161d, 0 0 5px 2px ${Color3.brigness(Player_1_Color,-60)}`
         }else if(index  >= 60)
         {
          value.style.backgroundColor = Color3.brigness(Player_2_Color,-30)
          value.style.boxShadow  = `inset 3px 0 12px 2px #01161d, 0 0 5px 2px ${Color3.brigness(Player_2_Color,-60)}`
         }
  }

})

let _Party = new Party(canvas,{Name:"BOB",Color:Player_1_Color},{Name:"PIERRE",Color:Player_2_Color})

