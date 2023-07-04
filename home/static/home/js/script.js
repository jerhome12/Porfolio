
// https://scrollrevealjs.org/guide/hello-world.html scroll reveal
ScrollReveal({
reset: true,
distance: '60px',
duration: 2500,
delay: 400
});

// Home
ScrollReveal().reveal('.banner_wrapper .banner-content', {
    delay: 500,
    beforeReveal: (el) => {
        el.style.opacity = 1;
    }
});

ScrollReveal().reveal('.banner_wrapper img', {
    delay: 500,
    beforeReveal: (el) => {
        el.style.opacity = 1;
    }
});

// about
ScrollReveal().reveal('.about_wrapper .about_icon', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about_wrapper .about1', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about_wrapper .about2', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about_wrapper .about3', { delay: 700, origin: 'right' });

// services
ScrollReveal().reveal('.services_wrapper .services1', { delay: 600, origin:'top' });
ScrollReveal().reveal('.services_wrapper .services2', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.services_wrapper .services3', { delay: 800, origin: 'center' });
ScrollReveal().reveal('.services_wrapper .services4', { delay: 900, origin: 'center' });
ScrollReveal().reveal('.services_wrapper .services5', { delay: 1000, origin: 'center' });
ScrollReveal().reveal('.services_wrapper .services6', { delay: 1100, origin: 'center' });

// contact
ScrollReveal().reveal('.footer_wrapper .contact1', { delay: 600, origin:'top' });
ScrollReveal().reveal('.footer_wrapper .contact2', { delay: 800, origin: 'top' });
ScrollReveal().reveal('.footer_wrapper .contact3', { delay: 1000, origin: 'top' });

// footer
ScrollReveal().reveal('.footer_wrapper .footer1', { delay: 1100, origin: 'top' });
ScrollReveal().reveal('.footer_wrapper .footer2', { delay: 1200, origin: 'top' });
ScrollReveal().reveal('.footer_wrapper .footer3', { delay: 1300, origin: 'top' });


// Addingg white bg when scroll down
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// on mobile size when click links menu hide it
let navBar =  document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})


