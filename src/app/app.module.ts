import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { PhotoViewerService } from './photo-viewer/photo-viewer.service';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, PhotoViewerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule,
    MatPaginatorModule,
  ],
  providers: [PhotoViewerService],
  bootstrap: [AppComponent, PhotoViewerComponent],
})
export class AppModule {}
