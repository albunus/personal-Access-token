import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRepo]'
})
export class RepoDirective {

  constructor(private el: ElementRef) {}
  @Input()
  defaultColor!: string;
  @Input("appRepo")
  highlightColor!: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.appRepo(this.highlightColor || this.defaultColor || "#72ed26");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.appRepo("");
  }

  private appRepo(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
