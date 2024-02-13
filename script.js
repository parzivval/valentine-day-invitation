document.getElementById('yessir').addEventListener('click', () => {
    // Get the elements
    const imageDiv = document.querySelector('.image');
    const header = document.querySelector('h1');

    // Update the image with animation
    imageDiv.style.backgroundImage = "url('./img/lovegif.gif')";
    imageDiv.classList.add('image-change-animation');

    // Change the h1 text with animation
    header.textContent = "Я не сомневался в твоем правильном выборе🤍";
    header.classList.add('text-change-animation');
});

// Optional: Remove the animation class after it's done to reset the state
document.getElementById('yessir').addEventListener('animationend', () => {
  document.querySelector('h1').classList.remove('text-change-animation');
  document.querySelector('.image').classList.remove('image-change-animation');
});


document.getElementById('nooo').addEventListener('mouseover', () => {
    // Increase the range for further movement
    const xMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    const yMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    // Use transform for smoother and faster animation
    document.getElementById('nooo').style.transform = `translate(${xMove}px, ${yMove}px)`;
});
