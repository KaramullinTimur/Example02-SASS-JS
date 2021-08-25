let nav = document.querySelector('.header-nav-list');
let hamburger = document.querySelector('.hamburger');
let close_button = document.querySelector('.button-close');

// When hamburger button is clicked
hamburger.addEventListener('click', () => {
    // Hide humburger 
    hamburger.classList.remove('hamburger_shown')
    hamburger.classList.add('hamburger_hidden')

    // Show navigation list
    nav.classList.remove('header-nav-list_hidden')
    nav.classList.add('header-nav-list_shown')

    // Disable scrolling
    document.body.classList.add('overflow-hidden')
})

// When close button is clicked
close_button.addEventListener('click', () => {
    // Show hamburger
    hamburger.classList.add('hamburger_shown')
    hamburger.classList.remove('hamburger_hidden')

    // Hide navigation list
    nav.classList.add('header-nav-list_hidden')
    nav.classList.remove('header-nav-list_shown')

    // Enable scrolling
    document.body.classList.remove('overflow-hidden')
})