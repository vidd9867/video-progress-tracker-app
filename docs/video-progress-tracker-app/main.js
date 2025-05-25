(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Development\video-progress-tracker-app\video-progress-tracker-app\src\main.ts */"zUnb");


/***/ }),

/***/ "2MOP":
/*!***************************************************************************************!*\
  !*** ./src/app/components/video-progress-tracker/video-progress-tracker.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VideoProgressTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProgressTrackerComponent", function() { return VideoProgressTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_video_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/video-progress.service */ "IlGm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["videoPlayer"];
function VideoProgressTrackerComponent_div_42_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interval_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.formatTime(interval_r4.start), " - ", ctx_r3.formatTime(interval_r4.end), " ");
} }
function VideoProgressTrackerComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Watched Segments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoProgressTrackerComponent_div_42_div_4_Template, 2, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mergedIntervals)("ngForTrackBy", ctx_r1.trackByInterval);
} }
function VideoProgressTrackerComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoProgressTrackerComponent_div_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const video_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectVideo(video_r5.videoCode, video_r5.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r5.description);
} }
class VideoProgressTrackerComponent {
    constructor(videoProgressService) {
        this.videoProgressService = videoProgressService;
        this.videoData = [
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
        ];
        // Component state
        this.isPlaying = false;
        this.currentTime = 0;
        this.duration = 0;
        this.lastRecordedTime = 0;
        this.Math = Math;
        // Progress data
        this.videoProgress = {
            videoId: 'demo-video',
            watchedIntervals: [],
            totalUniqueTime: 0,
            progressPercentage: 0,
            lastSavedPosition: 0,
            duration: 0
        };
        this.mergedIntervals = [];
        this.videoUrl = '';
        this.videoCode = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.videoData.forEach(video => {
            this.videoProgressService.saveProgress(video.videoCode, this.videoProgress);
        });
        this.videoUrl = 'assets/4114797-uhd_3840_2160_25fps.mp4';
        this.videoCode = 'microscope';
        // Load initial video progress
        this.videoProgressService.loadProgress(this.videoCode);
        // Subscribe to progress updates
        this.videoProgressService.progress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(progress => {
            this.videoProgress = progress;
            this.mergedIntervals = this.videoProgressService.getMergedIntervals();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Handle video time updates
     */
    onTimeUpdate(videoCode) {
        var _a;
        if (!((_a = this.videoRef) === null || _a === void 0 ? void 0 : _a.nativeElement))
            return;
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
    onSeeked() {
        var _a;
        if (!((_a = this.videoRef) === null || _a === void 0 ? void 0 : _a.nativeElement))
            return;
        this.lastRecordedTime = this.videoRef.nativeElement.currentTime;
    }
    /**
     * Handle video loaded data
     */
    onLoadedData(videoCode) {
        var _a;
        if (!((_a = this.videoRef) === null || _a === void 0 ? void 0 : _a.nativeElement))
            return;
        const video = this.videoRef.nativeElement;
        this.duration = video.duration;
        this.videoProgressService.setDuration(videoCode, this.duration);
        // Resume from last saved position
        if (this.videoProgress.lastSavedPosition > 0) {
            video.currentTime = this.videoProgress.lastSavedPosition;
        }
        else if (this.videoProgress.watchedIntervals.length) {
            // If no last saved position, resume from the last watched interval
            const lastInterval = this.videoProgress.watchedIntervals.slice(-1)[0];
            video.currentTime = lastInterval.end;
        }
    }
    /**
     * Toggle play/pause
     */
    togglePlayPause() {
        var _a;
        if (!((_a = this.videoRef) === null || _a === void 0 ? void 0 : _a.nativeElement))
            return;
        const video = this.videoRef.nativeElement;
        if (this.isPlaying) {
            video.pause();
        }
        else {
            video.play();
        }
    }
    /**
     * Handle play event
     */
    onPlay() {
        this.isPlaying = true;
    }
    /**
     * Handle pause event
     */
    onPause() {
        this.isPlaying = false;
    }
    /**
     * Reset progress
     */
    resetProgress(videoCode) {
        var _a;
        this.videoProgressService.resetProgress(videoCode);
        if ((_a = this.videoRef) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.videoRef.nativeElement.currentTime = 0;
        }
    }
    /**
     * Format time for display
     */
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    /**
     * Get current playback position as percentage
     */
    getPlaybackPercentage() {
        return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
    }
    trackByInterval(index, interval) {
        return `${interval.start}-${interval.end}`;
    }
    selectVideo(videoCode, videoUrl) {
        this.videoUrl = videoUrl;
        this.videoCode = videoCode;
        // Load Video on click
        this.videoProgressService.loadProgress(videoCode);
    }
}
VideoProgressTrackerComponent.ɵfac = function VideoProgressTrackerComponent_Factory(t) { return new (t || VideoProgressTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_progress_service__WEBPACK_IMPORTED_MODULE_3__["VideoProgressService"])); };
VideoProgressTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoProgressTrackerComponent, selectors: [["app-video-progress-tracker"]], viewQuery: function VideoProgressTrackerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
    } }, decls: 47, vars: 22, consts: [[1, "main-layout"], [1, "video-tracker-container"], [1, "video-tracker-card"], [1, "video-section"], [1, "video-container"], ["controls", "", 1, "video-player", 3, "src", "muted", "timeupdate", "loadeddata", "seeked", "play", "pause"], ["videoPlayer", ""], [1, "stats-grid"], [1, "stat-card", "stat-green"], [1, "stat-content"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "stat-blue"], [1, "stat-card", "stat-purple"], [1, "progress-section"], [1, "progress-header"], [1, "progress-detail"], [1, "main-progress-bar"], [1, "main-progress-fill"], [1, "position-indicator"], ["class", "intervals-section", 4, "ngIf"], [1, "video-playlist-container"], [1, "video-playlist-card"], [1, "video-playlist"], ["class", "video-grid", 3, "click", 4, "ngFor", "ngForOf"], [1, "intervals-section"], [1, "intervals-grid"], ["class", "interval-chip", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "interval-chip"], [1, "video-grid", 3, "click"], [1, "video-item"], ["alt", "Video Thumbnail", 1, "video-thumbnail", 3, "src"], [1, "video-details"], [1, "video-title"], [1, "video-description"]], template: function VideoProgressTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeupdate", function VideoProgressTrackerComponent_Template_video_timeupdate_5_listener() { return ctx.onTimeUpdate(ctx.videoCode); })("loadeddata", function VideoProgressTrackerComponent_Template_video_loadeddata_5_listener() { return ctx.onLoadedData(ctx.videoCode); })("seeked", function VideoProgressTrackerComponent_Template_video_seeked_5_listener() { return ctx.onSeeked(); })("play", function VideoProgressTrackerComponent_Template_video_play_5_listener() { return ctx.onPlay(); })("pause", function VideoProgressTrackerComponent_Template_video_pause_5_listener() { return ctx.onPause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Unique Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Time Watched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Segments Watched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Viewing Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, VideoProgressTrackerComponent_div_42_Template, 5, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, VideoProgressTrackerComponent_div_46_Template, 8, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("muted", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 13, ctx.videoProgress.progressPercentage, "1.1-1"), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formatTime(ctx.videoProgress.totalUniqueTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mergedIntervals.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 16, ctx.videoProgress.totalUniqueTime, "1.0-0"), "s / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 19, ctx.duration, "1.0-0"), "s watched ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.Math.min(ctx.videoProgress.progressPercentage, 100), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.getPlaybackPercentage(), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mergedIntervals.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".main-layout[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 6px; \r\n}\r\n\r\n.video-tracker-container[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  padding: 12px;\r\n  padding-top: 24px;\r\n  padding-left: 75px;\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  flex: 2 1 0;\r\n}\r\n\r\n\r\n\r\n.video-playlist-container[_ngcontent-%COMP%] {\r\n  flex: 1 1 300px;\r\n  max-width: 600px;\r\n  padding-top: 24px;\r\n  padding-right: 75px;\r\n  background-color: #ffffff;\r\n  min-height: 50vh;\r\n}\r\n\r\n.video-tracker-card[_ngcontent-%COMP%] {\r\n  background: rgb(255, 255, 255);\r\n  overflow: hidden;\r\n}\r\n\r\n.video-playlist-card[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n  background-color: #ffffff;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #fba9a9, #f6c05c);\r\n  color: white;\r\n  padding: 32px;\r\n}\r\n\r\n.playlist-header[_ngcontent-%COMP%] {\r\n  background: white;\r\n  color: #1f2937;\r\n  padding: 32px;\r\n}\r\n\r\n.video-playlist[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.video-grid[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));\r\n  background: #ffffff;\r\n  padding: 12px;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n}\r\n\r\n.video-grid[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(to left, #2193b0, #6dd5ed);\r\n}\r\n\r\n.video-thumbnail[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 95px;\r\n  object-fit: cover;\r\n  border-radius: 12px;\r\n}\r\n\r\n.video-details[_ngcontent-%COMP%] {\r\n  text-wrap-style: wrap;\r\n  text-align: left;\r\n  padding-left: 16px;\r\n}\r\n\r\n.video-title[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  color: #1f2937;\r\n}\r\n\r\n.video-description[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #6b7280;\r\n  margin-top: 4px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin: 0 0 8px 0;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #ddd6fe;\r\n  margin: 0;\r\n}\r\n\r\n.video-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 12px;\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  overflow: hidden;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.video-player[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 425px;\r\n  object-fit: cover;\r\n}\r\n\r\n.video-controls[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\r\n  padding: 16px;\r\n}\r\n\r\n.controls-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.play-button[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  height: 48px;\r\n  background: #3b82f6;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 20px;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.play-button[_ngcontent-%COMP%]:hover {\r\n  background: #2563eb;\r\n}\r\n\r\n.progress-info[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  color: white;\r\n}\r\n\r\n.time-display[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 14px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.progress-bar-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 8px;\r\n  background: #4b5563;\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n}\r\n\r\n.progress-fill[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #3b82f6;\r\n  transition: width 0.3s ease;\r\n}\r\n\r\n.reset-button[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #4b5563;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.reset-button[_ngcontent-%COMP%]:hover {\r\n  background: #374151;\r\n}\r\n\r\n.stats-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));\r\n  gap: 24px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  border-radius: 12px;\r\n  border-left: 4px solid;\r\n}\r\n\r\n.stat-green[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #f0fdf4, #dcfce7);\r\n  border-left-color: #065f46;\r\n}\r\n\r\n.stat-blue[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #eff6ff, #dbeafe);\r\n  border-left-color: #1e40af;\r\n}\r\n\r\n.stat-purple[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #faf5ff, #f3e8ff);\r\n  border-left-color: #8b5cf6;\r\n}\r\n\r\n.stat-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.stat-label[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  margin: 0 0 4px 0;\r\n  opacity: 0.8;\r\n}\r\n\r\n.stat-value[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n}\r\n\r\n.stat-green[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .stat-green[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\r\n  color: #065f46;\r\n}\r\n\r\n.stat-blue[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .stat-blue[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\r\n  color: #1e40af;\r\n}\r\n\r\n.stat-purple[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%], .stat-purple[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\r\n  color: #6b21a8;\r\n}\r\n\r\n.stat-icon[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  opacity: 0.6;\r\n}\r\n\r\n.progress-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.progress-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.progress-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  color: #1f2937;\r\n}\r\n\r\n.progress-detail[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #6b7280;\r\n}\r\n\r\n.main-progress-bar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 12px;\r\n  background: #e5e7eb;\r\n  border-radius: 8px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.main-progress-fill[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: linear-gradient(to left, #2193b0, #6dd5ed);\r\n  border-radius: 8px;\r\n  transition: width 0.5s ease;\r\n  position: relative;\r\n}\r\n\r\n.main-progress-fill[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  animation: pulse 2s infinite;\r\n}\r\n\r\n.position-indicator[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 4px;\r\n  height: 100%;\r\n  background: #ef4444;\r\n  transition: left 0.2s ease;\r\n}\r\n\r\n.intervals-section[_ngcontent-%COMP%] {\r\n  background: #f9fafb;\r\n  border-radius: 12px;\r\n  padding: 24px;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.intervals-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #1f2937;\r\n  margin: 0 0 16px 0;\r\n}\r\n\r\n.intervals-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n  gap: 12px;\r\n}\r\n\r\n.interval-chip[_ngcontent-%COMP%] {\r\n  background: #def6fb;\r\n  color: #2193b0;\r\n  padding: 8px 12px;\r\n  border-radius: 20px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  font-weight: 500;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%] {\r\n  background: #eff6ff;\r\n  border-left: 4px solid #3b82f6;\r\n  padding: 24px;\r\n  border-radius: 0 8px 8px 0;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #1e40af;\r\n  margin: 0 0 12px 0;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  color: #1d4ed8;\r\n  margin: 0;\r\n  padding-left: 20px;\r\n}\r\n\r\n.instructions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n@keyframes pulse {\r\n  0%, 100% { opacity: 0.3; }\r\n  50% { opacity: 0.6; }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .video-tracker-container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n\r\n  .video-playlist-container[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .video-section[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .video-player[_ngcontent-%COMP%] {\r\n    height: 240px;\r\n  }\r\n  \r\n  .stats-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .video-grid[_ngcontent-%COMP%] {\r\n    grid-template-rows: 1fr;\r\n  }\r\n  \r\n  .progress-header[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 8px;\r\n  }\r\n  \r\n  .intervals-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1wcm9ncmVzcy10cmFja2VyL3ZpZGVvLXByb2dyZXNzLXRyYWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUSxFQUFFLG1DQUFtQztBQUMvQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQSxZQUFZOztBQUNaO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0RBQXdEO0VBQ3hELG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiw0REFBNEQ7RUFDNUQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVcsWUFBWSxFQUFFO0VBQ3pCLE1BQU0sWUFBWSxFQUFFO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsMkRBQTJEO0VBQzdEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXByb2dyZXNzLXRyYWNrZXIvdmlkZW8tcHJvZ3Jlc3MtdHJhY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbGF5b3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogNnB4OyAvKiBzcGFjZSBiZXR3ZWVuIHRoZSB0d28gc2VjdGlvbnMgKi9cclxufVxyXG5cclxuLnZpZGVvLXRyYWNrZXItY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZmxleDogMiAxIDA7XHJcbn1cclxuXHJcbi8qICNmOWZhZmIgKi9cclxuLnZpZGVvLXBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMSAxIDMwMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcblxyXG4udmlkZW8tdHJhY2tlci1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnZpZGVvLXBsYXlsaXN0LWNhcmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJhOWE5LCAjZjZjMDVjKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLnBsYXlsaXN0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMxZjI5Mzc7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLnZpZGVvLXBsYXlsaXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udmlkZW8tZ3JpZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi52aWRlby1ncmlkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxOTNiMCwgIzZkZDVlZCk7XHJcbn1cclxuXHJcbi52aWRlby10aHVtYm5haWx7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi52aWRlby1kZXRhaWxzIHtcclxuICB0ZXh0LXdyYXAtc3R5bGU6IHdyYXA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi52aWRlby10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMxZjI5Mzc7XHJcbn1cclxuXHJcbi52aWRlby1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgcCB7XHJcbiAgY29sb3I6ICNkZGQ2ZmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnZpZGVvLXBsYXllciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MjVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnZpZGVvLWNvbnRyb2xzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250cm9scy1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5wbGF5LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzYjgyZjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG59XHJcblxyXG4ucGxheS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1pbmZvIHtcclxuICBmbGV4OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjNGI1NTYzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMzYjgyZjY7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucmVzZXQtYnV0dG9uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzRiNTU2MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuLnJlc2V0LWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzM3NDE1MTtcclxufVxyXG5cclxuLnN0YXRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxufVxyXG5cclxuLnN0YXQtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGZkZjQsICNkY2ZjZTcpO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDY1ZjQ2O1xyXG59XHJcblxyXG4uc3RhdC1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWZmNmZmLCAjZGJlYWZlKTtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzFlNDBhZjtcclxufVxyXG5cclxuLnN0YXQtcHVycGxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmFmNWZmLCAjZjNlOGZmKTtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzhiNWNmNjtcclxufVxyXG5cclxuLnN0YXQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnN0YXQtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN0YXQtZ3JlZW4gLnN0YXQtbGFiZWwsXHJcbi5zdGF0LWdyZWVuIC5zdGF0LXZhbHVlIHtcclxuICBjb2xvcjogIzA2NWY0NjtcclxufVxyXG5cclxuLnN0YXQtYmx1ZSAuc3RhdC1sYWJlbCxcclxuLnN0YXQtYmx1ZSAuc3RhdC12YWx1ZSB7XHJcbiAgY29sb3I6ICMxZTQwYWY7XHJcbn1cclxuXHJcbi5zdGF0LXB1cnBsZSAuc3RhdC1sYWJlbCxcclxuLnN0YXQtcHVycGxlIC5zdGF0LXZhbHVlIHtcclxuICBjb2xvcjogIzZiMjFhODtcclxufVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtaGVhZGVyIGgzIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMxZjI5Mzc7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1kZXRhaWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzZiNzI4MDtcclxufVxyXG5cclxuLm1haW4tcHJvZ3Jlc3MtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYWluLXByb2dyZXNzLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxOTNiMCwgIzZkZDVlZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLXByb2dyZXNzLWZpbGw6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucG9zaXRpb24taW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNlZjQ0NDQ7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnRlcnZhbHMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLmludGVydmFscy1zZWN0aW9uIGg0IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMWYyOTM3O1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxufVxyXG5cclxuLmludGVydmFscy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmludGVydmFsLWNoaXAge1xyXG4gIGJhY2tncm91bmQ6ICNkZWY2ZmI7XHJcbiAgY29sb3I6ICMyMTkzYjA7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjM2I4MmY2O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMgaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMxZTQwYWY7XHJcbiAgbWFyZ2luOiAwIDAgMTJweCAwO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHVsIHtcclxuICBjb2xvcjogIzFkNGVkODtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb25zIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC4zOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC42OyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlby10cmFja2VyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvLXBsYXlsaXN0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAudmlkZW8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAudmlkZW8tcGxheWVyIHtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0cy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcy1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnRlcnZhbHMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoProgressTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-progress-tracker',
                templateUrl: './video-progress-tracker.component.html',
                styleUrls: ['./video-progress-tracker.component.css']
            }]
    }], function () { return [{ type: _services_video_progress_service__WEBPACK_IMPORTED_MODULE_3__["VideoProgressService"] }]; }, { videoRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoPlayer', { static: true }]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IlGm":
/*!****************************************************!*\
  !*** ./src/app/services/video-progress.service.ts ***!
  \****************************************************/
/*! exports provided: VideoProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProgressService", function() { return VideoProgressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class VideoProgressService {
    constructor() {
        this.progressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            videoId: 'demo-video',
            watchedIntervals: [],
            totalUniqueTime: 0,
            progressPercentage: 0,
            lastSavedPosition: 0,
            duration: 0
        });
        this.progress$ = this.progressSubject.asObservable();
    }
    /**
     * Merges overlapping intervals and calculates total unique time watched
     */
    mergeIntervals(intervals) {
        if (intervals.length === 0) {
            return { mergedIntervals: [], totalUniqueTime: 0 };
        }
        // Sort intervals by start time
        const sorted = [...intervals].sort((a, b) => a.start - b.start);
        const merged = [sorted[0]];
        for (let i = 1; i < sorted.length; i++) {
            const current = sorted[i];
            const lastMerged = merged[merged.length - 1];
            // If current interval overlaps with the last merged interval
            if (current.start <= lastMerged.end) {
                // Merge by extending the end time
                lastMerged.end = Math.max(lastMerged.end, current.end);
            }
            else {
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
    recordWatchedInterval(startTime, endTime, videoCode) {
        if (startTime >= endTime)
            return;
        const currentProgress = this.progressSubject.value;
        const newIntervals = [...currentProgress.watchedIntervals, { start: startTime, end: endTime }];
        const { mergedIntervals, totalUniqueTime } = this.mergeIntervals(newIntervals);
        const progressPercentage = currentProgress.duration > 0
            ? Math.min((totalUniqueTime / currentProgress.duration) * 100, 100)
            : 0;
        const updatedProgress = Object.assign(Object.assign({}, currentProgress), { watchedIntervals: newIntervals, totalUniqueTime,
            progressPercentage });
        this.progressSubject.next(updatedProgress);
        this.saveProgress(videoCode, updatedProgress);
    }
    /**
     * Updates the video duration
     */
    setDuration(videoCode, duration) {
        const currentProgress = this.progressSubject.value;
        const updatedProgress = Object.assign(Object.assign({}, currentProgress), { duration });
        this.progressSubject.next(updatedProgress);
        this.saveProgress(videoCode, updatedProgress);
    }
    /**
     * Updates the last saved position
     */
    updateLastPosition(videoCode, position) {
        const currentProgress = this.progressSubject.value;
        const updatedProgress = Object.assign(Object.assign({}, currentProgress), { lastSavedPosition: position });
        this.progressSubject.next(updatedProgress);
        this.saveProgress(videoCode, updatedProgress);
    }
    /**
     * Gets merged intervals for display
     */
    getMergedIntervals() {
        const currentProgress = this.progressSubject.value;
        return this.mergeIntervals(currentProgress.watchedIntervals).mergedIntervals;
    }
    /**
     * Resets all progress
     */
    resetProgress(videoCode) {
        const resetProgress = {
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
    saveProgress(videoCode, progress) {
        // In a real application, this would save to localStorage or send to API
        localStorage.setItem(videoCode, JSON.stringify(progress));
    }
    /**
     * Load progress from storage
     */
    loadProgress(videoCode) {
        // In a real application, this would load from localStorage or API
        const saved = localStorage.getItem(videoCode);
        if (saved) {
            this.progressSubject.next(JSON.parse(saved));
        }
    }
}
VideoProgressService.ɵfac = function VideoProgressService_Factory(t) { return new (t || VideoProgressService)(); };
VideoProgressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoProgressService, factory: VideoProgressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoProgressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Video Progress Tracker';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_video_progress_tracker_video_progress_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video-progress-tracker/video-progress-tracker.component */ "2MOP");
/* harmony import */ var _services_video_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/video-progress.service */ "IlGm");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_video_progress_service__WEBPACK_IMPORTED_MODULE_5__["VideoProgressService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_video_progress_tracker_video_progress_tracker_component__WEBPACK_IMPORTED_MODULE_4__["VideoProgressTrackerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_video_progress_tracker_video_progress_tracker_component__WEBPACK_IMPORTED_MODULE_4__["VideoProgressTrackerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_services_video_progress_service__WEBPACK_IMPORTED_MODULE_5__["VideoProgressService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_video_progress_tracker_video_progress_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video-progress-tracker/video-progress-tracker.component */ "2MOP");





const routes = [
    {
        path: '', component: _components_video_progress_tracker_video_progress_tracker_component__WEBPACK_IMPORTED_MODULE_2__["VideoProgressTrackerComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map