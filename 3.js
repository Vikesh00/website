function showBirthdayWish() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    // Show an error if the name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Create a personalized birthday message
    const birthdayWish = `Happy Birthday, ${name}! 🎉🎂`;
    
    // Get the wish container and display the message
    const wishMessageElement = document.getElementById('wishMessage');
    const wishContainer = document.getElementById('birthdayWish');
    wishMessageElement.innerText = birthdayWish;

    // Show the wish container with fade-in animation
    wishContainer.style.display = 'block';

    // Trigger fireworks animation
    triggerFireworks();

    // Trigger confetti animation
    triggerConfetti();
}

function triggerFireworks() {
    const fireworksContainer = document.getElementById('fireworksContainer');
    const numFireworks = 5;

    // Create multiple fireworks
    for (let i = 0; i < numFireworks; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Random position for each firework
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        firework.style.left = `${xPos}px`;
        firework.style.top = `${yPos}px`;

        fireworksContainer.appendChild(firework);

        // Remove the firework after the animation completes
        setTimeout(() => {
            firework.remove();
        }, 1000); // Matches the firework animation duration
    }
}

function triggerConfetti() {
    const fireworksContainer = document.getElementById('fireworksContainer');
    const numConfetti = 100;

    // Create confetti elements
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random position and animation delay for each piece of confetti
        const xPos = Math.random() * window.innerWidth;
        const delay = Math.random() * 2;
        confetti.style.left = `${xPos}px`;
        confetti.style.animationDelay = `${delay}s`;

        // Random colors for confetti
        const colors = ['#FF4081', '#FFEB3B', '#4CAF50', '#2196F3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;

        fireworksContainer.appendChild(confetti);
    }
}
