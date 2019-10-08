import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'album',
    children: [
        {
            path: '',
            loadChildren: './home/album/album.module#AlbumPageModule'
        },
        {
            path: ':id',
            loadChildren: './home/album/song/song.module#SongPageModule'
        }

    ]
},
  { path: 'favorite', loadChildren: './favorite/favorite.module#FavoritePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
