$(function(){
	$('#check-btn').on('click',function(){
		var mobile = $('[name="mobile"]').val();
		var vcode = $('[name="vcode"]').val();
		var password = $('[name="password"]').val();
		var check = $('[name="check"]').val();
		if (!mobile) {
			// alert('请输入手机号');
			mui.toast('请输入手机号');
			return;
		}
		if (mobile.length < 11) {
			alert('请输入合法的手机号');
			return;
		}
		if (password != check) {
			alert('两次输入密码不一样');
			return;
		}
	});
})