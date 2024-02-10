document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('body');

    for (let i = 0; i < 50; i++) { // Creates 50 hearts
        let heart = document.createElement('div');
        heart.textContent = '❤';
        heart.style.position = 'absolute';
        heart.style.color = 'pink';
        heart.style.fontSize = `${Math.random() * 24 + 10}px`; // Between 10px to 34px
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 5 to 10 seconds
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.zIndex = -1;
        heart.style.setProperty('--direction', Math.random() < 0.5 ? -1 : 1);

        container.appendChild(heart);
        heart.className = 'heart';
    }
});
