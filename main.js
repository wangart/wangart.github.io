var showDescription = function () {
	$(".description-container").animate({
			width: "60%"
		}, 1000, function() {
			$(".description").fadeIn( "slow" );
			$("a").tooltipster({
				maxWidth: 250,
		    	theme: 'tooltipster-shadow'
			});
	});
};

$(function(){
        $(".title-text").typed({
    		stringsElement: $('#title'),
    		callback: function() {
    			showDescription();
    		}
        });
    });
