cat > js/auth.js << 'EOF'
const API = "http://localhost:4000/api";

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        email: email.value,
        password: password.value
    };

    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");

        if (data.role === "faculty") location.href = "faculty.html";
        else location.href = "submit.html";
    }
    else alert(data.error);
});

// REGISTER
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value
    };

    const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data._id) {
        alert("Registered Successfully!");
        location.href = "login.html";
    }
    else alert(data.error);
});
EOF
