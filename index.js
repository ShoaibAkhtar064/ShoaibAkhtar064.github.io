const projectsContainer = document.getElementById("projects");

fetch("https://api.github.com/users/ShoaibAkhtar064/repos")
  .then((response) => response.json())
  .then((repos) => {

    const selectedRepos = repos.filter(
  (repo) =>
    repo.name === "mood-app" ||
    repo.name === "My-Portfolio" ||
    repo.name === "About-me-HTML"
);

selectedRepos.forEach((repo) => {

      const project = document.createElement("div");

      project.innerHTML = `
        <h2 class="heading">${repo.name}</h2>
        <p>${repo.description || "No description available."}</p>
        <a class="link" href="${repo.html_url}" target="_blank">
          View on GitHub
        </a>
      `;

      projectsContainer.appendChild(project);
    });
  })
  .catch((error) => {
    projectsContainer.innerHTML = "<p>Unable to load projects.</p>";
    console.error(error);
  });