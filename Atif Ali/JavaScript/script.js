// Load navbar and footer on all pages
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            
            // Mobile menu toggle functionality
            const navBtn = document.querySelector('.navbar-toggler');
            const navDiv = document.querySelector('.navbar-collapse');
            
            if(navBtn && navDiv) {
                navBtn.addEventListener('click', () => {
                    navDiv.classList.toggle('showNav');
                    
                    // Toggle hamburger animation
                    navBtn.classList.toggle("open");
                });
            }
            
            // Highlight current page in navbar
            const currentPage = location.pathname.split('/').pop();
            const navItems = document.querySelectorAll('.navbar-item');
            
            navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                if(link.getAttribute('href') === currentPage) {
                    item.classList.add('nav-active');
                } else {
                    item.classList.remove('nav-active');
                }
            });
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// Stopping Animation and Transition During Window Resizing 
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});