import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminReportService } from '../../shared/services/index';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-redeem-page',
    templateUrl: './redeem-page.component.html',
    styleUrls: ['./redeem-page.component.scss'],
    animations: [routerTransition()]
})
export class RedeemPageComponent implements OnInit {
    columnHeaders: string[];
    columns: string[];
    data: Observable<Array<any>>;
    constructor(public router: Router,
        public route: ActivatedRoute,
        public adminReportService: AdminReportService) {
        this.columnHeaders = this.getColumnHeaders();
        this.data = this.adminReportService.getRedeemLog();
        this.columns = this.getColumns();

    }

    ngOnInit() {
    }
    getColumnHeaders(): string[] {
        return ["UserName", "Total Points", "Redeem Points", "Balance Points", "Gateway Name", "Redeem Date"]
    };
    getColumns(): string[] {
        return ["UserName", "TotalPoints", "RedeemPoints", "BalancePoints", "GatewayName", "RedeemDate"]
    };

}

