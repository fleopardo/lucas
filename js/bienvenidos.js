;(function(win) {

	var iconFooterTrigger = $('a#ver-mas-footer'),
		footerContent = $('footer')
		bidHiddenContent = $('.bienvenidos .bid article'),
		bienvenidosBidTrigger = $('.bienvenidos .bid a');


	bienvenidosBidTrigger.on('click', function (event) {
		event.preventDefault();
		bidHiddenContent.toggleClass('open');

		if (bidHiddenContent.hasClass('open')) {
			$('.bienvenidos .bid .icon-more .text').html('-');
		}else{
			$('.bienvenidos .bid .icon-more .text').html('+');
		}
	});

	iconFooterTrigger.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('open');
		if( !$(this).hasClass('open') ){
			footerContent.stop(true,true).animate({
				left: '-100%',
				right: '100%'
			}, 1000, "linear");
		}else{
			footerContent.stop(true,true).animate({
				left: '0',
				right: '0'
			}, 1000, "linear");
		}
	});


	//animacion logo 20 años y bid

	var tid = setInterval(brilloBid, 8000);
	function brilloBid() {
	  // do some stuff...
	  addClassBid();
	  
	  setTimeout(removeClassBid, 1000);
	  
	  // no need to recall the function (it's an interval, it'll loop forever)
	}

	function addClassBid() {
		$('.bienvenidos .bid .conte_imagen .activa_hover').css('display','block');
	  	setTimeout(addActiveBid, 500);
	}

	function removeClassBid() {
		$('.bienvenidos .bid .conte_imagen .activa_hover').css('display','none');
		setTimeout(removeActiveBid, 500);
	}

	function addActiveBid(){
		$('.bienvenidos .bid .conte_imagen .activa_hover').addClass('active');
	}

	function removeActiveBid(){
		$('.bienvenidos .bid .conte_imagen .activa_hover').removeClass('active');
	}


}(window));