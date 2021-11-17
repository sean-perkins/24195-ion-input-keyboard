import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { LeadFormModule } from '../lead-form';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, LeadFormModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
