import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChoosed]'
})
export class ChoosedDirective {
  toggler = false;

  constructor(
    private el: ElementRef,
    private render: Renderer2,
  ) { }

  @HostListener('click')
  onMouseClick(): void {
    if(!this.toggler) {
      this.render.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)')
    } else {
      this.render.setStyle(this.el.nativeElement, 'transform', 'scale(1)')
    }
    
    this.toggler = !this.toggler;
  }
}