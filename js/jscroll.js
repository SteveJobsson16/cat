jQuery(document).ready( function() {
    "use strict";
var step = 25;
var scrolling = false;

// Wire up events for the 'scrollUp' link:
jQuery(".scrollUp").bind("click", function(event) {
    event.preventDefault();
    // Animates the scrollTop property by the specified
    // step.
    jQuery("#scroll_content").animate({
        scrollTop: "-=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("up");
}).bind("mouseout", function(event) {
    scrolling = false;
});


jQuery(".scrollDown").bind("click", function(event) {

    event.preventDefault();
    jQuery("#scroll_content").animate({
        scrollTop: "+=" + step + "px"
    });
}).bind("mouseover", function(event) {
    scrolling = true;
    scrollContent("down");
}).bind("mouseout", function(event) {
    scrolling = false;
});

function scrollContent(direction) {
    var amount = (direction === "up" ? "-=1px" : "+=1px");
    jQuery("#scroll_content").animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction);
        }
    });
}

});