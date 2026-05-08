// Hamburger Animation

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Mobile Card Touch Animation

const mobileCards = document.querySelectorAll(".card");

mobileCards.forEach(card => {

    card.addEventListener("touchstart", () => {
        card.style.transform = "scale(0.97)";
        card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("touchend", () => {
        card.style.transform = "scale(1)";
    });

});



// Mobile Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".section, .card, .project-card, .skill-card"
);

revealElements.forEach(el => {
    el.classList.add("reveal-mobile");
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});