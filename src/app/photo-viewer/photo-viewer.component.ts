import { Component } from '@angular/core';
import { PhotoViewerService } from './photo-viewer.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent {
  topMessage: string = 'Welcome to the Photo Viewer!';
  photos: Photo[] = [];

  //Pagination Properties
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent();
  pageIndex: number = 0;
  lowValue: number = 0;
  highValue: number = 10;

  constructor(private photoService: PhotoViewerService) {}

  ngOnInit() {
    this.photoService
      .GetPhotos()
      .subscribe((data: Array<Photo>) => (this.photos = data));
  }

  getPaginatorData(event: PageEvent) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
