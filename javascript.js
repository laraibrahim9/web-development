document.addEventListener('DOMContentLoaded', function () {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let videoBtn = document.querySelectorAll('.vid-btn');
    let reviewSlider = document.querySelector('.review-slider'); 

    window.onscroll = () => {
        console.log('Scroll event triggered');
        if (searchBar) {
            searchBar.classList.remove('fa-times');
            searchBar.classList.remove('active');
        }

        if (menu) {
            menu.classList.remove('fa-times');
        }

        if (navbar) {
            navbar.classList.remove('active');
        }

        if (loginForm) {
            loginForm.classList.remove('active');
        }
    }

    let formBtn = document.querySelector('#login-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchBar) {
                searchBar.classList.toggle('active');
            }
        });
    }

    if (formBtn) {
        console.log('formBtn found:', formBtn);
        formBtn.addEventListener('click', () => {
            if (loginForm) {
                loginForm.classList.add('active');
            }
        });
    } else {
        console.log('formBtn not found');
    }

    if (formClose) {
        formClose.addEventListener('click', () => {
            if (loginForm) {
                loginForm.classList.remove('active');
            }
        });
    }

    
    var swiper = new Swiper('.review-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    let menuBtn = document.querySelector('#menu-bar');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }
});


    
