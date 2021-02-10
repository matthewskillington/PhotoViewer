import { TestBed } from '@angular/core/testing';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PhotoViewerComponent } from './photo-viewer.component';
import { PhotoViewerService } from './photo-viewer.service';

describe('PhotoViewerComponent', () => {
  const mockPhotoService = jasmine.createSpy('PhotoViewerService');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoViewerComponent, MatPaginator],
      providers: [{ provide: PhotoViewerService, useValue: mockPhotoService }],
    }).compileComponents();
  });

  it('should create the photo-viewer component', () => {
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have top message 'Welcome to the Photo Viewer!'`, () => {
    //Arrange:
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;

    //Assert:
    expect(app.topMessage).toEqual('Welcome to the Photo Viewer!');
  });

  it('should update low and high values when GetPaginatorData called', () => {
    //Arrange:
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    const pageEvent = new PageEvent();
    pageEvent.pageIndex = 1;
    pageEvent.pageSize = 10;

    //Act:
    app.getPaginatorData(pageEvent);

    //Assert:
    expect(app.lowValue).toEqual(10);
    expect(app.highValue).toEqual(20);
  });

  it('should show more items when pagination items changed', () => {
    //Arrange:
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    const pageEvent: PageEvent = {
      pageIndex: 0,
      pageSize: 25,
      length: 500,
    };

    //Act:
    app.getPaginatorData(pageEvent);
    expect(app.lowValue).toEqual(0);
    expect(app.highValue).toEqual(25);

    const pageEvent2 = new PageEvent();
    pageEvent2.pageIndex = 0;
    pageEvent.pageSize = 100;
    app.getPaginatorData(pageEvent);

    //Assert:
    expect(app.lowValue).toEqual(0);
    expect(app.highValue).toEqual(100);
  });

  it('should arrange photos array when FilterByTitle called', () => {
    //Arrange:
    const fixture = TestBed.createComponent(PhotoViewerComponent);
    const app = fixture.componentInstance;
    app.photos = [
      {
        albumId: 1,
        id: 1,
        url: '',
        thumbnailUrl: '',
        title: 'C title',
      },
      {
        albumId: 1,
        id: 2,
        url: '',
        thumbnailUrl: '',
        title: 'A title',
      },
      {
        albumId: 1,
        id: 3,
        url: '',
        thumbnailUrl: '',
        title: 'B title',
      },
    ];

    //Act:
    app.FilterByTitle();

    //Assert:
    expect(app.photos[0].title).toEqual('A title');
    expect(app.photos[2].title).toEqual('C title');
  });
});
