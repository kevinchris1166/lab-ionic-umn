import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from 'src/app/song/song.service';
import { Album } from 'src/app/song/song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {
  song : Album;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private songsService: SongService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        console.log(paramMap.get('id'));
        this.navCtrl.navigateBack('/home/albums');
        return;
      }
      console.log(paramMap.get('id'));
      this.song = this.songsService.getSong(paramMap.get('id'));
    });
  }

}
