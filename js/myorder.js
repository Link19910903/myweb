var state = $('#state').text()
$(function(){
  //获取验证码
  //确定按钮点击事件
  $('.item').on('click',function(e){
  	// window.location.href='details.html'
  	// var a =$("span[id='state']")
  	var item = $(this).children()[0];
  	var $item = $(item)
  	var sta = $(item).children()[0];
  	var $sta = $(sta)
  	var thisState = $(sta).children()[1];
  	var $thisState = $(thisState);
  	var thisSta = $(thisState).text()
  	if (thisSta == '待发货') {
  		window.location.href='details.html'
  	}else if (thisSta == '已发货') {
  		window.location.href='already.html'
  	}else if (thisSta == '订单完成') {
  		window.location.href='fulfil.html'
  	}else if (thisSta == '已完成') {
  		window.location.href='fulfil.html'
  	}else if(thisSta == '订单关闭') {
  		window.location.href='cancel.html'
  	}
  });
})