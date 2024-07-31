import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private AlertController : AlertController) { }

  ngOnInit() {
  }

  async alertComum() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK']
    });

    await alert.present();
  }

}
