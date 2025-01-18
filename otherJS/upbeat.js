// Function to toggle audio player visibility
function toggleAudio(audioId) {
    const audioPlayer = document.getElementById(audioId);

    // Hide other audio players
    document.querySelectorAll(".audio-player").forEach((audio) => {
        if (audio.id !== audioId) {
            audio.style.display = "none";
            audio.pause();
        }
    });

    // Toggle visibility of the selected audio player
    if (audioPlayer.style.display === "block") {
        audioPlayer.style.display = "none";
        audioPlayer.pause();
    } else {
        audioPlayer.style.display = "block";
    }
}