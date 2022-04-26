// Define Nice Scroll JS
// jQuery(function($){
//     $("html").niceScroll({
//         styler:"fb",
//         cursorcolor:"#333333",
//         cursorwidth:"11px",
//         cursorborder: "2px solid transparent",
//         // scrollspeed: 10,
//         // mousescrollstep: 5,
//         cursorborderradius: "15px",
//     });
// });

// Feature Box Menu Selections
jQuery(document).on('mouseover','.rolling-text-item ul li a',function(){
    let _handler = jQuery(this);
    let _allA = jQuery(".rolling-text-item ul li a");
    if(_handler.hasClass('inactive-item')){
        _handler.removeClass('inactive-item');
        _handler.addClass("active-item");
        _allA.addClass('inactive-item');
    }else{
        _handler.addClass("active-item");
        _allA.addClass('inactive-item');
    }
});

jQuery(document).on('mouseleave','.rolling-text-item ul li a',function(){
    let _handler = jQuery(this);
    let _allA = jQuery(".rolling-text-item ul li a");
    _allA.removeClass('active-item');
    _allA.removeClass('inactive-item');
});