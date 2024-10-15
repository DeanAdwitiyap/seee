document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting immediately

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('messageResponse').textContent = "Thank you for your message, " + name + "!";
        this.submit(); // Submit the form
    } else {
        document.getElementById('messageResponse').textContent = "Please fill out all fields.";
    }
});
