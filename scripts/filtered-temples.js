// RUBRIC 4: Array named "temples" - 7 original + 3 added = 10
const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  // 3 ADDED BY STUDENT - RUBRIC 4 REQUIREMENT
  { templeName: "Abuja Nigeria", location: "Abuja, Nigeria", dedicated: "2006, August, 24", area: 11500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg" },
  { templeName: "Salt Lake Utah", location: "Salt Lake City, Utah", dedicated: "1893, April, 6", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" },
  { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004, January, 11", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" }
];

// RUBRIC 5: Create cards dynamically with all required content + lazy loading
const container = document.getElementById("temples-container");
const title = document.getElementById("page-title");

function display(list) {
  container.innerHTML = "";
  list.forEach(temple => {
    const section = document.createElement("section");
    const h3 = document.createElement("h3");
    const loc = document.createElement("p");
    const ded = document.createElement("p");
    const size = document.createElement("p");
    const img = document.createElement("img");
    h3.textContent = temple.templeName;
    loc.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    ded.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy"; // REQUIRED
    img.width = 400;
    img.height = 250;
    section.append(h3, loc, ded, size, img);
    container.appendChild(section);
  });
}
display(temples);

// RUBRIC 6: Filters
document.getElementById("home").addEventListener("click", e => { e.preventDefault(); title.textContent="Home"; display(temples); });
document.getElementById("old").addEventListener("click", e => { e.preventDefault(); title.textContent="Old Temples"; display(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)); });
document.getElementById("new").addEventListener("click", e => { e.preventDefault(); title.textContent="New Temples"; display(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)); });
document.getElementById("large").addEventListener("click", e => { e.preventDefault(); title.textContent="Large Temples"; display(temples.filter(t => t.area > 90000)); });
document.getElementById("small").addEventListener("click", e => { e.preventDefault(); title.textContent="Small Temples"; display(temples.filter(t => t.area < 10000)); });

// Footer year + lastModified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
// Hamburger
document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("open");
  document.getElementById("menu").classList.toggle("open");
});