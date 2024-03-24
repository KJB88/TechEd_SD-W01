/* ON START */

/* Mode Button Setup */
const modeButton = document.getElementById("mode-toggle");
modeButton.addEventListener("click", onThemeChange); // Hook listener

/* Theme Setup */
var currentTheme = getCurrentTheme(); // Assign initial theme
toggleModeButtonLabel(currentTheme); // Assign new label text

// Get/Sets
function getCurrentTheme() {
  return document.querySelector("html").getAttribute("data-theme");
}

function setCurrentTheme(newTheme) {
  document.querySelector("html").setAttribute("data-theme", newTheme);
}

/* THEME */
// Event handler response for 'click'
function onThemeChange() {
  const newTheme = getOppositeTheme(); // Get the opposite theme

  setCurrentTheme(newTheme);
  currentTheme = newTheme; // Update working var

  toggleModeButtonLabel(); // Update label
}

// Get the opposite theme of the current theme
function getOppositeTheme() {
  if (currentTheme === "dark") return "light"; // Return light if dark
  else return "dark"; // Return dark if light
}

// Decide new label text for button
function toggleModeButtonLabel() {
  if (currentTheme === "dark")
    modeButton.textContent = "Dark Mode: ON"; // Apply correct labeling for dark
  else modeButton.textContent = "Light Mode: ON"; // Apply correct labeling for dark
}
