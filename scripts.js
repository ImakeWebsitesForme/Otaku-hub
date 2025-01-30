document.getElementById("animeButton").addEventListener("click", function() {
    const facts = [
        "Did you know that **Naruto**'s! creator, Masashi Kishimoto, originally wanted Naruto to be a comic about a ninja who didn't know any jutsu?",
        "In Japan, it's common to see anime-inspired **bento** lunches, with cute characters made out of rice and vegetables!",
        "The term **otaku** originally meant a person with an obsession, but in Japan, it's now commonly used to describe passionate anime fans.",
        "**Shounen** anime like **One Piece** and **Dragon Ball Z** have become global phenomenons, attracting fans from all around the world!",
        "The first anime, **Namakura Gatana**, was released in Japan in 1917!"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
});

document.getElementById("backgroundMusic").play();  // Automatically start playing music