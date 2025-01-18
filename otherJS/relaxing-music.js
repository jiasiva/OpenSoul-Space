function playSound(id) {
    const audio = document.getElementById(`${id}-sound`);
    if (audio) {
        audio.play();
    }
}

function pauseSound(id) {
    const audio = document.getElementById(`${id}-sound`);
    if (audio) {
        audio.pause();
    }
}
