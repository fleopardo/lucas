jQuery(document).ready(function($) {

  $('.carousel').bjqs({
    height      : 420,
    width       : 960,
    responsive  : true
  });


  /**** Productos overs y clicks ****/
  $('.productos .product-list li').each(function(){
  	$(this).mouseenter(function(){
  		$(this).addClass('over');
  	});

  	$(this).mouseleave(function(){
  		$(this).removeClass('over');
  	});
  })


});