(function() {
    // preloader
    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut(2000);
    });

    // navbar dropdown
    $('html').on('click', function() {
        $('.nav-item.dropdown').find('.dropdown-menu').slideUp();
    });
    $('.nav-link.dropdown-toggle').on('click', function() {
        $('.nav-item.dropdown').find('.dropdown-menu').slideUp();

        if($(this).parent().hasClass('show')) {
            $(this).parent().find('.dropdown-menu').slideUp();
        }else{
            $(this).parent().find('.dropdown-menu').slideDown();
        }
    });

    // navbar slide
    $('.navbar-button-toggle').on('click', function() {
        $('.navbar-collapse').animate({
            'right': '0'
        }, 1500);

        $('.navbar-collapse').addClass('sidebar-shadow');
    });
    $('.navbar-side-close').on('click', function() {
        $('.navbar-collapse').animate({
            'right': '-280px'
        }, 1500);
        $('.navbar-collapse').removeClass('sidebar-shadow');
    });

    // package carousel
    $('#packageCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // testimonial carousel
    $('#testimonialCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // gallery carousel
    $('#galleryCarousel').owlCarousel({
        loop: false,
        items: 1,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // other vehicle carousel
    $('#vehicleOtherCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    // other vehicle carousel
    $('#testimonialWidgetCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true
    });

    // other package carousel
    $('#packageOtherCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    // other vehicle carousel
    $('#vehicleWidgetCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true
    });

    // other package carousel
    $('#packageWidgetCarousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 0,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 8000,
        dots: false,
        nav: true,
        navSpeed: 1500,
        smartSpeed: 1500,
        autoplaySpeed: 1500,
        dragEndSpeed: 1500,
        responsiveClass: true
    });

    // carousel nav
    $('.owl-nav .owl-next').html('<i class="fas fa-chevron-right"></i>');
    $('.owl-nav .owl-prev').html('<i class="fas fa-chevron-left"></i>');

    // count js
    $('.list-count[data-enddate]').each(function(index) {
        var ulEl = $(this);
        var countDateEnd = $(this).data('enddate');
        console.log(countDateEnd);
        var x = setInterval(function(){
            // hari ini
            var now = new Date().getTime();

            // jarak antara akhir dan sekarang
            var distance = countDateEnd - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(days <= 0) {
                $(ulEl).find('.day').html('00');
            }else if (days >= 1 && days <= 9){
                ulEl.find('.day').html('0'+days);
            }else{
                ulEl.find('.day').html(days);
            }

            if(hours <= 0) {
                ulEl.find('.hour').html('00');
            }else if (hours >= 1 && hours <= 9){
                ulEl.find('.hour').html('0'+hours);
            }else{
                ulEl.find('.hour').html(hours);
            }

            if(minutes <= 0) {
                ulEl.find('.minute').html('00');
            }else if (minutes >= 1 && minutes <= 9){
                ulEl.find('.minute').html('0'+minutes);
            }else{
                ulEl.find('.minute').html(minutes);
            }

            if(seconds <= 0) {
                ulEl.find('.second').html('00');
            }else if (seconds >= 1 && seconds <= 9){
                ulEl.find('.second').html('0'+seconds);
            }else{
                ulEl.find('.second').html(seconds);
            }
        }, 1000);
    });
    $('.list-count-small[data-enddate]').each(function(index) {
        var ulEl = $(this);
        var countDateEnd = $(this).data('enddate');
        console.log(countDateEnd);
        var x = setInterval(function(){
            // hari ini
            var now = new Date().getTime();

            // jarak antara akhir dan sekarang
            var distance = countDateEnd - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(days <= 0) {
                $(ulEl).find('.day').html('00');
            }else if (days >= 1 && days <= 9){
                ulEl.find('.day').html('0'+days);
            }else{
                ulEl.find('.day').html(days);
            }

            if(hours <= 0) {
                ulEl.find('.hour').html('00');
            }else if (hours >= 1 && hours <= 9){
                ulEl.find('.hour').html('0'+hours);
            }else{
                ulEl.find('.hour').html(hours);
            }

            if(minutes <= 0) {
                ulEl.find('.minute').html('00');
            }else if (minutes >= 1 && minutes <= 9){
                ulEl.find('.minute').html('0'+minutes);
            }else{
                ulEl.find('.minute').html(minutes);
            }

            if(seconds <= 0) {
                ulEl.find('.second').html('00');
            }else if (seconds >= 1 && seconds <= 9){
                ulEl.find('.second').html('0'+seconds);
            }else{
                ulEl.find('.second').html(seconds);
            }
        }, 1000);
    });

    // counter up
    $('.counter-number').counterUp({
        delay: 10,
        time: 1500
    });

})(window.jQuery);