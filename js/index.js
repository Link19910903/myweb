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
		if (e.index == 0) {
			info.innerText = '';
		} else {
			console.log(window)
		}
	})
});

document.getElementById("tel").addEventListener('tap', function() {
	var btnArray = ['取消', '呼叫'];
	mui.confirm('', '400-086-0909', btnArray, function(e) {
		if (e.index == 0) {
			info.innerText = '';
		} else {
			info.innerText = ''
		}
	})
});
