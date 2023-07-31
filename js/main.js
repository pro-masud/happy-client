(function($){
    $(document).ready(function(){
        

        // magnifiy popup open link
        $('.video-area-btn').magnificPopup({
            type: 'video'
        });

    });

    

})(jQuery)

// 
$(".happy-client-container").owlCarousel({
    navigation : false,
    pagination: true,
    slideSpeed : 2500,
    stopOnHover: true,
    autoPlay: 3000,
    loop: true,
    items: 3,
    //singleItem:true,
    itemsMobile : [550,1],
    itemsDesktopSmall : [991,3],
    transitionStyle : "fade",
    navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
});

