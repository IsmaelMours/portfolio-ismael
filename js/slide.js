const cards = document.querySelectorAll('.card');
const cardsPerPage = window.innerWidth <= 768 ? 1 : 3; // 1 card on mobile, 3 on larger screens
let currentPage = 1;
const totalPages = Math.ceil(cards.length / cardsPerPage);

// Function to display the cards for the current page
function displayCards() {
    // Hide all cards
    cards.forEach((card, index) => {
        card.style.display = 'none';
        if (index >= (currentPage - 1) * cardsPerPage && index < currentPage * cardsPerPage) {
            card.style.display = 'block'; // Show cards for the current page
        }
    });

    // Update pagination info
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
}

// Function to handle pagination
function handlePagination() {
    document.getElementById('prev-button').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards();
        }
    });

    document.getElementById('next-button').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayCards();
        }
    });

    displayCards(); // Initial display
}

// Initialize pagination
handlePagination();

// Update pagination when the window is resized
window.addEventListener('resize', () => {
    const newCardsPerPage = window.innerWidth <= 768 ? 1 : 3;
    if (newCardsPerPage !== cardsPerPage) {
        currentPage = 1; // Reset to first page on resize
        cardsPerPage = newCardsPerPage; // Update cards per page
        displayCards(); // Refresh the card display
    }
});
