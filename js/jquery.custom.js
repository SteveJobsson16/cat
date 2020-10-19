(function($) {
  "use strict";
 jQuery(document).ready(function(jQuery) {

  /*-----------------------------------------------------------------------------------*/
  /*             jQurey UI
  /*-----------------------------------------------------------------------------------*/

        jQuery( ".accordion" ).accordion({
            collapsible: false,
            active: false,
            heightStyle: false
        }); 

        jQuery( ".accordion-close" ).accordion({
            collapsible: true,
            active: false,
            heightStyle: false
        }); 
        
    if(jQuery( "footer" ).height()){
      var h = jQuery( "footer" ).height();
      jQuery('.wrapall').css('margin-bottom',h+'px');
    }
    
    jQuery(window).scroll(function() {
         if (jQuery('.wrapall').offset().top- jQuery(window).scrollTop()<0){
          if (jQuery(window).width()>767) {
              jQuery('.navbar-wrapper').addClass("sticky"); 
             }
        }else{
          jQuery('.navbar-wrapper').removeClass("sticky"); 
        }
    });
        jQuery( ".tabs" ).tabs();

        jQuery( "#vtabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
        jQuery( "#vtabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

        jQuery("area[rel^='prettyPhoto']").prettyPhoto();
        
        jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true, deeplinking: false});
        jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, deeplinking: false});

        jQuery('.homepage_v2_banner_bg').parallax("50%", 0.0);
    jQuery('.parallax_7').parallax("0%", 0.0);

        // hide #back-top first
        jQuery("#back-top").hide();
        
        // fade in #back-top
        jQuery(function () {
          jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
              jQuery('#back-top').fadeIn();           
              
            } else {
              jQuery('#back-top').fadeOut();
            }
          });

          // scroll body to 0px on click
          jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
        });
        

  /*****************************
    Responsive Menu
  ******************************/

  jQuery(window).load(function(){
        jQuery('#mobnav-btn').click(

        function () {
            jQuery('.sf-menu').toggleClass("xactive");
        });

        jQuery('.mobnav-subarrow').click(

        function () {
            jQuery(this).parent().toggleClass("xpopdrop");
        });
    });//]]>  

  /*search bar*/

  jQuery(".search-bar").click(function(){
    jQuery(".search-content").toggle("slow");
  }); 

/*-----------------------------------------------------------------------------------*/
/*  Isotope JS
/*-----------------------------------------------------------------------------------*/
        var jQuerycontainer = jQuery('.pro');
        /* filter items when filter link is clicked */
        jQuerycontainer.isotope({layoutMode: 'fitRows', filter: '*'});
        jQuery('#filter a').click(function(){
          var selector = jQuery(this).attr('data-filter');
          jQuerycontainer.isotope({ layoutMode: 'fitRows',filter: selector });
            return false; 
        });
        
         var jQueryoptionSets = jQuery('.option-set'),
             jQueryoptionLinks = jQueryoptionSets.find('a');

          jQueryoptionLinks.click(function(){
            var jQuerythis = jQuery(this);
            // don't proceed if already selected
            if ( jQuerythis.hasClass('active') ) {
              return false;
            }
            var jQueryoptionSet = jQuerythis.parents('.option-set');
            jQueryoptionSet.find('.active').removeClass('active');
            jQuerythis.addClass('active');
    });

/**********************************
  scroll effect
**********************************/

    jQuery(function () {
      jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
          jQuery('#back-top').fadeIn();                
        } else {
          jQuery('#back-top').fadeOut();          
        }
      });

      jQuery('#sidebar-nav').superfish({
        speed   : 'slow',
        animation:   {opacity:'show',height:'show'}
        
      });
    });

    jQuery(window).load(function() {
      jQuery(".spinner").fadeOut("slow");
    }) 

/*-----------------------------------------------------------------------------------*/
/*  Core_service
/*-----------------------------------------------------------------------------------*/

    if(jQuery('#core_services').length){
        // Randomise
        jQuery('.core_service-nav').each(function(){
            var container = jQuery(this),
                children = container.children('li');
            children.sort(function(a,b){
                  var temp = parseInt( Math.random()*10 );
                  var isOddOrEven = temp%2;
                  var isPosOrNeg = temp>5 ? 1 : -1;
                  return( isOddOrEven*isPosOrNeg );
            })
            .appendTo(container);            
        });

        jQuery('#core_services .core_service:eq(10),#core_services .core_service-nav a:eq(10)').addClass('active');
        jQuery('#core_services .core_service-nav a').hover(function(){
            jQuery('#core_services .core_service-nav a,#core_services .core_service').removeClass('active');
            jQuery('#core_services .core_service-nav li').removeClass('li_active');
            jQuery(this).addClass('active');
            jQuery(this).parent().addClass('li_active');
            jQuery(jQuery(this).attr('href')).addClass('active');
        });
        jQuery('#core_services .core_service-nav a').click(function(){ return false; });
    }


});

/*-------------*/

jQuery(function() {
    var galleries = jQuery('.ad-gallery').adGallery({
    update_window_hash: false,
      slideshow: {
      enable: false,
      autostart: true,
      speed: 5000,
      start_label: '',
      stop_label: '',
      // Should the slideshow stop if the user scrolls the thumb list?
      stop_on_scroll: false, 
      // Wrap around the countdown
      countdown_prefix: '(', 
      countdown_sufix: ')',
      
      },
  });

  
});

function alertbox_close(id){
  jQuery("#"+id).fadeOut();
  return false;
}
/*-------------testimonial---------------*/
(function(jQuery) {
    jQuery(function() {
    if(jQuery('.jcarousel').height()){
        jQuery('.jcarousel').jcarousel();

        jQuery('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                jQuery(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                jQuery(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    }
  });
})(jQuery);
/*----------------------------------------------------*/
// CONTACT FORM WIDGET
/*----------------------------------------------------*/

  jQuery("form#contactfrm").submit(function(e){
    e.preventDefault();
    name = jQuery('#contact_name').val();
    email = jQuery('#contact_email').val(); 
    web = jQuery('#contact_web').val(); 
    msg = jQuery('#contact_message').val(); 
    var error =0; 
    
    
    if(name=="Full Name" || jQuery.trim(name).length==0 ){ jQuery("#contact_name").addClass('contant_error'); error =1; }
    
    if(email=="Your Email"){ jQuery("#contact_email").addClass('contant_error'); error =1; }
    
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    
    if(!pattern.test(email)){ error =1; }
    
    if(web=="Website" || jQuery.trim(web).length==0){ jQuery("#contact_web").addClass('contant_error'); error =1; }
    
    if(msg=="Type Message" || jQuery.trim(msg).length==0){ jQuery("#contact_message").addClass('contant_error'); error =1; }
    
    if(error ==1){
      jQuery("#contact_form_message_box").html('<div class="alert error notifications_content"><p>Error!!!  Fields are required.</p></div>');
    }else{
      jQuery("#contact_form_message_box").html('<div class="alert attention notifications_content"><p>Please wait....</p></div>'); 
      jQuery.ajax({ 
        type: "POST",
        url: "libs/submit-form-ajax.php",
        data: 'name='+name+'&email='+email+"&web="+web+"&message="+msg,
        success: function(msg){
          if(msg=="success"){
            jQuery("#contact_form_message_box").html('<div class="alert well notifications_content"><p>Well Done :) Your message is sent. Thank you!</p></div>');  
            jQuery('#contact_name').val('Full Name');
            jQuery('#contact_email').val('Your Email'); 
            jQuery('#contact_subject').val('Website'); 
            jQuery('#contact_message').val('Type Message');   
          }else{
            jQuery("#contact_form_message_box").html('<div class="alert error notifications_content"><p>Error!!! Something wrong. Please try again!</p></div>');  
          }   
        } 

      });
    }
  }); 
/* twitter call */    
  jQuery.ajax({ 
    type: "POST",
    url: "tweets/get-tweets.php",
    data: 'user=envato',  //your twitter username 
    success: function(msg){
      jQuery("#gettweet").html(msg);
    }
  });               
var revapi;
  jQuery(document).ready(function() {
       revapi = jQuery('.tp-banner').revolution(
      {
        delay:9000,
        startwidth:1170,
        startheight:590,
        hideThumbs:10,
        fullWidth:"on",
        forceFullWidth:"on"
      });

  }); //ready


  jQuery(window).on('load', function () {
      jQuery('.selectpicker').selectpicker({
          'selectedText': 'cat'
      });

      // $('.selectpicker').selectpicker('hide');
  });
})(jQuery);

