// Sidebar component behavior

document.addEventListener('DOMContentLoaded', () => {
    initializeSidebarComponent();
});

function initializeSidebarComponent() {
    highlightActivePage();
    setupSidebarToggle();
}

function highlightActivePage() {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    
    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}

function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
}

function collapseSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('collapsed');
    }
}

function expandSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.remove('collapsed');
    }
}
