//auto navbar collapse in mobile
$("#navbarToggle").blur(function (event){
	if ($(window).innerWidth() < 768){
		$("#navbarCollapse").collapse('hide');
	}
});

//auto-hides navbar when top of screen
$(".navbar").hide();
$(window).scroll(function() {
	var x = $(window).scrollTop();
	var y = $(window).height();
	if (x >= y) {
	  	$(".navbar").fadeIn(500);
	} else {
	  	$(".navbar").fadeOut(500);
	}
});

//for navbar event smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  	var target = $(this.hash);
	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  	if (target.length) {
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 500);
	    return false;
	  	}
	}
});

//for carousel using slick.js
$('.your-class').slick({
	arrows: false,
	dots: true,
	autoplay: true,
  	autoplaySpeed: 5000
});