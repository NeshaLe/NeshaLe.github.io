// $(document).ready(function(){
//     $(document).scroll(function() {
//         if( $(this).scrollTop() > 260 ) {
//             if(background-color) {
//                 background-color = false;
//                 $(".pozadina2").removeClass('transparentna');
//             }
//         } else {
//             if( background-color ) {
//                 background-color = true;
//                 $(".pozadina2").addClass('transparentna');
//             }
//         }
//     })
// });

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $(".pozadina2").addClass("transparentna");
      } else {
        $(".pozadina2").removeClass("transparentna");
      }
    });
  });

// $(document).ready(function(){
//     $(".burgermenu").on("click", function(){
//         $(".mob-nav").toggle("slide");
//     })
// });

$(document).ready(function(){
    $(".burgermenu").on("click", function(){
        $(".mob-nav").slideToggle("slow");
    })
});

// $(document).ready(function(){
//     $(".burgermenu").click(function(){
//         $(".mob-nav").animate({
//             width: "toggle"
//         });
//     });
// });