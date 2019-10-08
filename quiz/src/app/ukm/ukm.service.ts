import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {

  private myUkm: Ukm[] = [];

  private _ukms: Ukm[] = [
    new Ukm(
      'u1',
      'Tennis',
      'Tennis adalah UKM yang ada di UMN'
    ),
    new Ukm(
      'u2',
      'Basket',
      'Basket adalah UKM yang ada di UMN'
    ),
    new Ukm(
      'u3',
      'Kasti',
      'Kasti adalah UKM yang ada di UMN'
    ),
    new Ukm(
      'u4',
      'Teater',
      'Teater adalah UKM yang ada di UMN'
    ),
    new Ukm(
      'u5',
      'Game',
      'Game adalah UKM yang ada di UMN'
    )
  ]

  constructor() { }

  get ukms() {
    return [...this._ukms];
  }

  getMyUkm(){
    return [...this.myUkm];
  }

  addToMyUkm(u:Ukm){
    this.myUkm.push(u);
    console.log(this.myUkm);
  }

  removeFromMyUkm(id:string){
    this.myUkm = this.myUkm.filter(p => {
      return p.id !== id;
    })
  }

}
