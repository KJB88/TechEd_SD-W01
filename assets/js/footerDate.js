/* Footer Date Setup */
setFooterDate(); // Apply Footer Date

/* FOOTER DATE */
// Get the current year and apply it to a human-readable string
function setFooterDate() {
  const footerDateElement = document.getElementById("footer-date"); // Find target element by ID
  const year = new Date().getFullYear(); // Get current year
  const copyrightStr = "MyCraft ©"; // Create prefix
  footerDateElement.textContent = `${copyrightStr} ${year}`; // Concat elements via templating
}
