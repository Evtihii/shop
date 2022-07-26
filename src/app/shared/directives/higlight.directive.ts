import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {
  @HostBinding('class.new-class') isHovering = false;
  constructor() { }

  @HostListener('mouseover') onMouseOver() {
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }
}
