import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProgressTrackerComponent } from './video-progress-tracker.component';

describe('VideoProgressTrackerComponent', () => {
  let component: VideoProgressTrackerComponent;
  let fixture: ComponentFixture<VideoProgressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoProgressTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
