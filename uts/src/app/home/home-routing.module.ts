import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'album',
        component: HomePage,
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomePageModule'
            },
            {
                path: ':id',
                loadChildren: './home/songs/songs.module#SongsPageModule'
            }

        ]
    },
    {
        path: '',
        redirectTo: '/home/album',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class HomeRoutingModule {}