/* My custom jquery scroll follio code */
jQuery(document).ready( function() {
		"use strict";
		jQuery('.go_top').on('click', {section: '#go_top', offset: '150'}, go_section);
		jQuery('.go_portfolio').on('click', {section: '#go_portfolio', offset: '75'}, go_section);
		jQuery('.go_about').on('click', {section: '#go_about', offset: '75'}, go_section);				
		jQuery('.go_service').on('click', {section: '#go_service', offset: '75'}, go_section);
		jQuery('.go_blog').on('click', {section: '#go_blog', offset: '75'}, go_section);		
		jQuery('.go_contact').on('click', {section: '#go_contact', offset: '75'}, go_section);			
});

function go_section(event) {
	"use strict";
	jQuery('html,body').animate({ scrollTop: jQuery(event.data.section).offset().top-event.data.offset},1500);
	return false;
}
/* My custom jquery scroll follio code */








