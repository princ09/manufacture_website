$(window).on('load', function () { //make sure whole website fully loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/***************************************************/
/*            team                      ************/
/****************************************************/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" style="font-size:32px; padding-right:10px;" ></i>', '<i class="fa fa-angle-right"  style="font-size:32px;"></i>']
    });
});

/***********Progress bar ************************/

$(function () {
    $('#progress-elements').waypoint(function () {
        // body...
        $(function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                }, 1000);
            });
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/**/

/******Responsove tabs ********/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/***************PORTFOLIO**********/

$(window).on("load", function () {
    // init Isotope
    var $grid = $('#isotope-container').isotope({
        // options
    });
    // filter items on button click
    $('#isotope-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });

        $('#isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/***************magnifier**********/
/*

$(function(){
	
	$('#portfolio-wrapper').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

});
*/
$('[data-magnify=gallery]').magnify();

/***************Testimomia; */
$(function () {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" style="font-size:32px; padding-right:10px;" ></i>', '<i class="fa fa-angle-right"  style="font-size:32px;"></i>']
    });
});

/**************Stats section *********************/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

/*******************CLients*****************/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" style="font-size:32px; padding-right:10px;" ></i>', '<i class="fa fa-angle-right"  style="font-size:32px;"></i>']
    });
});


/*Google Map*/
$(function () {

    // The location of Uluru
    var adressString = 'Devipada, Borivali East, Mumbai, Maharashtra 400066';
    var myLatLng = {
        lat: 19.227910,
        lng: 72.863650
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 11,
            center: myLatLng
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Click to see Address.'
    });

    var infowindow = new google.maps.InfoWindow({
        content: adressString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});