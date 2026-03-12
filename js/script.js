$(document).ready(function () {
    // Portfolio option buttons
    $(".option.selected").find(".animated-button").addClass("show");

    $(".option").on("click", function () {
        if ($(this).hasClass("selected")) return;
        $(".option").removeClass("selected");
        $(".animated-button").removeClass("show");
        $(this).addClass("selected");
        setTimeout(() => {
            $(this).find(".animated-button").addClass("show");
        }, 200);
    });

    // Navbar toggle
    $('.custom-toggler').on('click', function () {
        $(this).toggleClass('active');               
        $('.navbar-brand').toggleClass('active');    
    });

    // Dynamic copyright
    const startYear = 2026;
    const currentYear = new Date().getFullYear();
    $("#year").text(startYear === currentYear ? startYear : startYear + ' - ' + currentYear);

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: false,
        mirror: false,
    });

    AOS.refresh();

    // ScrollSnap container
    const container = document.querySelector('.portfoliopage');
    container.addEventListener('scroll', () => {
        document.querySelectorAll('.snap-section [data-aos]').forEach(el => {
            const rect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            if (rect.top < containerRect.bottom && rect.bottom > containerRect.top) {
                el.classList.remove('aos-animate');
                void el.offsetWidth;
                el.classList.add('aos-animate');
            }
        });
    });

    document.querySelectorAll(".mySwiper").forEach(function(el){
        new Swiper(el, {
            slidesPerView: "auto",
            spaceBetween: 30,
        });
    });

});
