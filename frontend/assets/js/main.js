// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('Resostu app initialized');
    
    // Check authentication
    checkAuth();
    
    // Initialize components
    initializeSidebar();
    initializeMobileMenu();
});

function checkAuth() {
    const token = localStorage.getItem('token');
    const currentPath = window.location.pathname;
    
    // Public pages that don't require authentication
    const publicPages = ['/', '/index.html', '/login.html', '/register.html'];
    
    if (!token && !publicPages.some(page => currentPath.includes(page))) {
        window.location.href = '/login.html';
    }
}

function initializeSidebar() {
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    const currentPath = window.location.pathname;
    
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }
}
