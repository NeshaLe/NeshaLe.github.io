var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

// $(document).ready(function() {
//     $(window).scroll(function() {
//       if ($(document).scrollTop() < 90) {
//         $(".img-src").removeClass("blurovano");
//       } else {
//         $(".img-src").addClass("blurovano");
//       }
//     });
//   });


//   $(document).ready(function() {
//     $(window).scroll(function() {
//       if ($(document).scrollTop() < 50) {
//         $(".nevidljiv").removeClass("nevidljiv");
//         $(".vidljiv").addClass("nevidljiv");
//       } else {
//         $(".nevidljiv").addClass("nevidljiv");
//       }
//     });
//   });