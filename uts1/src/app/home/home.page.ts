import { Component } from '@angular/core';
import { Album } from '../song/song.model';
import { SongService } from '../song/song.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLoading: boolean;
  loadedAlbum : Album[];
  listedLoadedAlbum: Album[];
  selectedAlbum : Album[];

  constructor(private songService: SongService,private router: Router, private loadingCtrl: LoadingController) {}

  ngOnInit(){
    this.loadedAlbum = this.songService.albums;
    this.listedLoadedAlbum = this.loadedAlbum.slice(1);
  }

  onFavoriteSong(){
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose:true, message: 'Updating your favorite songs...'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }

  onRemoveFavoriteSong(){
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose:true, message: 'Updating your favorite songs...'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }
}
