import { RedeemPageModule } from './redeem-page.module';

describe('BlankPageModule', () => {
    let redeemPageModule: RedeemPageModule;

    beforeEach(() => {
        redeemPageModule = new RedeemPageModule();
    });

    it('should create an instance', () => {
        expect(redeemPageModule).toBeTruthy();
    });
});
