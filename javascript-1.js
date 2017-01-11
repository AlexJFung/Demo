
$(document).ready(function() {

	var has_touch = 'ontouchstart' in document.documentElement;
	var accX, accY, width, height, xA, yA, movement;

	if(has_touch || screen.width <= 699) {

		(resize = function() {

			height = $(window).height();
			width = $(window).width();

			$('#container').width(width).height(height);


		})();

		window.ondevicemotion = function(event) {

		    accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;
		    accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;

		    movement = 10;

		    xA = -(accX / 10) * movement;
		    yA = -(accY / 10) * movement;

				document.getElementById("X").innerHTML = accX;
				document.getElementById("Y").innerHTML = accY;

			run();
		}

	} else {

		$('.content').show();

		$('#container').addClass('fullscreen');
	}
	
	function run() {

		if(xA >= 7){
			$('#container').css({'background-image':'url(icons/placeholder5.png)'});
		}else if(yA >= 5){
			$('#container').css({'background-image':'url(icons/placeholder3.png)'});
		}else if(yA <= -5){
			$('#container').css({'background-image':'url(icons/placeholder1.png)'});
		}else if(xA <= -7){
			$('#container').css({'background-image':'url(icons/placeholder4.png)'});
		}else if(xA >= 3){
			$('#container').css({'background-image':'url(icons/placeholder2.png)'});
		}else if(xA <= -3){
			$('#container').css({'background-image':'url(icons/placeholder6.png)'});
		}else {
			$('#container').css({'background-image':'url(icons/placeholder7.png)'});
		}

	}

});
