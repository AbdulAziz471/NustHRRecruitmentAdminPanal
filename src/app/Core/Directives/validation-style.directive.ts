import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidationStyle]'
})
export class ValidationStyleDirective {
  private _control: AbstractControl | null = null;

  @Input() set appValidationStyle(control: AbstractControl | null) {
    this._control = control;
  }

  @HostBinding('class.is-invalid') get isInvalid() {
    return this._control ? this._control.invalid && this._control.touched : false;
  }

  @HostBinding('class.is-valid') get isValid() {
    return this._control ? this._control.valid && this._control.touched : false;
  }

  constructor() { }
}
