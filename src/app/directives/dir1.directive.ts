import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {

 constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
} 
