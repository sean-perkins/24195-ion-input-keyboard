import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule {}
