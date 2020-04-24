$(function(){
	$('.img img').click(function(){
		var con = $(this).closest('div');
		layer.photos({
			photos:con,
			anim:5
		})
	})
})