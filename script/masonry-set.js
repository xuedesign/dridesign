 $(function(){
	$('#box_masonry').imagesLoaded(function(){
		$('#box_masonry').masonry({        
			itemSelector: '.item_card',
			//columnWidth: 3,
			singleMode: false,
			animate:true
		});
	});
});


