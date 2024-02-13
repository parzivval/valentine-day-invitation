document.getElementById('yessir').addEventListener('click', () => {
    const imageDiv = document.querySelector('.image');
    const header = document.querySelector('h1');

    imageDiv.style.backgroundImage = "url('./img/lovegif.gif')";
    imageDiv.classList.add('image-change-animation');
    header.textContent = "You had no options🤍";
    header.classList.add('text-change-animation');
});

const noButton = document.getElementById('nooo');

function moveButton() {
    const xMove = Math.floor(Math.random() * (window.innerWidth / 10)) - (window.innerWidth / 20);
    const yMove = Math.floor(Math.random() * (window.innerHeight / 10)) - (window.innerHeight / 20);

    noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, {passive: true});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤍';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.style.setProperty('--random', Math.random().toString());
    document.querySelector('.hearts-container').appendChild(heart);

    heart.addEventListener('animationend', function() {
        heart.remove();
    });
}

setInterval(createHeart, 300);
