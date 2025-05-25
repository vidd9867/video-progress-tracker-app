import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoProgressTrackerComponent } from './components/video-progress-tracker/video-progress-tracker.component';

const routes: Routes = [
  {
    path: '', component: VideoProgressTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
