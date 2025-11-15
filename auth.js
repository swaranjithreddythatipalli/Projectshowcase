document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (so the page doesn't refresh)
    event.preventDefault();

    // 2. Get the values from the input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 3. Simple Validation Checks
    if (email === "" || password === "") {
        alert("Please fill out both email and password fields.");
        return;
    }

    // Basic email format check (using a simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // 4. If all checks pass, you would normally send the data to a server
    console.log("Login attempt successful (Client-side validation passed):");
    console.log("Email:", email);
    
    // Placeholder for actual login logic (e.g., using fetch to call an API)
    // alert("Logging in..."); 
    
    // In a real application, you would add your server communication logic here
});