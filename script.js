// Generate subtle stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Twinkle animation
        const twinkleDuration = Math.random() * 3 + 2;
        const twinkeDelay = Math.random() * 4;
        star.style.animation = `twinkle ${twinkleDuration}s infinite ${twinkeDelay}s`;

        // Drift animation
        const driftDuration = Math.random() * 20 + 20;
        const driftDelay = Math.random() * 10;
        star.style.animation += `, drift ${driftDuration}s infinite ${driftDelay}s linear`;

        star.style.opacity = Math.random() * 0.5 + 0.2;
        starsContainer.appendChild(star);
    }
}

generateStars();

// Set dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
