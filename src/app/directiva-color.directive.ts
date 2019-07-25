import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivaColor]'
})
export class DirectivaColorDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter')
  public onMouseEnter() {
   this.element.nativeElement.style.backgroundColor="green";
  }

 @HostListener('mouseleave')
 public onMouseLeave(){
  this.element.nativeElement.style.backgroundColor="white";
 }

}
