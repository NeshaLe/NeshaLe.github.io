$(window).scroll(function(){
  var sticky = $('.header'),
  scroll = $(window).scrollTop();
 if (scroll < 90){
     sticky.removeClass('fixed2');
  //    sticky.slideDown(1000);
 }else{
  //    sticky.slideUp(1000)
     sticky.addClass('fixed2');
  //    sticky.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
 }
});


// $(document).ready(function() {
//     $(window).scroll(function() {
//       if ($(document).scrollTop() < 100) {
//         $(".pozadina2").removeClass("bela");
//       } else {
//         $(".pozadina2").addClass("bela");
//       }
//     });
//   });


$(".mob-nav").hide;
$(document).ready(function(){
    $(".burgermenu").on("click", function(){
        $(".mob-nav").slideToggle("slow");
    })
});

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() < 90) {
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


