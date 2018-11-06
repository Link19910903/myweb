// var isAgree = localStorage.getItem('isAgree');
// if (isAgree === 'agree') {
// 	$('#popup').attr('style','display: none')
//     $('#backdrop').attr('style','display: none')
// }
document.getElementById("confirmBtn").addEventListener('tap', function() {
	var btnArray = ['取消', '确定'];
	mui.confirm('', '是否确定退出', btnArray, function(e) {
		if (e.index == 0) {
			info.innerText = '';
		} else {
			info.innerText = ''
		}
	})
});
document.getElementById("tixian").addEventListener('tap', function() {
	var btnArray = ['取消', '去设置'];
	mui.confirm('', '为保障您的资金安全，请先设置交易密码', btnArray, function(e) {
		if (e.index == 1) {
			window.location.href = 'static/setting/tradingpsd.html';
		} else {
		}
	})
});

document.getElementById("tel").addEventListener('tap', function() {
	var btnArray = ['取消', '呼叫'];
	mui.confirm('', '400-086-0909', btnArray, function(e) {
		if (e.index == 1) {
			window.location.href='tel:400-086-0909';
		} else {

		}
	})
});

//点击同意按钮隐藏协议 并把状态存储在localstorage中
document.getElementById("agree").addEventListener('tap',function(){
	localStorage.setItem('isAgree','agree');
    $('#popup').attr('style','display: none')
    $('#backdrop').attr('style','display: none')
    // move();
})

//实现滚动条无法滚动
// var mo=function(e){e.preventDefault();};
// console.log(mo)

/***禁止滑动***/
// function stop(){
//         document.body.style.overflow='hidden';
//         document.addEventListener("touchmove",mo,false);//禁止页面滑动
// }
// stop();
/***取消滑动限制***/
// function move(){
//         document.body.style.overflow='';//出现滚动条
//         document.removeEventListener("touchmove",mo,false);
// }