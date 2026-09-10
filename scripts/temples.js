// temples.js - W02 Assignment - Hamburger and Footer Dates
// Footer dynamic dates
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModParagraph = document.getElementById('lastModified');
if (lastModParagraph) {
    lastModParagraph.textContent = `Last Modification: ${document.lastModified}`;
}

// Hamburger menu toggle
const hamButton = document.getElementById('menu');
const navigation = document.querySelector('nav');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');

        // Toggle icon between hamburger and X
        if (hamButton.textContent.includes('☰') || hamButton.textContent.includes('≡') || hamButton.textContent.trim() === '☰') {
            hamButton.innerHTML = '&times;';
            hamButton.setAttribute('aria-label', 'Close navigation menu');
        } else {
            // Check for unicode hamburger
            if (hamButton.innerHTML === '×' || hamButton.textContent === '×' || hamButton.classList.contains('open')) {
                // If already X, close it
                if (navigation.classList.contains('open')) {
                    hamButton.innerHTML = '&times;';
                } else {
                    hamButton.innerHTML = '&#9776;';
                    hamButton.setAttribute('aria-label', 'Open navigation menu');
                }
            }
        }

        // Simpler robust toggle
        if (navigation.classList.contains('open')) {
            hamButton.innerHTML = '&times;';
            hamButton.setAttribute('aria-label', 'Close navigation menu');
        } else {
            hamButton.innerHTML = '&#9776;';
            hamButton.setAttribute('aria-label', 'Open navigation menu');
        }
    });
}
