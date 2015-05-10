$(document).ready(function() {
    $('#fullpage').fullpage({
        afterRender: function(){
            var pluginContainer = $(this);
            $('.arrow').effect('bounce',5000);
            $( ".header" ).hide();
            $('.first').addClass('button--highlighted');
        },
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            if(index == 2){
                $( ".header" ).slideDown(500);
            }
            if(index == 1){
                $(".arrow").effect('bounce',4000);
            }
        },
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index == 2 && direction =='up'){
                $( ".header" ).slideUp(500);
            }
        },
        //Navigation
        anchors:['home', 'about'],
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
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
        scrollOverflow: false,
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