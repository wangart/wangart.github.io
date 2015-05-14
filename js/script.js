$(document).ready(function() {
    $('#fullpage').fullpage({
        afterRender: function(){
            var pluginContainer = $(this);
            $('.arrow').effect('bounce',5000);
            $( ".header" ).hide();
            $( ".quickresume" ).hide();
            $('.first').addClass('button--highlighted');
            $( ".quickresume" ).slideDown(1000);
        },
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            if(index == 3){
                $( ".header" ).slideDown(500);
            }
            if(index == 2){
                $(".arrow").effect('bounce',{distance:10},4000);
            }
            if(index == 4){
              $(".app-card").each(function(i) {
                  $(this).delay(400*i).fadeTo(800,1);
              });
            }
        },
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index == 3){
                $( ".header" ).slideUp(500);
            }
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            var loadedSlide = $(this);
            if(slideIndex == 1){
                $(".button").removeClass('button--highlighted');
                $('.second').addClass('button--highlighted');
            }
            else if(slideIndex == 2){
                $(".button").removeClass('button--highlighted');
                $('.third').addClass('button--highlighted');
            }
            else if(slideIndex == 3){
                $(".button").removeClass('button--highlighted');
                $('.fourth').addClass('button--highlighted');
            }
            else {
                $(".button").removeClass('button--highlighted');
                $('.first').addClass('button--highlighted');
            }
        },
        //Navigation
        anchors:['resume'   ,'home', 'about','projects'],
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
        showActiveTooltips: false,

        //Scrolling
        css3: false,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        controlArrows: false
    });
    $(".button").click(function(){
        $(".button").removeClass('button--highlighted');
        $(this).addClass('button--highlighted');
    });
    $('.arrow').mouseenter(function() {
        $(this).effect('bounce',4000);
    });
});
