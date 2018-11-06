$('#telBuyer').on('tap',function(){
	var buyernum = $('.buyernum').text()
	window.location.href='tel:'+buyernum+'';
})
$('#telCon').on('tap',function(){
	var connum = $('.connum').text()
	window.location.href='tel:'+connum+'';
})