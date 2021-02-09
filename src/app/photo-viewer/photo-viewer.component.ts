import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoViewerService } from './photo-viewer.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent {
  topMessage: string = 'Welcome to the Photo Viewer!';
  apiUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoViewerService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.photoService
      .GetPhotos()
      .subscribe((data: Array<Photo>) => (this.photos = data));
  }
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
