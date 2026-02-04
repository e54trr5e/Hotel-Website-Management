 document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();

            let name = document.getElementById("name").value;

            alert("Thank you " + name + "! Your message has been submitted.");

            this.reset();
        });

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! We will contact you soon.");

    this.reset();
});

function menutoggle() {
    const nav = document.querySelector(".open ul");
    nav.classList.toggle("show");
}