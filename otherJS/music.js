const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    alert('Playing sounds...');
});

const soundButtons = document.querySelectorAll('.sounds button');
soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Playing ${button.textContent} sound...`);
    });
});

const instrumentalButtons = document.querySelectorAll('.instrumental button');
instrumentalButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Playing ${button.textContent} instrumental...`);
    });
});

const storyButtons = document.querySelectorAll('.motivational button');
storyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`Playing ${button.textContent} story...`);
    });
});
