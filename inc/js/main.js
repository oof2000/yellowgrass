$(document).ready(function(){

// #### BUTTON #### //

	//vars
	stripe1 = $('.stripe-1');
	stripe2 = $('.stripe-2');
	stripe3 = $('.stripe-3');
	nav 	= $('nav');
	focus	= $('#focus');
	mute 	= $('#mute');

	i = 0;
	j = 0;

	console.log(i);

	$('#button').click(function(){

		if(i == 0){

			//move central
			TweenLite.to(stripe1, 0.2, {top: '12px'});
			TweenLite.to(stripe3, 0.2, {top: '12px'});

			TweenLite.to([stripe1, stripe2, stripe3], 0.2, {rotation: 180, delay: 0.2});

			//make cross
			TweenLite.to(stripe1, 0.2, {rotation:225, delay:0.4});
			TweenLite.to(stripe2, 0.2, {rotation:225, delay:0.4});
			TweenLite.to(stripe3, 0.2, {rotation:135, delay:0.4});	

			//show nav
			nav.show();

			i = 1;
		}

		else if(i == 1){

			//move central
			TweenLite.to(stripe1, 0.2, {top: '0px', delay:0.2});
			TweenLite.to(stripe3, 0.2, {top: '24px', delay:0.2});

			//make cross
			TweenLite.to(stripe1, 0.2, {rotation:0});
			TweenLite.to(stripe2, 0.2, {rotation:0});
			TweenLite.to(stripe3, 0.2, {rotation:0});	

			//hide nav
			nav.hide();

			i = 0;
		}
	});

	
	//Focus copy
	TweenLite.from(focus, 1.5, {opacity:'0', left: '75px', delay:2});
	TweenLite.to(focus, 1.5, {left: '75px', delay:3.5});
	TweenLite.to(focus, 1.5, {opacity: '0', left: '50px', delay:5});


// #### MUTE/UNMUTE #### //

	mute.click(function(){

		//Muted		
		if(j == 0){

			console.log(j + ' Sound is muted');
			
			mute.text('UNMUTE');

			$("video").prop('muted', true); //mute

			j = 1;

		}


		//Unmuted
		else if(j == 1){

			console.log(j + ' Sound is unmuted');
			
			mute.text('MUTE');

			$("video").prop('muted', false); //unmute	
			
			j = 0;

		}
	});


});