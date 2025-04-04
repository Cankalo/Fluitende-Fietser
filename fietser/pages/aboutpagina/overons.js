document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuDropdown = document.getElementById("menu-dropdown");

    menuIcon.addEventListener("click", function () {
        // Menu controleren
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
