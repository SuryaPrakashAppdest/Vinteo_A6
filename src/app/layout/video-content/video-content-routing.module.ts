import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContentComponent } from './video-content.component';

const routes: Routes = [
    {
        path: '',
        component: VideoContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideoContentRoutingModule { }