(function ($, Drupal) {
    Drupal.behaviors.themeScripts = {
        attach: function (context, settings) {

            $(".slide__image").each(function() {
                var attr = $(this).attr('data-image-src');
                $(this).css('background-image', 'url('+attr+')');      
            }); 

            $(window).on("load", function() {
                $(".flex-prev").once().prepend('<span class="fal fa-chevron-left"></span>');
                $(".flex-next").once().prepend('<span class="fal fa-chevron-right"></span>'); 
                $("#overlay").fadeOut(500);
                TweenMax.to(".cover", 1.5, {
                    delay: "0.5",
                    ease: Expo.easeInOut,
                    height: "0"
                });
            }); 



        }
    };
})(jQuery, Drupal);
