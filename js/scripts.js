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

  }
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 3,
    // responsive: [
    //     {
    //     breakpoint: 768,
    //     settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 3
    //     }
    //     },
    //     {
    //     breakpoint: 480,
    //     settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //     }
    //     }
    // ]
  );
});