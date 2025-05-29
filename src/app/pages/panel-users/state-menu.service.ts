import { Injectable } from '@angular/core';

@Injectable()
export class StateMenuService {

  constructor() { }
  private menuFormValue: any = null;

  setFormValue(value: any) {
    this.menuFormValue = value;
  }

  getFormValue(): any {
    return this.menuFormValue;
  }

  clearFormValue() {
    this.menuFormValue = null;
  }
}
