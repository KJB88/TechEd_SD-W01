/* Audio Library of tracks 
TODO: Use mediaSession to get metadata if possible.
*/
let audioLibrary = [
  {
    title: "Fellowship",
    artist: "Stellarnaut",
    path: "./assets/audio/fellowship_by_stellarnaut.mp3",
  },
  {
    title: "CDA1",
    artist: "SpadeStars",
    path: "./assets/audio/cda1_by_spadestars.mp3",
  },
];

var currentTrackIndex = 0; // Current audio track playing

var audioPlayer = document.getElementById("audio-player"); // Get Audio Player
audioPlayer.addEventListener("ended", nextTrack); // Hook in event
initAudioPlayer(); // Initialize audio player

var audioLabel = document.getElementById("audio-label"); // Get audio label
updateAudioLabel(); // Populate audio label

// Set the initial source of the audio player (also doable within the html tag)
function initAudioPlayer() {
  audioPlayer.src = audioLibrary[currentTrackIndex].path;
}

// Update the audio label to reflect the current track
function updateAudioLabel() {
  audioLabel.textContent = `Playing: ${audioLibrary[currentTrackIndex].title} by ${audioLibrary[currentTrackIndex].artist}`;
}

// Play the next track in the library
function nextTrack() {
  currentTrackIndex++; // Increment track index
  if (currentTrackIndex >= audioLibrary.length) currentTrackIndex = 0; // Wrap to avoid overflow

  audioPlayer.src = audioLibrary[currentTrackIndex].path; // Set new path
  updateAudioLabel(); // Update label
}
