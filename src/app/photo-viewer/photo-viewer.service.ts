import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo-viewer.component';

@Injectable()
export class PhotoViewerService {
  apiUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  GetPhotos() {
    return this.http.get<Array<Photo>>(this.apiUrl);
  }
}
