$(window).on('load', function () { //make sure whole website fully loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" style="font-size:32px; padding-right:10px; color:black;" ></i>', '<i class="fa fa-angle-right"  style="font-size:32px; color:black;"></i>']
    });
});


$('.slider').saSlider();


$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header a').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header a').removeClass('visible-title');
    }
});

$(".team-members").slick();


$(function(){
    $('.toggle').click(function(){
        $('header ul').toggleClass('active');
    });
});


/******Responsove tabs ********/
/*
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
*/

$.fn.responsiveTabs = function() {

    return this.each(function() {
      var el = $(this),
          tabs = el.find('.tab_link'),
          content = el.find('.service-tab'),
          placeholder = $('<div class="services-tabs-placeholder"></div>').insertAfter(el);
  
      tabs.on('click', function() {
        var tab = $(this);
  
        tabs.not(tab).removeClass('active');
        tab.addClass('active');
  
        placeholder.html( tab.next().html() );
      });
  
      tabs.filter(':first').trigger('click');
    });
  
  }
  
  
  $('#services-tabs').responsiveTabs();



  $.fn.responsiveTabs = function() {

    return this.each(function() {
      var el = $(this),
          tabs = el.find('dt'),
          content = el.find('dd'),
          placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);
  
      tabs.on('click', function() {
        var tab = $(this);
  
        tabs.not(tab).removeClass('active');
        tab.addClass('active');
  
        placeholder.html( tab.next().html() );
      });
  
      tabs.filter(':first').trigger('click');
    });
  
  }
  
  
  $('.responsive-tabs').responsiveTabs();


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

