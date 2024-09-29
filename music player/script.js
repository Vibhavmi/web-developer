let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('play-pause-btn');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
let seekSlider = document.getElementById('seek-slider');
let trackName = document.getElementById('track-name');
let trackArtist = document.getElementById('track-artist');

let tracks = [
    { name: "Track 1", artist: "Artist 1", src: "s1.mp3" },
    { name: "Track 2", artist: "Artist 2", src: "s1.mp3" },
    { name: "Track 3", artist: "Artist 3", src: "s1.mp3" }
];

let currentTrackIndex = 0;

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrack();
});

seekSlider.addEventListener('input', () => {
    audio.currentTime = seekSlider.value * audio.duration / 100;
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

function updateTrack() {
    audio.src = tracks[currentTrackIndex].src;
    trackName.textContent = tracks[currentTrackIndex].name;
    trackArtist.textContent = tracks[currentTrackIndex].artist;
    audio.play();
}