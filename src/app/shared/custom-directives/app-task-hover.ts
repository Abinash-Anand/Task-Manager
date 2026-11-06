import { Directive } from '@angular/core';

@Directive({
  selector: '[appAppTaskHover]',
  standalone:true,
  host:{
    '[class.border-blue-500]':'isHovered',
    '[class.shadow-md]':'isHovered',
    '[class.-translate-y-0.5]':'isHovered',
    '[class.bg-yellow-200]':'isHovered',
    '[class.p-2]':'isHovered',
    '[class.border-md]':'isHovered',
    '[class.duration-200]':'isHovered',
    '[class.transition-all]':'isHovered',

    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class AppTaskHover {
  constructor() {}
isHovered:boolean = false
 
  onMouseEnter():void{
   this.isHovered=true
  }
  onMouseLeave():void{
    this.isHovered = false
  }
}
