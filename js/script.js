const githubUsername = "Kevinndou15";
const repoCountElement = document.getElementById("repo-count");

fetch(`https://api.github.com/users/${githubUsername}`)
  .then(response => response.json())
  .then(data => {
    const repoCount = data.public_repos;
    repoCountElement.textContent = repoCount;
  })
  .catch(error => {
    console.error("Error fetching GitHub repository count:", error);
  });

