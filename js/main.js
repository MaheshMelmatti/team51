// main.js - Entry point
console.log("Team 51 App Loaded");

function loadApp() {
  const app = document.getElementById("app");
  app.innerHTML = "<p>App is running!</p>";
}

window.onload = loadApp;
