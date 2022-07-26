import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTon]'
})
export class HighlighDirective {
  
  constructor(private renderer: Renderer2, private el: ElementRef) {
    
  }vvcvb

  @HostListener('click') onMouseOver() {
    console.log(this.el)
    this.renderer.addClass(this.el.nativeElement, '111111111111111111111111111111');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'cardOnHover');
  }
}
