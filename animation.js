// Sections Reveal Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            const children = entry.target.children;

            Array.from(children).forEach((child, index) => {
                child.style.transitionDelay = `${index * 0.15}s`;
                child.classList.add("show");
            });

        }
        else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));



// Hero Animation

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-hidden");

    setTimeout(() => {
        hero.classList.add("hero-show");
    }, 300);
});


window.addEventListener("load", () => {
    const items = document.querySelectorAll(".hero-item");

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 250);
    });
});



// Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});