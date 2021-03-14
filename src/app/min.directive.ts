import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDirective, multi: true}]
})
export class MinDirective implements Validator {

  el: HTMLElement;

  pMin = 0;
  pMax = 0;

  constructor(
    el: ElementRef<HTMLElement>
  ) {
    this.el = el.nativeElement;
  }


  @Input('appMin')
  set min(valueMin: number) {
    this.el.setAttribute('min', '' + valueMin);
    this.pMin = valueMin;
  }

  @Input('appMax')
  set max(valueMin: number) {
    this.el.setAttribute('max', '' + valueMin);
    this.pMax = valueMin;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    console.log(value);
    console.log(this.pMin);
    console.log(this.pMax);
    if (this.pMin > value || value > this.pMax) {
      console.log({min: this.pMin, max: this.pMax});
      return {min: this.pMin, max: this.pMax};
    }
    return null;
  }


}
