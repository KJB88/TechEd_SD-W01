// Handle Footer Dating
const footerDate = document.getElementById("footer-date");
footerDate.textContent = new Date().getFullYear();

// Handle Button onClick
const modeButton = document.getElementById("mode-toggle");
let currentTheme;
modeButton.addEventListener("click", onThemeChange);

function onThemeChange() {
  const newTheme = isThemeDark();

  const newText = getNewModeButtonLetter(newTheme);

  modeButton.textContent = newText;
  document.querySelector("html").setAttribute("data-theme", newTheme);
  currentTheme = newTheme;
}

function getNewModeButtonLetter(themeName) {
  return currentTheme === "dark" ? "D" : "L";
}

function isThemeDark() {
  return currentTheme === "dark" ? "light" : "dark";
}
