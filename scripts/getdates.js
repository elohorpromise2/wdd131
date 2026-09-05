// WDD131 getdates.js - dynamic footer dates
// Copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified - using document.lastModified string (no formatting needed per assignment)
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
