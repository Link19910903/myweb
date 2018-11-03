$(function(){
  //获取验证码
  //确定按钮点击事件
  $('#check-btn').on('click',function(){
    validateForm()
  });
})
//表单验证
// 定义验证密码的函数
function oldpwdValidator(){
  var value = $("#oldPassword").val();
  var msg = $("#msg");
  if(value==""||value==null){
    msg.text("密码不能为空");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value.length !=8){
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
// 定义验证密码的函数
function pwdValidator(){
  var value = $("#password").val();
  var msg = $("#msg");
  if(value==""||value==null){
    msg.text("密码不能为空");
    msg.attr("class","error");
    msg.attr("class","iconfont icon-warn");
    return false;
  }else if(value.length !=8){
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
  }else if(value.length !=8 ){
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
  if(!oldpwdValidator()||!pwdValidator()||!pwdRepeatValidator()){
    return false;
  }else{
    alert('通过验证')
  }
  return true;
}
