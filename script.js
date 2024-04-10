// Function to check if page is scroled and ajust LOGO
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)

    //  Add / Remove scroled class based on position
    if (scrollPosition > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Calculate new font size on scroll
    let newSize = 3 - (scrollPosition * 0.03);

    // Clamping the font size between 1.5 and 3 rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}
// Add event listener for scroll
window.addEventListener('scroll', checkScroll);