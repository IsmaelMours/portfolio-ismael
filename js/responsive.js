// JavaScript to handle menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    closeMenu.style.display = 'block'; // Show the close button
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
    closeMenu.style.display = 'none'; // Hide the close button
});

