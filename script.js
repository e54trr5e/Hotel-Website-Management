// Mobile Menu Toggle
function menutoggle() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Close mobile menu when clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.getElementById("navLinks");
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});

// Single Contact Form Submission Handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received. We will contact you soon.`);
            this.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Live Menu Search Filter
const menuSearch = document.getElementById("menuSearch");
if (menuSearch) {
    menuSearch.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        const menuCards = document.querySelectorAll(".menu-card");

        menuCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Gallery Lightbox Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Booking Modal Logic
const bookingModal = document.getElementById("bookingModal");
const closeBookingBtn = document.querySelector(".close-booking");
const bookingForm = document.getElementById("bookingForm");

// Target all "Book Now" buttons
document.querySelectorAll("button").forEach(button => {
    if (button.textContent.trim().toLowerCase() === "book now") {
        button.addEventListener("click", () => {
            bookingModal.style.display = "flex";
        });
    }
});

// Close Modal on Close Button Click
if (closeBookingBtn) {
    closeBookingBtn.addEventListener("click", () => {
        bookingModal.style.display = "none";
    });
}

// Close Modal when clicking outside the content box
window.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
        bookingModal.style.display = "none";
    }
});

// Handle Booking Form Submission
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const guestName = document.getElementById("bookName").value;
        const checkIn = document.getElementById("checkIn").value;
        const roomType = document.getElementById("roomType").value;

        alert(`Thank you, ${guestName}! Your reservation for a ${roomType} starting ${checkIn} has been received.`);
        
        this.reset();
        bookingModal.style.display = "none";
    });
}

// Hero Section Typing Effect & Read More Toggle
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hotelName");
    const readMoreBtn = document.querySelector(".read_more .first");
    const extraContent = document.getElementById("extraContent");

    // Dynamic Typing Effect for Hero Title
    if (heroTitle) {
        const fullText = "Spend Your Holiday";
        heroTitle.textContent = "";
        let index = 0;

        function typeText() {
            if (index < fullText.length) {
                heroTitle.textContent += fullText.charAt(index);
                index++;
                setTimeout(typeText, 90);
            }
        }
        typeText();
    }

    // Interactive Read More Button Logic
    if (readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
            if (extraContent) {
                const isHidden = extraContent.style.display === "none" || extraContent.style.display === "";
                
                extraContent.style.display = isHidden ? "block" : "none";
                readMoreBtn.textContent = isHidden ? "READ LESS" : "READ MORE";
            } else {
                // Fallback smooth scroll to About section
                const aboutSection = document.querySelector(".about");
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    }
});