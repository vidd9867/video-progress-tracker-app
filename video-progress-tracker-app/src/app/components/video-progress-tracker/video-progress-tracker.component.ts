import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { VideoProgressService } from '../../services/video-progress.service';
import { VideoProgress, WatchedInterval } from '../../../models/video-progress.model';

@Component({
  selector: 'app-video-progress-tracker',
  templateUrl: './video-progress-tracker.component.html',
  styleUrls: ['./video-progress-tracker.component.css']
})
export class VideoProgressTrackerComponent implements OnInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;

  videoData = [
    {
      path: 'assets/4114797-uhd_3840_2160_25fps.mp4',
      thumbnail: 'assets/thumbnails/microscope.png',
      title: 'How to Use Microscope and its Parts and Functions',
      description: 'Learn how to use a microscope effectively, including its parts and functions.',
      videoCode: 'microscope'
    },
    {
      path: 'assets/3195394-uhd_3840_2160_25fps.mp4',
      thumbnail: 'assets/thumbnails/bloodTestimonals.png',
      title: 'Blood Testimonial ',
      description: 'Watch testimonials related to blood tests and their importance in healthcare.',
      videoCode: 'bloodTestimonal'
    },
    {
      path: 'assets/4074364-hd_1280_720_25fps.mp4',
      thumbnail: 'assets/thumbnails/bloodTestTude.png',
      title: 'Blood Test Tube',
      description: 'An informative video about blood test tubes and their usage in medical testing.',
      videoCode: 'bloodTestTube'
    },
    {
      path: 'assets/7230798-uhd_3840_2160_25fps.mp4',
      thumbnail: 'assets/thumbnails/chemicalReaction.png',
      title: 'Chemical Reaction',
      description: 'Explore the fascinating world of chemical reactions and their applications.',
      videoCode: 'chemicalReaction'
    },
    {
      path: 'assets/8460351-hd_1920_1080_24fps.mp4',
      thumbnail: 'assets/thumbnails/bloodExraction.png',
      title: 'Blood Extraction',
      description: 'A detailed guide on blood extraction techniques and safety protocols.',
      videoCode: 'bloodExraction'
    },
    {
      path: 'assets/8540617-uhd_4096_2160_25fps.mp4',
      thumbnail: 'assets/thumbnails/productTesting.png',
      title: 'Product Testing',
      description: 'Learn about the process of product testing and its significance in quality assurance.',
      videoCode: 'productTesting'
    }
  ]

  // Component state
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  lastRecordedTime = 0;

  Math = Math;
  
  // Progress data
  videoProgress: VideoProgress = {
    videoId: 'demo-video',
    watchedIntervals: [],
    totalUniqueTime: 0,
    progressPercentage: 0,
    lastSavedPosition: 0,
    duration: 0
  };

  mergedIntervals: WatchedInterval[] = [];

  videoUrl = '';

  videoCode = '';

  private destroy$ = new Subject<void>();

  constructor(private videoProgressService: VideoProgressService) {}

  ngOnInit(): void {
    this.videoData.forEach(video => {
      this.videoProgressService.saveProgress(video.videoCode, this.videoProgress);
    });
    
    this.videoUrl = 'assets/4114797-uhd_3840_2160_25fps.mp4';

    this.videoCode = 'microscope';

    // Load initial video progress
    this.videoProgressService.loadProgress(this.videoCode)

    // Subscribe to progress updates
    this.videoProgressService.progress$
      .pipe(takeUntil(this.destroy$))
      .subscribe(progress => {
        this.videoProgress = progress;
        this.mergedIntervals = this.videoProgressService.getMergedIntervals();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Handle video time updates
   */
  onTimeUpdate(videoCode: string): void {
    if (!this.videoRef?.nativeElement) return;

    const video = this.videoRef.nativeElement;
    this.currentTime = video.currentTime;

    // Record continuous watching interval
    if (this.isPlaying && Math.abs(this.currentTime - this.lastRecordedTime) < 2) {
      // User is watching continuously (not seeking)
      const intervalStart = Math.min(this.lastRecordedTime, this.currentTime);
      const intervalEnd = Math.max(this.lastRecordedTime, this.currentTime);
      this.videoProgressService.recordWatchedInterval(intervalStart, intervalEnd, videoCode);
    }

    this.lastRecordedTime = this.currentTime;
    this.videoProgressService.updateLastPosition(videoCode, this.currentTime);
  }

  /**
   * Handle video seeking
   */
  onSeeked(): void {
    if (!this.videoRef?.nativeElement) return;
    this.lastRecordedTime = this.videoRef.nativeElement.currentTime;
  }

  /**
   * Handle video loaded data
   */
  onLoadedData(videoCode: string): void {
    if (!this.videoRef?.nativeElement) return;

    const video = this.videoRef.nativeElement;
    this.duration = video.duration;
    this.videoProgressService.setDuration(videoCode, this.duration);

    // Resume from last saved position
    if (this.videoProgress.lastSavedPosition > 0) {
      video.currentTime = this.videoProgress.lastSavedPosition;
    } else if(this.videoProgress.watchedIntervals.length) {
      // If no last saved position, resume from the last watched interval
      const lastInterval = this.videoProgress.watchedIntervals.slice(-1)[0];
      video.currentTime = lastInterval.end;
    }
  }

  /**
   * Toggle play/pause
   */
  togglePlayPause(): void {
    if (!this.videoRef?.nativeElement) return;

    const video = this.videoRef.nativeElement;
    
    if (this.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  }

  /**
   * Handle play event
   */
  onPlay(): void {
    this.isPlaying = true;
  }

  /**
   * Handle pause event
   */
  onPause(): void {
    this.isPlaying = false;
  }

  /**
   * Reset progress
   */
  resetProgress(videoCode: string): void {
    this.videoProgressService.resetProgress(videoCode);
    if (this.videoRef?.nativeElement) {
      this.videoRef.nativeElement.currentTime = 0;
    }
  }

  /**
   * Format time for display
   */
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  /**
   * Get current playback position as percentage
   */
  getPlaybackPercentage(): number {
    return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
  }

  trackByInterval(index: number, interval: WatchedInterval): string {
  return `${interval.start}-${interval.end}`;
  }

  selectVideo( videoCode: string, videoUrl: string ): void {

    this.videoUrl = videoUrl;
    this.videoCode = videoCode;
    // Load Video on click
    this.videoProgressService.loadProgress(videoCode);
  }

}