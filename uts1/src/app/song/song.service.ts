import { Injectable } from '@angular/core';
import { Album, Songs } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  album : Album;

  private myFavorite: Songs[] = [];
  private _albums: Album[] = [
    {  
      id :'a1',
      name :'Welcome to the Black Parade',
      artist :'My Chemical Romance',
      imgUrl : 'https://i.ibb.co/2vMvvNP/Screen-Shot-2019-09-23-at-13-06-40-PM.png',
      songs:[
          {
            id: 'a1s1',
            title: 'I don\'t love you',
            minute: 3,
            second: 59,
            fav: false,
          },
          {
            id: 'a1s2',
            title: 'Teenagers',
            minute: 2,
            second: 42,
            fav: false,
          },
          {
            id: 'a1s3',
            title: 'Welcome to the Black Parade',
            minute: 5,
            second: 11,
            fav: false,
          },
          {
            id: 'a1s4',
            title: 'This is How I Dissapear',
            minute: 3,
            second: 59,
            fav: false,
          },
          {
            id: 'a1s5',
            title: 'House of Wolves',
            minute: 3,
            second: 59,
            fav: false,
          }
      ],
    },
    {  
      id :'a2',
      name :'Love Me / Love Me Not',
      artist :'HONNE',
      imgUrl : 'https://i.ibb.co/stR16bb/Screen-Shot-2019-09-23-at-13-06-57-PM.png',
      songs:[
          {
            id: 'a2s1',
            title: 'I might',
            minute: 4,
            second: 16,
            fav: false,
          },
          {
            id: 'a2s2',
            title: 'Me & You',
            minute: 4,
            second: 4,
            fav: false,
          },
          {
            id: 'a2s3',
            title: 'Day 1',
            minute: 3,
            second: 54,
            fav: false,
          },
          {
            id: 'a2s4',
            title: 'I Got You',
            minute: 3,
            second: 32,
            fav: false,
          }
      ],
    },
    {  
      id :'a3',
      name :'Pejantan Tangguh',
      artist :'Sheila on 7',
      imgUrl : 'https://i.ibb.co/QQ6MP8J/Screen-Shot-2019-09-23-at-13-06-25-PM.png',
      songs:[
          {
            id: 'a3s1',
            title: 'Pejantan Tangguh',
            minute: 3,
            second: 27,
            fav: false,
          },
          {
            id: 'a3s2',
            title: 'Itu Aku',
            minute: 4,
            second: 39,
            fav: false,
          },
          {
            id: 'a3s3',
            title: 'Pemuja Rahasia',
            minute: 3,
            second: 53,
            fav: false,
          },
          {
            id: 'a3s4',
            title: 'Pilihlah Aku',
            minute: 4,
            second: 22,
            fav: false,
          },
          {
            id: 'a3s5',
            title: 'Generasi Patah Hati',
            minute: 5,
            second: 6,
            fav: false,
          },
          {
            id: 'a3s6',
            title: 'Ketidakwarasan Padaku',
            minute: 3,
            second: 53,
            fav: false,
          },
      ],
    }
  ]

  constructor() { }
  
  get albums(){
    return[...this._albums];
  }
  
  getMyFavorite(){
    return[...this.myFavorite];
  }

  addToMyFavorite(u:Songs){
    this.myFavorite.push(u);
  }

  selected:Songs;

  favorite(s_id:string){
    this.selected = this.getSongs(s_id);
    if(this.selected.fav === false){
      this.addToMyFavorite(this.selected);
    }
    else {
      this.removeFromMyFavorite(this.selected.id);
    }
    this.selected.fav = !this.selected.fav;
  }

  removeFromMyFavorite(id:string){
    this.myFavorite = this.myFavorite.filter(p => {
      return p.id !== id;
    })
  }

  getAlbum(id:string){
    this.album = this._albums.find(p => p.id === id);
    return this.album;
  }
  
  getSongs(id:string){
    this.album = this._albums.find(p => p.songs.find(s => s.id === id['id']));
    return this.album.songs.find(s => s.id === id['id']);
  }

  getSong(id: string){
    this.album = this._albums.find(p => p.id === id);
    return this.album.songs;
  }



}

