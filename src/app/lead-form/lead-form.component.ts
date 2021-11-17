import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lead-form',
  templateUrl: 'lead-form.component.html'
})
export class LeadFormComponent {

  constructor(private readonly modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
