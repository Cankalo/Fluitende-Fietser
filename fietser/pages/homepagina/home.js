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



let slideIndex = 0;
let slideInterval;  

showSlides();

startAutoSlide();

function plusSlides(n) {
    clearInterval(slideInterval); 
    slideIndex += n;
    showSlides();
    startAutoSlide(); 
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    if (slideIndex >= slides.length) { slideIndex = 0; }  
    if (slideIndex < 0) { slideIndex = slides.length - 1; } 

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex].style.display = "block"; 
}


function startAutoSlide() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides();
    }, 5000); 
}

function loadWelcomeMessage() {
    fetch('./welkomsttekst.txt') 
        .then(response => response.text())
        .then(text => {
            document.getElementById('welcome-message').textContent = text;
        })
        .catch(error => console.error('fout:', error));
}
function updateOpeningHoursNotification() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (zondag) - 6 (zaterdag)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; 


    const openingTime = 9 * 60; // 09:00
    const closingTime = 17 * 60; // 17:00
    const isOpen = (dayOfWeek >= 1 && dayOfWeek <= 5) && currentTime >= openingTime && currentTime < closingTime;

    const notificationElement = document.getElementById('opening-hours-notification');
    if (isOpen) {
        notificationElement.textContent = 'Wij zijn nu open!';
        notificationElement.classList.remove('closed');
    } else {
        notificationElement.textContent = 'Wij zijn momenteel gesloten.';
        notificationElement.classList.add('closed');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadWelcomeMessage();
    updateOpeningHoursNotification();

    // elke minuut updatee
    setInterval(updateOpeningHoursNotification, 600);
});