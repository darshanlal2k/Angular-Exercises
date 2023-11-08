import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {

  @Input() userName = '';
  constructor
  (
    private element:ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'red';


   }

   ngOnInit(): void {
    this.element.nativeElement.innerText = this.userName;
   }

}
