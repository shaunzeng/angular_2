import { Directive, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[warning]',
})
export class WarningDirective {
  constructor(public viewContainerRef: ViewContainerRef, public ele: WarningDirective) {
    console.log('called ');
  }
}
