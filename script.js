
const stars = document.getElementById("stars");

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");

        star.classList.add("star");
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}

createStars();

// Elementos principales
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const continueButton = document.getElementById("continue");
const gallery = document.getElementById("gallery");
const finalMessage = document.getElementById("final");
const showFinal = document.getElementById("showFinal");

// Música
const musica = document.getElementById("musica");
musica.volume = 0.35;

// Primer botón: abrir carta y reproducir música
openLetter.addEventListener("click", async () => {

    try {
        await musica.play();
        console.log("¡Luis Miguel está sonando! 🎵");
    } catch (error) {
        console.error("Error al reproducir la música:", error);
    }

    letter.classList.remove("hidden");
    openLetter.style.display = "none";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Segundo botón: mostrar galería con fotografías animadas
continueButton.addEventListener("click", () => {

    gallery.classList.remove("hidden");
    continueButton.style.display = "none";

    const photos = document.querySelectorAll(".photo-card");

    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add("show-photo");
        }, index * 450);
    });

    gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Efectos finales
function createFinalEffects() {

    // Estrellas fugaces
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const star = document.createElement("div");

            star.className = "shooting-star";
            star.style.top = Math.random() * 60 + "%";

            document.body.appendChild(star);

            setTimeout(() => star.remove(), 2200);

        }, i * 700);
    }

    // Corazones flotantes
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");

            heart.className = "floating-heart";
            heart.textContent = "💚";
            heart.style.left = Math.random() * 100 + "%";

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);

        }, i * 250);
    }
}

// Tercer botón: mostrar mensaje final
showFinal.addEventListener("click", () => {

    finalMessage.classList.remove("hidden");

    createFinalEffects();

    showFinal.style.display = "none";

    finalMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Luna interactiva
const moon = document.getElementById("moon");
const moonMessage = document.getElementById("moonMessage");

moon.addEventListener("click", () => {

    moonMessage.classList.toggle("hidden");

    moon.style.transform = "scale(1.2)";

    setTimeout(() => {
        moon.style.transform = "";
    }, 600);
});

// Ampliar fotografías (lupa)
const photoModal = document.getElementById("photoModal");
const expandedPhoto = document.getElementById("expandedPhoto");
const photoCaption = document.getElementById("photoCaption");
const closePhoto = document.getElementById("closePhoto");

document.querySelectorAll(".photo-card img").forEach(photo => {

    photo.addEventListener("click", () => {

        const card = photo.closest(".photo-card");
        const caption = card.querySelector("p");

        expandedPhoto.src = photo.src;
        expandedPhoto.alt = photo.alt;
        photoCaption.textContent = caption.textContent;

        photoModal.classList.remove("hidden");
    });
});

closePhoto.addEventListener("click", () => {
    photoModal.classList.add("hidden");
    expandedPhoto.src = "";
});

photoModal.addEventListener("click", (event) => {
    if (event.target === photoModal) {
        photoModal.classList.add("hidden");
        expandedPhoto.src = "";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        photoModal.classList.add("hidden");
        expandedPhoto.src = "";
    }
});
