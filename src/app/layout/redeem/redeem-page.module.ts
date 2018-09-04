import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemPageRoutingModule } from './redeem-page-routing.module';
import { RedeemPageComponent } from './redeem-page.component';

@NgModule({
    imports: [CommonModule, RedeemPageRoutingModule],
    declarations: [RedeemPageComponent]
})
export class RedeemPageModule {}
