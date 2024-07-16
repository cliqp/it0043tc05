document.addEventListener('DOMContentLoaded', () => {
    // Typed.js configuration for the dynamic text
    const typed = new Typed('.text', {
        strings: ['Cybersecurity Student', 'Robotics Enthusiast', 'Tech Innovator'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Hamburger menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
