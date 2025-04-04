document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuDropdown = document.getElementById("menu-dropdown");

    menuIcon.addEventListener("click", function () {
        // Menu
        if (menuDropdown.classList.contains("active")) {
            menuDropdown.classList.remove("active"); 
        } else {
            menuDropdown.classList.add("active"); 
        }
    });

    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove("active");
        }
    });
});


document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    if (searchInput.includes('fietsen')) {
        window.location.href = '/fietser/pages/fietsenpagina/index.html'; // Fietsen sayfasına yönlendir
    } else if (searchInput.includes('verhuur')) {
        window.location.href = '/fietser/pages/verhuurpagina/verhuur.html'; // Verhuur sayfasına yönlendir
    } else if (searchInput.includes('contact')) {
        window.location.href = '/fietser/pages/contactpagina/index.html'; // Contact sayfasına yönlendir
    } else if (searchInput.includes('over ons') || searchInput.includes('about')) {
        window.location.href = '/fietser/pages/aboutpagina/index.html'; // Over Ons sayfasına yönlendir
    }
    else if (searchInput.includes('home')){
        window.location.href = '/fietser/pages/homepagina/index.html';
    }
    else {
        alert('Het pagina is niet gevonden');
    } 
});




const bikes = [
    { name: "Fiets 1", gender: "Man", driveType: "Ketting", price: "€10", image: "img/Gazelle_CityGo_C7.jpg" },
    { name: "Fiets 2", gender: "Vrouw", driveType: "Riems", price: "€12", image: "img/Gazelle_Orange_C7.jpg" },
    { name: "Fiets 3", gender: "Unisex", driveType: "Ketting", price: "€15", image: "img/Pelikaan_Carry_On_Lady.jpg" },
    { name: "Fiets 4", gender: "Unisex", driveType: "Ketting", price: "€25", image: "img/Stella_Allegra_voorwielmotor.jpg" }
];

function submitSelection() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert("Selecteer minimaal één fiets.");
        return;
    }

    const selectedBikes = Array.from(checkboxes).map(cb => bikes.find(b => b.name === cb.value));

    const selectedBikesContainer = document.getElementById('selected-bikes');
    selectedBikesContainer.innerHTML = ''; // temizleme previous

    selectedBikes.forEach(bike => {
        const bikeCard = document.createElement('div');
        bikeCard.className = 'selected-bike-card';
        bikeCard.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}">
            <p><strong>Fietsnaam:</strong> ${bike.name}</p>
            <p><strong>Geslacht:</strong> ${bike.gender}</p>
            <p><strong>Aandrijvingstype:</strong> ${bike.driveType}</p>
            <p><strong>Prijs:</strong> ${bike.price}</p>
        `;
        selectedBikesContainer.appendChild(bikeCard);
    });

    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('details-screen').classList.remove('hidden');
}

function submitDetails() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;

    if (!name || !email || !address || !city || !zipcode) {
        alert("Vul alle velden in.");
        return;
    }

    document.getElementById('confirmation-message').classList.remove('hidden');
}