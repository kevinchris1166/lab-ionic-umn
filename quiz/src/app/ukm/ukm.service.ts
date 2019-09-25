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
      'Basket',
      'Basket ada UKM blabla bla..'
    ),
    new Ukm(
      'u2',
      'Drama',
      'Drama ada UKM blabla bla..'
    ),
    new Ukm(
      'u3',
      'Futsal',
      'Futsal ada UKM blabla bla..'
    ),
    new Ukm(
      'u4',
      'Volly',
      'Volly ada UKM blabla bla..'
    ),
    new Ukm(
      'u5',
      'UMN PC',
      'UMN PC ada UKM blabla bla..'
    )
  ]

  constructor() { }

  get ukms() {
    return [...this._ukms];
  }

  addToMyUkm(u:Ukm){
    this.myUkm.push(u);
    console.log(this.myUkm);
  }

  getMyUkm(){
    return [...this.myUkm];
  }

  removeFromMyUkm(id:string){
    this.myUkm = this.myUkm.filter(p => {
      return p.id !== id;
    })
  }

}
