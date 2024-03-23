// Apply Footer Date
const footerDate = document.getElementById("footer-date");
footerDate.textContent = new Date().getFullYear(); // Get current year

// Mode Button setup
const modeButton = document.getElementById("mode-toggle");
modeButton.addEventListener("click", onThemeChange); // Hook listener

// Brightness Slider setup
const brightnessSlider = document.getElementById("brightness-slider");
brightnessSlider.addEventListener("input", onBrightnessSliderChange);
const brightnessDescriptor = document.getElementById("slider-descriptor");
brightnessSlider.value = 100; // Quick fix to apply default value; use browser local data for future
setBrightnessDescriptorText(brightnessSlider.value);

// Assign initial theme
var currentTheme = document.querySelector("html").getAttribute("data-theme");
modeButton.textContent = configureNewButtonLabel(currentTheme);

function onThemeChange() {
  const newTheme = isThemeDark();

  document.querySelector("html").setAttribute("data-theme", newTheme); // Update html attribute
  currentTheme = newTheme; // Update working var

  const newText = configureNewButtonLabel(currentTheme);
  modeButton.textContent = newText; // Assign new label text
}

// Decide new label text for button
function configureNewButtonLabel(themeName) {
  if (currentTheme == "dark") return "Dark Mode: ON";
  else return "Light Mode: ON";
}

// Is the theme currently dark or light?
function isThemeDark(newTheme) {
  if (currentTheme == "dark") return "light";
  else return "dark";
}

function onBrightnessSliderChange() {
  const newVal = this.value;

  var body = document.querySelector("body");
  body.style.filter = `brightness(${newVal}%)`;

  setBrightnessDescriptorText(newVal);
}

function setBrightnessDescriptorText(value) {
  brightnessDescriptor.textContent = `${value}%`;
}
