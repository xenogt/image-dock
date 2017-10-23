import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesViewportComponent } from './components/images-viewport/images-viewport.component';
import { ImageDetailViewComponent } from './components/image-detail-view/image-detail-view.component';
import { CategoryViewportComponent } from './components/category-viewport/category-viewport.component';
import { CategoryManageComponent } from './components/category-manage/category-manage.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesViewportComponent,
    ImageDetailViewComponent,
    CategoryViewportComponent,
    CategoryManageComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
