// Initialize EmailJS
(function () {
    emailjs.init("yGDjhZQ_xtfCycVqT"); // Your Public Key
})();

// Form submit event
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm(
                "service_4gfl1ek",  // Replace with your EmailJS Service ID
                "template_gq7p8fq", // Replace with your EmailJS Template ID
                this
            )
                .then(function () {
                    alert("✅ Message sent successfully!");
                    contactForm.reset();
                })
                .catch(function (error) {
                    alert("❌ Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                });
        });
    }
});
