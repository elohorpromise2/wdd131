/* ================================
   ABUJA STREET FOOD EXPLORER
   Main JavaScript
   ================================ */

// Select the navigation elements
const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

// Mobile navigation
function toggleMenu() {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");

    if (isOpen) {
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.textContent = "✕";
    } else {
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
    }
}

// Listen for the menu button click
menuButton.addEventListener("click", toggleMenu);

// Close the mobile menu when a navigation link is selected
function closeMenu() {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.textContent = "☰";
}

const navigationLinks = document.querySelectorAll("#main-nav a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Example food data
const featuredFoods = [
    {
        name: "Suya",
        category: "Grilled",
        description: "Spicy grilled meat served with onions and other local accompaniments."
    },
    {
        name: "Masa",
        category: "Traditional",
        description: "Soft rice cakes that are popular in northern Nigeria."
    },
    {
        name: "Kilishi",
        category: "Dried",
        description: "Thin, dried and seasoned slices of meat with a rich spicy flavor."
    }
];

// Find grilled foods
function getGrilledFoods() {
    return featuredFoods.filter((food) => food.category === "Grilled");
}

// Display a message in the console
function showFeaturedFood() {
    const grilledFoods = getGrilledFoods();

    if (grilledFoods.length > 0) {
        console.log(`Featured grilled food: ${grilledFoods[0].name}`);
    } else {
        console.log(`No grilled foods are currently available.`);
    }
}

showFeaturedFood();

// Food category filter
const filterButtons = document.querySelectorAll(".filter-buttons button");
const foodCards = document.querySelectorAll(".food-card");

function filterFoods(category) {
    foodCards.forEach((card) => {
        const categoryText = card.querySelector("p:last-child").textContent;

        if (category === "All" || categoryText.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;
        filterFoods(selectedCategory);
    });
});

// Recommendation form and localStorage
const foodForm = document.querySelector("#food-form");
const formMessage = document.querySelector("#form-message");
const favoritesList = document.querySelector("#favorites-list");

function getSavedFoods() {
    const savedFoods = localStorage.getItem("abujaFoods");

    if (savedFoods) {
        return JSON.parse(savedFoods);
    }

    return [];
}

function getFavorites() {
    const savedFavorites = localStorage.getItem("abujaFavorites");

    if (savedFavorites) {
        return JSON.parse(savedFavorites);
    }

    return [];
}

function displaySavedFoods() {
    if (!favoritesList) {
        return;
    }

    const savedFoods = getSavedFoods();
    const favorites = getFavorites();

    if (savedFoods.length === 0 && favorites.length === 0) {
        favoritesList.innerHTML = `<p>No favorite foods saved yet.</p>`;
        return;
    }

    let favoriteContent = ``;

    if (favorites.length > 0) {
        favoriteContent += `
            <h3>Foods Saved from the Gallery</h3>
        `;

        favoriteContent += favorites.map((foodName) => `
            <article class="favorite-item">
                <h3>❤️ ${foodName}</h3>
                <p>This food was saved from the Food Gallery.</p>
            </article>
        `).join("");
    }

    if (savedFoods.length > 0) {
        favoriteContent += `
            <h3>My Recommendations</h3>
        `;

        favoriteContent += savedFoods.map((food) => `
            <article class="favorite-item">
                <h3>${food.name}</h3>
                <p><strong>Category:</strong> ${food.category}</p>
                <p><strong>Description:</strong> ${food.description}</p>
                <p><strong>Typical price:</strong> ${food.price}</p>
            </article>
        `).join("");
    }

    favoritesList.innerHTML = favoriteContent;
}

function saveFood(event) {
    event.preventDefault();

    const food = {
        name: document.querySelector("#food-name").value,
        category: document.querySelector("#food-category").value,
        description: document.querySelector("#food-description").value,
        price: document.querySelector("#food-price").value
    };

    const savedFoods = getSavedFoods();

    savedFoods.push(food);

    localStorage.setItem("abujaFoods", JSON.stringify(savedFoods));

    formMessage.innerHTML = `
        Your recommendation for <strong>${food.name}</strong> has been saved successfully!
    `;

    foodForm.reset();

    displaySavedFoods();
}

if (foodForm) {
    foodForm.addEventListener("submit", saveFood);
}

if (favoritesList) {
    displaySavedFoods();
}

// Favorite foods
const favoriteButtons = document.querySelectorAll(".favorite-button");

function saveFavorite(foodName) {
    const favorites = getFavorites();

    if (favorites.includes(foodName)) {
        return false;
    }

    favorites.push(foodName);

    localStorage.setItem("abujaFavorites", JSON.stringify(favorites));

    return true;
}

function handleFavoriteClick(event) {
    const button = event.currentTarget;
    const foodName = button.dataset.food;

    const wasSaved = saveFavorite(foodName);

    if (wasSaved) {
        button.textContent = `❤️ ${foodName} Saved`;
    } else {
        button.textContent = `❤️ ${foodName} Already Saved`;
    }
}

favoriteButtons.forEach((button) => {
    button.addEventListener("click", handleFavoriteClick);
});