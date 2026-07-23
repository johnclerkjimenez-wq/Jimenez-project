// Display a message when the page loads
console.log("Welcome to Jimenez Company!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});