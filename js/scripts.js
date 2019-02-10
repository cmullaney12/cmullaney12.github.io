function toggleMobileMenu() {
    var x = document.getElementById("mobileMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

$(document).ready(function(){
	$('#burger-menu').click(function(){
        $(this).toggleClass('open');
        toggleMobileMenu();        
	});
});

$(document).ready(function(){
  $('.painting-carousel').slick({
        dots: true,
        fade: true,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        // slidesToShow: 3,
        adaptiveHeight:true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]

  });
});