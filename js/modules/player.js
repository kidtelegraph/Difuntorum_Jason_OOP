// Define AudioPlayer class
export class AudioPlayer {
    constructor() {
        this.audioPlayer = document.querySelector('.audio-player');
        this.playPauseBtn = document.querySelector('.play-pause');
        this.progressBar = document.querySelector('.progress');
    }

    play() {
        this.audioPlayer.play();
    }

    pause() {
        this.audioPlayer.pause();
    }

    // Add event listeners for play/pause button
    addPlayPauseListener() {
        this.playPauseBtn.addEventListener('click', () => {
            if (this.audioPlayer.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    }

    // Update progress bar based on audio playback
    updateProgressBar() {
        const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    // Initialize audio player with event listeners
    init() {
        this.addPlayPauseListener();
        // Update progress bar as audio plays
        this.audioPlayer.addEventListener('timeupdate', () => {
            this.updateProgressBar();
        });
    }
}