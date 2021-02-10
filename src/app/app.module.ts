import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { PhotoViewerService } from './photo-viewer/photo-viewer.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, PhotoViewerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  providers: [PhotoViewerService],
  bootstrap: [AppComponent, PhotoViewerComponent],
})
export class AppModule {}
