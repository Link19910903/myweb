$('#telBuyer').on('click',function(){
	var buyernum = $('.buyernum').text()
	window.location.href='tel:'+buyernum+'';
})
$('#telCon').on('click',function(){
	var connum = $('.connum').text()
	window.location.href='tel:'+connum+'';
})