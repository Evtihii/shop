import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverProduct]',
})
export class HoverProductDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    
  }

  @HostListener('click') onMouseOver() {
    this.renderer.addClass(this.el.nativeElement, 'cardOnHover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'cardOnHover');
  }
}
