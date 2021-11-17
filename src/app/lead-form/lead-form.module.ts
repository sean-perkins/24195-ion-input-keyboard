import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccordionModule } from '../accordion';
import { LeadFormComponent } from './lead-form.component';

@NgModule({
    imports: [CommonModule, IonicModule, AccordionModule],
    declarations: [LeadFormComponent],
    exports: [LeadFormComponent]
})
export class LeadFormModule {}
