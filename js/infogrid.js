$(function() {

    // Set up variables
    var $el, $parentWrap, $otherWrap, 
        $allTitles = $("dt").css({
            padding:10, // setting the padding here prevents a weird situation, where it would start animating at 0 padding instead of 5
            "cursor": "pointer" // make it seem clickable
        }),
        $allCells = $("dt").css({
            position: "relative",
            top:0,
            left: 0,
            display: "none" // info cells are just kicked off the page with CSS (for accessibility)
        });
    
    // clicking image of inactive column just opens column, doesn't go to link   
    $("#page-wrap").delegate("a","click", function(e) { 
        
        if ( !$(this).parent().hasClass("curCol") ) {         
            e.preventDefault(); 
            $(this).next().find('dt:first').click(); 
        } 
        
    });
    
    // clicking on titles does stuff
    $("#page-wrap").delegate("dt", "click", function() {
        
        // cache this, as always, is good form
        $el = $(this);
        
        // if this is already the active cell, don't do anything
        if (!$el.hasClass("current")) {
        
            $parentWrap = $el.parent().parent();
            $otherWraps = $(".info-col").not($parentWrap);
			$otherWrapsp = $(".info-col p").not($parentWrap);
            
            // remove current cell from selection of all cells
            $allTitles = $("dt").not(this);
            
            // close all info cells
            $allCells.slideUp();
            
            // return all titles (except current one) to normal size
            $allTitles.animate({
                fontSize: "14px",
                paddingTop: 5,
                paddingRight: 5,
                paddingBottom: 5,
                paddingLeft: 5
            });
            
            // animate current title to larger size            
            $el.animate({
                "font-size": "",
                paddingTop: 5,
                paddingRight: 5,
                paddingBottom: 5,
                paddingLeft: 5
            }).next().slideDown();
            
            // make the current column the large size
            $parentWrap.animate({
                width: 419
            }).addClass("curCol");
            
            // make other columns the small size
            $otherWraps.animate({
                width: 254
            }).removeClass("curCol");
            
            // make sure the correct column is current
            $allTitles.removeClass("current");
            $el.addClass("current");  
			$otherWrapsp.css('display','none');
			
			jQuery('.curCol p').css('display','block');
			
        
        }
        
    });
    
    $("#starter").trigger("click");
    
});