// Loader
window.addEventListener('load', function (event) {
    const loader = document.querySelector('.loader');
    const landing = document.querySelector('#home');
    if (event.target.readyState === 'complete') {
      setTimeout(function () {
        loader.style.opacity = '0';
        loader.style.display = 'none';
        setTimeout(function name(params) {
          landing.style.opacity = '1';
        }, 1000);
      }, 3000);
    }
});

// Hamburger menu

// Variables for the myFunction hamburger menu function
const navBar = document.querySelector('#navBar')
const toggler = document.querySelector('.toggler')

// Hamburger Mobile Menu function
function myFunction() {
    
    if (navBar.className === "flex-list") {
        // adds the class "menu" which reveals the nav list items"
        navBar.className += " menu";

        // Switches the hamburger icon with the close icon
        toggler.innerHTML = '<i class="fas fa-times"></i>';
        
    } else {
        navBar.className = "flex-list";
        toggler.innerHTML = '<i class="fas fa-bars"></i>';
    }
}