const audioElement = document.getElementById('audio-element');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const trackNameElement = document.getElementById('track-name');
const trackDurationElement = document.getElementById('track-duration');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioElement.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioElement.play();
        playPauseBtn.textContent = 'Pause'; 
     }
        isPlaying = !isPlaying;
    });
    
    stopBtn.addEventListener('click', () => {
        audioElement.pause();
        audioElement.currentTime = 0;
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    });
    
    audioElement.addEventListener('timeupdate', () => {
        const currentTime = audioElement.currentTime;
        const duration = audioElement.duration;
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        trackDurationElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
    
    // Update track name and duration when the audio file is loaded
    audioElement.addEventListener('loadedmetadata', () => {
        trackNameElement.textContent = audioElement.src.split('/').pop();
        trackDurationElement.textContent = `${Math.floor(audioElement.duration / 60)}:${Math.floor(audioElement.duration % 60).toString().padStart(2, '0')}`;
    });