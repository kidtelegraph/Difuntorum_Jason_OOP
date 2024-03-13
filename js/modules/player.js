export class AudioPlayer {
    constructor(gallery) {
        this.gallery = gallery;
        this.audioPlayer = document.querySelector('.audio-player');
    }

    play() {
        this.audioPlayer.play();
    }

    pause() {
        this.audioPlayer.pause();
    }

    // Add event listeners within the constructor or a separate method
    addEventListeners() {
        // Check if the elements exist before adding event listeners
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                gallery.prevImage();
            });
            nextBtn.addEventListener('click', () => {
                gallery.nextImage();
            });
        } else {
            console.error("Elements with class 'prev-btn' or 'next-btn' not found.");
        }
    }
}

// Initialize audio player
const audioPlayer = new AudioPlayer();

// Call the method to add event listeners
audioPlayer.addEventListeners();