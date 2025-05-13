(function ($) {
    

    "use strict";
    
    
    
    AOS.init();
    
    
    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    document.addEventListener("DOMContentLoaded", function () {
        const backToTopButton = document.querySelector(".back-to-top");

        // Mostrar el botón cuando el usuario hace scroll hacia abajo
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "flex"; // Mostrar el botón
            } else {
                backToTopButton.style.display = "none"; // Ocultar el botón
            }
        });

        // Desplazarse hacia arriba al hacer clic en el botón
        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Desplazamiento suave
            });
        });
    });


    // Facts counter
     $('[data-toggle="counter-up"]').counterUp({
         delay: 10,
         time: 2000
    });
    

    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


})(jQuery);



