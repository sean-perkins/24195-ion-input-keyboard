import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LeadFormComponent } from '../lead-form';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private readonly modalCtrl: ModalController) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: LeadFormComponent
    });
    modal.present();
  }

}
