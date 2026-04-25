// Navbar component behavior

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
});

function initializeNavbar() {
    const user = getCurrentUser();
    
    if (user) {
        updateNavbarForUser(user);
    }
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileMenuToggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
}

function updateNavbarForUser(user) {
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay) {
        userDisplay.textContent = user.full_name;
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('show');
    }
}
