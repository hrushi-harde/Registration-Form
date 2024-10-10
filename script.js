document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const eventInterested = document.getElementById('event').value;

    // Simple validation check
    if (name === "" || email === "" || department === "" || year === "" || eventInterested === "") {
        document.getElementById('message').innerHTML = "<p class='error'>Please fill all required fields.</p>";
    } else {
        document.getElementById('message').innerHTML = "<p class='success'>Registration Successful! Thank you for your interest.</p>";
        // Reset form after submission
        document.getElementById('registrationForm').reset();
    }
});
