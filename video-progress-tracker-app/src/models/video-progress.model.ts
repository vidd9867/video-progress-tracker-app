export interface WatchedInterval {
  start: number;
  end: number;
}

export interface VideoProgress {
  videoId: string;
  watchedIntervals: WatchedInterval[];
  totalUniqueTime: number;
  progressPercentage: number;
  lastSavedPosition: number;
  duration: number;
}

export interface MergedIntervalsResult {
  mergedIntervals: WatchedInterval[];
  totalUniqueTime: number;
}