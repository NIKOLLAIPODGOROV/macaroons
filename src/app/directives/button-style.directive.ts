import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonStyleDirective]'
})
export class ButtonStyleDirective implements OnInit {

  @Input() bgColor: string = "rgba(113,19,130, 1)";
  @Input() hoverShadowColor: string = "rgba(185,24,121,0.5)";

  private _boxShadow: string = '';

  @HostBinding('style.box-shadow')
  get boxShadow() {
    return this._boxShadow;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.setShadow(`0 5px 9px 1px ${this.hoverShadowColor}`);
  }
  @HostListener('mouseout')
  mouseMove() {
    this.setShadow('none');
  }

  constructor(private buttonElement: ElementRef,
              private rend: Renderer2,) {

  }

  ngOnInit() {
    this.rend.setStyle(this.buttonElement.nativeElement, 'background', this.bgColor);
  }

  setShadow(value: string) {
    this._boxShadow = value;
  }

}
