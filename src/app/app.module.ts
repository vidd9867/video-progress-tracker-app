import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoProgressTrackerComponent } from './components/video-progress-tracker/video-progress-tracker.component';
import { VideoProgressService } from './services/video-progress.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoProgressTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VideoProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
