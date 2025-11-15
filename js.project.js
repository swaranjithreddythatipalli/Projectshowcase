cat > js/projects.js << 'EOF'
const API = "http://localhost:4000/api";

// LOAD ALL PROJECTS
if (document.getElementById("projectList")) loadProjects();

async function loadProjects() {
    const res = await fetch(`${API}/projects`);
    const list = await res.json();

    const container = document.getElementById("projectList");
    container.innerHTML = "";

    list.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.screenshotPath}" width="100%">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <a href="${p.githubLink}" target="_blank">GitHub</a>
            </div>`;
    });
}

// SUBMIT PROJECT
document.getElementById("projectForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const payload = {
        title: title.value,
        description: description.value,
        technologies: technologies.value.split(","),
        githubLink: githubLink.value,
        screenshotPath: screenshotPath.value
    };

    const res = await fetch(`${API}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data._id) {
        alert("Project Submitted!");
        location.href = "index.html";
    }
});
EOF
