import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appDir2]'
})
export class Dir2Directive {

  constructor(private el: ElementRef) { }

  @Input('appDir2') highlightColor: string;
  @Input() defaultColor: string;
  @Input() size: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
     this.el.nativeElement.style.fontSize = '16px';
     this.el.nativeElement.style.height = '100px';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = this.size+'px';
    this.el.nativeElement.style.height = '200px';
  }

}
