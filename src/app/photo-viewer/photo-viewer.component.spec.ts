import { TestBed } from '@angular/core/testing';
import { PhotoViewerComponent } from './photo-viewer.component';

describe('PhotoViewerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoViewerComponent],
    }).compileComponents();
  });

  it('should create the photo-viewer component', () => {
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have top message 'Welcome to the Photo Viewer!'`, () => {
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    expect(app.topMessage).toEqual('Welcome to the Photo Viewer!');
  });
});
