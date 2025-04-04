document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuDropdown = document.getElementById("menu-dropdown");

    menuIcon.addEventListener("click", function () {
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



// alle cards selecteren
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal'); 
        const modal = document.getElementById(modalId); 
        modal.style.display = 'block'; 
    });
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal'); 
        modal.style.display = 'none'; 
    });
});

window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});



let cart = [];

const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const cartItemsList = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");

cartIcon.addEventListener("click", () => {
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
});

// winkelwagen dicht maken
document.querySelector("#cart-modal .close").addEventListener("click", () => {
    cartModal.style.display = "none";
});

function addToCart(name, price, quantityId, rentalTimeId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    const rentalTime = parseInt(document.getElementById(rentalTimeId).value);
alert("Succesvol opgeslagen in winkelwagen")
    const item = {
        name,
        price,
        quantity,
        rentalTime,
        totalPrice: price * quantity * rentalTime,
    };

    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} (${item.quantity} x ${item.rentalTime} dagen)</span>
            <span>€${item.totalPrice.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(li);

        total += item.totalPrice;
    });

    totalAmount.textContent = total.toFixed(2);
}

// betaal button
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Bedankt voor uw bestelling! Totale bedrag: €" + totalAmount.textContent);
    cart = []; 
    updateCart(); 
});
