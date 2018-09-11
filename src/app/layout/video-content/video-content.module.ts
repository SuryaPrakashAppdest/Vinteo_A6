import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoContentRoutingModule } from './video-content-routing.module';
import { VideoContentComponent } from './video-content.component';

@NgModule({
    imports: [CommonModule, VideoContentRoutingModule],
    declarations: [VideoContentComponent]
})
export class VideoContentModule { }
