import { VideoContentModule } from './video-content.module';


describe('VideoContentModule', () => {
    let videoContentModule: VideoContentModule;

    beforeEach(() => {
        videoContentModule = new VideoContentModule();
    });

    it('should create an instance', () => {
        expect(videoContentModule).toBeTruthy();
    });
});
