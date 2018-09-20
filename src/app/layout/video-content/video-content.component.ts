import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AdminReportService } from '../../shared/services/index';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/services/DataService';
import { DomSanitizer } from '@angular/platform-browser';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss'],
  animations: [routerTransition()]
})
export class VideoContentComponent implements OnInit {
  closeResult: string;
  data: Observable<Array<any>>;
  catagoryId: number;
  url: string;
  constructor(public router: Router,
    public route: ActivatedRoute,
    public adminReportService: AdminReportService,
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private modalService: NgbModal
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }
  videoImgUrl(code) {
    var imageUrl = 'http://img.youtube.com/vi/' + code + '/default.jpg';
    return imageUrl;
  }
  popUpVideoUrl(code) {
    var urlMain = "https://www.youtube.com/embed/" + code + "?autoplay=1";
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlMain);
  }


  ngOnInit() {

    this.dataService.currentCatId.subscribe(catId => {
      this.catagoryId = catId;
    }, err => {
      console.log(err);
    });
    this.data = this.getVideoList(this.catagoryId);

  }
  getVideoList(value: number) {
    return this.adminReportService.getVideoContentList(value.toString());
  }
  loadQuestionByVideo(videoId: number) {

  }
  // Model Content starts here..
  open(content, videoCode: string) {
    this.url = videoCode;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // Ends Here

}
