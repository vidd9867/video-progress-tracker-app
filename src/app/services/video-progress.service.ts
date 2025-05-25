import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VideoProgress, WatchedInterval, MergedIntervalsResult } from '../../models/video-progress.model';

@Injectable({
  providedIn: 'root'
})
export class VideoProgressService {
  private progressSubject = new BehaviorSubject<VideoProgress>({
    videoId: 'demo-video',
    watchedIntervals: [],
    totalUniqueTime: 0,
    progressPercentage: 0,
    lastSavedPosition: 0,
    duration: 0
  });

  public progress$ = this.progressSubject.asObservable();

  constructor() {

  }

  /**
   * Merges overlapping intervals and calculates total unique time watched
   */
  private mergeIntervals(intervals: WatchedInterval[]): MergedIntervalsResult {
    if (intervals.length === 0) {
      return { mergedIntervals: [], totalUniqueTime: 0 };
    }

    // Sort intervals by start time
    const sorted = [...intervals].sort((a, b) => a.start - b.start);
    const merged: WatchedInterval[] = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
      const current = sorted[i];
      const lastMerged = merged[merged.length - 1];

      // If current interval overlaps with the last merged interval
      if (current.start <= lastMerged.end) {
        // Merge by extending the end time
        lastMerged.end = Math.max(lastMerged.end, current.end);
      } else {
        // No overlap, add as new interval
        merged.push(current);
      }
    }

    // Calculate total unique time
    const totalUniqueTime = merged.reduce((sum, interval) => sum + (interval.end - interval.start), 0);

    return { mergedIntervals: merged, totalUniqueTime };
  }

  /**
   * Records a new watched interval
   */
  recordWatchedInterval(startTime: number, endTime: number, videoCode: string): void {
    if (startTime >= endTime) return;

    const currentProgress = this.progressSubject.value;
    const newIntervals = [...currentProgress.watchedIntervals, { start: startTime, end: endTime }];
    
    const { mergedIntervals, totalUniqueTime } = this.mergeIntervals(newIntervals);
    
    const progressPercentage = currentProgress.duration > 0 
      ? Math.min((totalUniqueTime / currentProgress.duration) * 100, 100) 
      : 0;

    const updatedProgress: VideoProgress = {
      ...currentProgress,
      watchedIntervals: newIntervals,
      totalUniqueTime,
      progressPercentage
    };

    this.progressSubject.next(updatedProgress);
    this.saveProgress(videoCode, updatedProgress);
  }

  /**
   * Updates the video duration
   */
  setDuration(videoCode: string, duration: number): void {
    const currentProgress = this.progressSubject.value;
    const updatedProgress: VideoProgress = {
      ...currentProgress,
      duration
    };

    this.progressSubject.next(updatedProgress);
    this.saveProgress(videoCode, updatedProgress);
  }

  /**
   * Updates the last saved position
   */
  updateLastPosition(videoCode: string, position: number): void {
    const currentProgress = this.progressSubject.value;
    const updatedProgress: VideoProgress = {
      ...currentProgress,
      lastSavedPosition: position
    };

    this.progressSubject.next(updatedProgress);
    this.saveProgress(videoCode, updatedProgress);
  }

  /**
   * Gets merged intervals for display
   */
  getMergedIntervals(): WatchedInterval[] {
    const currentProgress = this.progressSubject.value;
    return this.mergeIntervals(currentProgress.watchedIntervals).mergedIntervals;
  }

  /**
   * Resets all progress
   */
  resetProgress(videoCode: string): void {
    const resetProgress: VideoProgress = {
      videoId: 'demo-video',
      watchedIntervals: [],
      totalUniqueTime: 0,
      progressPercentage: 0,
      lastSavedPosition: 0,
      duration: this.progressSubject.value.duration
    };

    this.progressSubject.next(resetProgress);
    this.saveProgress(videoCode, resetProgress);
  }

  /**
   * Save progress to storage (in memory for demo)
   */
  saveProgress(videoCode: string, progress: VideoProgress): void {
    // In a real application, this would save to localStorage or send to API
    localStorage.setItem(videoCode, JSON.stringify(progress));
  }

  /**
   * Load progress from storage
   */
  loadProgress(videoCode: string): void {
    // In a real application, this would load from localStorage or API
    const saved = localStorage.getItem(videoCode);
    if (saved) {
      this.progressSubject.next(JSON.parse(saved));
    }
  }
}