import { Component, OnInit } from '@angular/core';
import { Ukm } from '../ukm/ukm.model';
import { UkmService } from '../ukm/ukm.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  loadedUkm: Ukm[];
  myUkm: Ukm[];

  constructor(private ukmService: UkmService) { }

  ngOnInit() {
    this.loadedUkm = this.ukmService.ukms;
    this.myUkm = this.ukmService.getMyUkm();
    console.log(this.myUkm);
  }

  ionViewWillEnter(){
    this.myUkm = this.ukmService.getMyUkm();
    console.log(this.myUkm);
  }

  onRemoveMyUkm(id: string){
    this.ukmService.removeFromMyUkm(id);
    this.myUkm = this.ukmService.getMyUkm();
  }

}
