// Function to check window size and hide/show the element
function checkWindowSize() {
    const elementToHide = document.getElementById('Logo');
    const NavBar = document.getElementById('NavIcons');
    if (window.innerWidth < 590) { // You can change 600 to your desired window size
        elementToHide.style.display = 'none'; // Hide the element
        NavBar.style.left = '5%';
    } else {
        elementToHide.style.display = 'flex'; // Show the element
        NavBar.style.left = '0px';
    }
}

// Initial check when the page loads
window.addEventListener('load', checkWindowSize);

// Check window size whenever the window is resized
window.addEventListener('resize', checkWindowSize);
