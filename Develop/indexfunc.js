const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "userName",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "userLocation",
    },
    {
      type: "input",
      message: "Enter your bio",
      name: "userBio",
    },
    {
      type: "input",
      message: "Enter your GitHub URL",
      name: "gitHubURL",
    },
    {
      type: "input",
      message: "Enter your LinkedIn URL",
      name: "linkedInURL",
    },
  ])
  .then((response) => {
    // const finalStr =  `
    // Name: ${response.userName}
    // Location: ${response.userLocation}
    // Bio: ${response.userBio}
    // LinkedIn: ${response.linkedInURL}
    // GitHub: ${response.gitHubURL}
    // `
    const html = generateHTML(response);
    fs.writeFile("index.html", html, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });

function generateHTML(response) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./style.css" />
  <!-- link to bootstrap -->
  <title>Document</title>
</head>
<body>
  <header>
    <div class="container-fluid row text-center">
      <div class="d-flex cloumn justify-content-center">
        <h1>Name: ${response.userName}</h1>
       </div>
    </div>
  </header>

  <div class="row">
    <div class="col-sm-4 mb-3 mb-sm-0 text-center">
      <p>Location: ${response.userLocation}</p>
      <p>Bio: ${response.userBio}</p>
      <ul>
        <li><a href="${response.linkedInURL}" target="_blank">GitHub</a></li>
        <li><a href="${response.linkedInURL}" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  </div>
</body>
</html>
`;
}
