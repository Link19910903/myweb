$(function(){
  //获取验证码
  $('#btn').click()
  //确定按钮点击事件
  $('#check-btn').on('click',function(){
    validateForm()
    if(validateForm()){
      // window.location.href = '';
    }
  });
})
//注册表单验证
var yzm = 123456;  //模拟用户收到的验证码

var inputCode = null;
// 定义验证验证码的函数
function codeValidator(){
  var value = $("#code").val();
  var msg = $("#msg");
  if(value==""||inputCode != yzm){
    msg.text("验证码有误,请重新输入");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }
  if(!msg.hasClass("hide")){
    msg.text("");
    msg.attr("class","hide");
  }
  return true;
}


function validateForm(){
  //判断表单是否通过验证
  if(!codeValidator()){
    // document.getElementById("check-btn").disabled = "disabled";
    return false;
  }else{
    // document.getElementById("check-btn").disabled = "";
  }
  return true;
}
//输入六位验证码后执行的函数
function isclick(){
  inputCode = $('#code').val()*1; //用户输入的验证码
  // 判断验证是否通过,通过按钮可点击
  if (validateForm()) {
    document.getElementById("check-btn").disabled = "";
  }
}
// $("#code").on("input propertychange",function(){
//   var num = $('#code').val()*1;
//   if (num.length < 6) {
//     msg.text("");
//     msg.attr("class","hide");
//   }
// })
//点击提交按钮跳转到重置密码页
$('#check-btn').on('click',function(){
  window.location.href = 'tradepsd.html'
})