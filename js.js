"use strict";

/* ================= SCROLL FLUIDE NAV ================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

/* ================= FORMULAIRE CONTACT ================= */
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const subject = form.querySelectorAll("input")[1].value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Vérification simple
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("❌ Veuillez remplir tous les champs !");
            return;
        }

        if (!email.includes("@")) {
            alert("❌ Email invalide !");
            return;
        }

        alert("✅ Message envoyé avec succès !");

        form.reset();
    });
}

/* ================= ANIMATION APPARITION SCROLL ================= */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.6s ease-out";
    observer.observe(section);
});

/* ================= ACTIVE MENU SCROLL ================= */
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});