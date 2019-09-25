import { Component, OnInit } from '@angular/core';
import { Ukm } from 'src/app/ukm/ukm.model';
import { UkmService } from 'src/app/ukm/ukm.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  loadedUkm : Ukm[];
  listedLoadedUkm: Ukm[];

  constructor(private ukmService: UkmService, public alertController: AlertController) {}

  ngOnInit(){
    this.loadedUkm = this.ukmService.ukms;
    this.listedLoadedUkm = this.loadedUkm.slice(1);
  }
  
  async onJoinUkm(load){
      const alert = await this.alertController.create({
        header: '',
        message: 'Beneran Mau Join?',
        buttons: [
          {
            text: 'Batal!',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Serius!',
            handler: () => {
              this.ukmService.addToMyUkm(load);
            }
          }
        ]
      });
  
      await alert.present();
  }
}