// 1. Random Anime Fact Button
document.getElementById("animeButton").addEventListener("click", function() {
    const facts = [
        "Did you know that **Naruto**'s creator, Masashi Kishimoto, originally wanted Naruto to be a comic about a ninja who didn't know any jutsu?",
        "In Japan, it's common to see anime-inspired **bento** lunches, with cute characters made out of rice and vegetables!",
        "The term **otaku** originally meant a person with an obsession, but in Japan, it's now commonly used to describe passionate anime fans.",
        "**Shounen** anime like **One Piece** and **Dragon Ball Z** have become global phenomenons, attracting fans from all around the world!",
        "The first anime, **Namakura Gatana**, was released in Japan in 1917!"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    // Display the fact on the webpage instead of alerting
    const factDisplay = document.getElementById("factDisplay");
    factDisplay.innerHTML = `<p><strong>Random Anime Fact:</strong> ${randomFact}</p>`;
});

// 2. Background Music Controls (play/pause)
const audio = document.getElementById("backgroundMusic");
document.getElementById("playPauseButton").addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        this.textContent = "Pause Music";
    } else {
        audio.pause();
        this.textContent = "Play Music";
    }
});

// 3. Mute/Unmute Button
document.getElementById("muteButton").addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        this.textContent = "Mute";
    } else {
        audio.muted = true;
        this.textContent = "Unmute";
    }
});

// 4. Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

js 