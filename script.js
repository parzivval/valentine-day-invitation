// Your existing JavaScript setup for changing the image and text on 'yessir' click
document.getElementById('yessir').addEventListener('click', () => {
    const imageDiv = document.querySelector('.image');
    const header = document.querySelector('h1');

    imageDiv.style.backgroundImage = "url('./img/lovegif.gif')";
    imageDiv.classList.add('image-change-animation');
    header.textContent = "You had no options🤍";
    header.classList.add('text-change-animation');
});

// Attach animationend listeners directly to elements being animated
document.querySelectorAll('.image-change-animation, .text-change-animation').forEach(el => {
    el.addEventListener('animationend', () => {
        el.classList.remove('image-change-animation', 'text-change-animation');
    });
});

const noButton = document.getElementById('nooo');
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤍'; // Heart emoji
    heart.style.left = `${Math.random() * 100}%`; // Random horizontal start position
    heart.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
    heart.style.animationName = 'float';
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove heart after it floats away
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create a new heart every few seconds
setInterval(createHeart, 300);


function moveButton() {
    const xMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    const yMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

// Apply moveButton for both mouseover and touchstart events
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, {passive: true});
