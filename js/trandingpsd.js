$(function(){
  //获取验证码
  //确定按钮点击事件
  $('#check-btn').on('click',function(){
    validateForm()
  });
})
//注册表单验证
//定义手机号验证的函数
function mobilelValidator(){
  var value = $("#mobile").val();
  var msg = $("#msg");
  if(value==""||value==null){
    msg.text("手机号不能为空");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value.length !=11){
    msg.text("手机号长度不正确");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(!/^1(3|4|5|7|8)\d{9}$/.test(value)){
    msg.text("手机号格式输入不正确");
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
// 定义验证验证码的函数
function codeValidator(){
  var value = $("#code").val();
  var msg = $("#msg");
  if(value==""||value==null){
    msg.text("验证码不能为空");
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
// 定义验证密码的函数
function pwdValidator(){
  var value = $("#password").val();
  var msg = $("#msg");
  if(value==""||value==null){
    msg.text("密码不能为空");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value.length !=6){
    msg.text("密码的长度不正确");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(!/^[a-zA-Z0-9]{6,20}$/.test(value)){
    msg.text("密码输入不正确");
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
// 定义确认密码验证的函数
function pwdRepeatValidator(){
  var value = $("#pwdRepeat").val();
  var msg = $("#msg");
  var pwd = $("#password").val();
  if(value==""||value==null){
    msg.text("密码不能为空");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value.length !=6 ){
    msg.text("密码的长度不正确");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(!/^[a-zA-Z0-9]{6,20}$/.test(value)){
    msg.text("密码输入不正确");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value != pwd){
    msg.text("两次交易密码输入不一致");
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
  if(!mobilelValidator()||!pwdValidator()||!pwdRepeatValidator()){
    return false;
  }else{
    alert('通过验证')
  }
  return true;
}
