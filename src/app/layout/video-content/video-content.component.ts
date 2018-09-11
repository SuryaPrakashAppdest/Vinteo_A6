import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminReportService } from '../../shared/services/index';
import { Observable } from 'rxjs/Observable';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
  animations: [routerTransition()]
})
export class VideoContentComponent implements OnInit {
  closeResult: string;

  data: Observable<Array<any>>;
  // private frameUrl = 'https://www.youtube.com/embed/VFDZHPaMIbc?autoplay=1'
  constructor(public router: Router,
    public route: ActivatedRoute,
    public adminReportService: AdminReportService,
    private sanitizer: DomSanitizer
  ) {

  }
  videoUrl(code) {
    var urlMain = "https://www.youtube.com/embed/" + code + "?autoplay=1";
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlMain);
  }
  ngOnInit() {
    this.data = this.adminReportService.getVideoContentList();
  }
}
