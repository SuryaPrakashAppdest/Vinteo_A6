import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemPageComponent } from './redeem-page.component';

const routes: Routes = [
    {
        path: '',
        component: RedeemPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RedeemPageRoutingModule {}
