$(document).ready(function() {
lc_lightbox('.elem', {
      wrap_class: 'lcl_fade_oc',
      gallery : true, 
      thumb_attr: 'data-lcl-thumb', 
      skin: 'dark',
      fullscreen: true,
      // more options here
    }); 
  }); 

  $(window).scroll(function(){
    var sticky = $('.header'),
    scroll = $(window).scrollTop();
   if (scroll < 80){
       sticky.removeClass('fixed2');
    //    sticky.slideDown(1000);
   }else{
    //    sticky.slideUp(1000)
       sticky.addClass('fixed2');
    //    sticky.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
   }
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
