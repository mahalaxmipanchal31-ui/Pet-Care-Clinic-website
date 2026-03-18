// Get form
const form = document.getElementById("appointmentForm");

// When form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    // Get input values
    const name = document.getElementById("name").value;
    const pet = document.getElementById("pet").value;
    const date = document.getElementById("date").value;

    // Show confirmation message
    const message = document.getElementById("message");
    message.innerHTML = "✅ Appointment booked for " + pet + " on " + date + ", Thank you " + name + "!";

    // Clear form
    form.reset();
});
<nav>
    <a href="index.html">Home 🏠</a>
    <a href="about.html">About Us 🐶</a>
    <a href="services.html">Services 🐾</a>
    <a href="contact.html">Contact 📞</a>
</nav>