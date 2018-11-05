$(function(){
  //获取验证码
  //确定按钮点击事件
  $('#check-btn').on('click',function(){
    validateForm()
    if(validateForm()){
      // window.location.href = '';
    }
  });
})
//注册表单验证

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
//判断按钮是否可以点击
function isclick(){
  if (validateForm()) {
    document.getElementById("check-btn").disabled = "";
  }
}