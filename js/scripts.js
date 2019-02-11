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
        adaptiveHeight:true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                dots:false,
                // arrows: false,
                centerMode: true,
                centerPadding: '40px'
            }
            },
            {
            breakpoint: 480,
            settings: {
                dots:false,
                // arrows: false,
                centerMode: true,
                centerPadding: '40px'
            }
            }
        ]

  });
});


// Text scrolling for home page, https://stackoverflow.com/questions/39381810/fade-in-and-out-word-in-sentence-for-one-loop
var loopText = [
    'Learner',
    'Mentor',
    'Painter',
    'Amateur Chef',
    'Board Game Buff',
    'Comic Book Nerd',
    'Hockey Fan',
    'Avid Skiier',
    'Hard Worker'
  ];
// var loopColor = [
//     'red',
//     'blue',
//     'orange',
//     'yellow',
//     'green',
//     'brown',
//     'purple'
// ]
var i = 0;
var max = loopText.length;
var $textDesktop = $('#swap-text-desktop');
var $textMobile = $('#swap-text-mobile');
var css = {};

// Immediately Invoked Named Function Expression - we define it then
// immediately call it by the parenthesis after the closing bracket,
// function (){}(). Once it has done it's work we call it again with
// `setTimeout()` as long as our counter `i` is not equal to the 
// number of entries in the `loopText` array.
(function changeText() {
  
    if (i >= max) {
        i = 0
    }
    if (i < max) {
        // css['color'] = loopColor[i]
        i++
        $textDesktop
            .fadeOut(0)
            .text(loopText[i])
            .css(css)
            .fadeIn(500);
        
        $textMobile
            .fadeOut(0)
            .text(loopText[i])
            .css(css)
            .fadeIn(500);
    
        setTimeout(changeText, 2500);
  
    }
  
}());