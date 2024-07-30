document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.navbar-menu li a');
    const menu = document.querySelector('.navbar-menu');
    const toggleButton = document.querySelector('.navbar-toggle');

    // Smooth scroll behavior for links
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });

            // Close the navbar menu on smaller screens
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });

    // Toggle menu button functionality
    toggleButton.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
});
