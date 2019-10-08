import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song/song.service';
import { Songs, Album } from 'src/app/song/song.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  song: Songs[];
  listedSong: Songs[];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private songService: SongService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.song = this.songService.getSong(paramMap.get('id'));
      this.listedSong = this.song.slice(1);
      console.log(this.song);
    });
  }

  favorite(id:string){
    this.songService.favorite(id);
  }
}
