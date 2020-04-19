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
// $(".pozadina2").removeClass("transparentna");
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() < 100) {
        $(".pozadina2").removeClass("bela");
      } else {
        $(".pozadina2").addClass("bela");
      }
    });
  });


$(".mob-nav").hide;
$(document).ready(function(){
    $(".burgermenu").on("click", function(){
        $(".mob-nav").slideToggle("slow");
    })
});

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() < 100) {
        $(".altButton").removeClass("transp");
      } else {
        $(".altButton").addClass("transp");
      }
    });
  });


  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() < 35) {
        $(".kolona2").removeClass("blur");
      } else {
        $(".kolona2").addClass("blur");
      }
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() < 35) {
        $(".row").removeClass("belitekst");
      } else {
        $(".row").addClass("belitekst");
      }
    });
  });


