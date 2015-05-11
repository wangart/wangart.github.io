$(document).ready(function() {
    $('#fullpage').fullpage({
        afterRender: function(){
            var pluginContainer = $(this);
            $('.arrow').effect('bounce',5000);
            $( ".header" ).hide();
        },
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            if(index == 2){
                $( ".header" ).slideDown(500);
            }
            if(index == 1){
                $(".arrow").effect('bounce',{distance:10},4000);
            }
        },
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index == 2 && direction =='up'){
                $( ".header" ).slideUp(500);
            }
        },
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            var loadedSlide = $(this);
            if(index == 2 && slideIndex == 1){
                $(".button").removeClass('button--highlighted');
                $('.second').addClass('button--highlighted');
            }
            else if(index == 2 && slideIndex == 2){
                $(".button").removeClass('button--highlighted');
                $('.third').addClass('button--highlighted');
            }
            else if(index == 2 && slideIndex == 3){
                $(".button").removeClass('button--highlighted');
                $('.fourth').addClass('button--highlighted');
            }
            else {
                $(".button").removeClass('button--highlighted');
                $('.first').addClass('button--highlighted');
            }
        },
        //Navigation
        anchors:['home', 'about'],
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