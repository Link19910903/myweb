// $('#telBuyer').on('tap',function(){
// 	var buyernum = $('.buyernum').text()
// 	window.location.href='tel:'+buyernum+'';
// })
// $('#telCon').on('tap',function(){
// 	var connum = $('.connum').text()
// 	window.location.href='tel:'+connum+'';
// })
// $('#telBuyer').on('tap',function(){
// 	var buyernum = $('.buyernum').text()
// 	window.location.href='tel:'+buyernum+'';
// })
// $('#telCon').on('tap',function(){
// 	var connum = $('.connum').text()
// 	window.location.href='tel:'+connum+'';
// })
//mui初始化
//买家电话
var buyernum = $('.buyernum').text()
mui.init({
	swipeBack: true //启用右滑关闭功能
});
document.getElementById("confirmBtn").addEventListener('tap', function() {
	var btnArray = ['取消', '立即拨打'];
	mui.confirm(buyernum, '确定拨打电话', btnArray, function(e) {
		if (e.index == 1) {
			window.location.href='tel:'+buyernum+'';
		} else {
		}
	})
});
//联系卖家
var connum = $('.connum').text()
mui.init({
	swipeBack: true //启用右滑关闭功能
});
document.getElementById("telCon").addEventListener('tap', function() {
	var btnArray = ['取消', '立即拨打'];
	mui.confirm(connum, '确定拨打电话', btnArray, function(e) {
		if (e.index == 1) {
			window.location.href='tel:'+connum+'';
		} else {
		}
	})
});
