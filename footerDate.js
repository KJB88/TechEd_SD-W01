const footerDate = document.getElementById('footer-date');
const copyrightName = 'MeinHandwerk © ';
const currentYear = new Date().getFullYear();

let dateString = `${copyrightName} ${currentYear}` 
footerDate.textContent = dateString;