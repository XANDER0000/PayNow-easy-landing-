document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.intro');
    const header = document.querySelector('.header')
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;

        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation');
            } else {
                el.classList.remove('animation');
            }
        });
    };

    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let heroCenter = hero.offsetHeight / 2;

        if (scrollTop >= heroCenter) {
            header.classList.add('fixed');
            hero.style.margin.Top = `${header.offsetHeight}px`;
        } else {
            header.classList.remove('fixed');
            hero.style.marginTop = `0px`;
        }
    };

    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
        scrollAnimation();
    });
});

const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

});

/* Smooth Scroll =========================*/

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  nav.removeClass("show");

  $("html, body").animate ({
      scrollTop: elementOffset - 110
  }, 600);
});