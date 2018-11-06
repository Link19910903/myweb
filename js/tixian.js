window.onload = function() {

    var okyMOneys = 1000000.00; //模拟可用余额,实际使用的时候从数据库返回或其它的操作。
    var oGetAll = document.getElementById("getall");
    var oGetMoneys = document.getElementById("getmoneys");
    var oGetOut = document.getElementById("getout");
    var oKyye = document.getElementsByClassName("kyye")[0];


    oGetMoneys.oninput = function() //监听用户的输入给出相应提示。
    {
        if (oGetMoneys.value == "") {
            oGetOut.style.opacity = 0.4;
            document.getElementById("getout").disabled='none';

            oKyye.innerHTML = "可提现金额：￥1000000.00，"
        } else if (parseFloat(oGetMoneys.value) > okyMOneys) {
            oGetOut.style.opacity = 0.4;
            document.getElementById("getout").disabled='none';
            oKyye.innerHTML = "<font color=red>输入金额超过可提现金额</font>";
            $('#getall').attr('style','display: none')
        } else {
            var paroGetMoneys = parseFloat(oGetMoneys.value);
            var sxf = paroGetMoneys;
            var sjdz = paroGetMoneys;
            oKyye.innerHTML = "可提现金额：￥1000000.00，";
            $('#getall').attr('style','display: inline-block')
            // oKyye.innerHTML = "可提现金额：￥1000000.00,<a href="javascript:;" id="getall">全部提现</a>";
            oGetOut.style.opacity = 1;
            document.getElementById("getout").disabled='';
            //这里就可以进行与后台交互的操作比如ajax操作等。
        }
    };
    //全部提现
    $('#getall').on('click',function(){
            oGetMoneys.value = okyMOneys;
    });

};

//点击下一步按钮弹出密码输入框
document.getElementById("getout").addEventListener('click',function(){
    $('#popup').attr('style','display: block')
    $('#backdrop').attr('style','display: block')
    document.getElementById("pwd-input").focus(function(event) {
        this.value = ''
    });
})

//弹出密码框后执行的函数
 var $input = $(".fake-box input");
 $("#pwd-input").on("input", function() {
     var pwd = $(this).val().trim();
     for (var i = 0, len = pwd.length; i < len; i++) {
         $input.eq("" + i + "").val(pwd[i]);
     }
     $input.each(function() {
         var index = $(this).index();
         if (index >= len) {
             $(this).val("");
         }
     });
     if (len == 6) {
         //执行其他操作
     }
 });


 var password = 123456;  //模拟用户存储的交易密码
 //输入六位密码后执行下面的函数 判断密码是否正确
 function checkpsd(){
    var psd = $('#pwd-input').val();
    // console.log(psd)
    //如果密码验证成功跳转到提现成功页面
    if (psd == password) {
        window.location.href = '../setting/success.html';
    }else {
        // $('#popup').attr('style','display: none')
        // $('#backdrop').attr('style','display: none')
        $('#guanbi').click();
        $('.forget').click();
    }
 }
 //点击关闭按钮取消密码输入
 document.getElementById("guanbi").addEventListener('click',function(){
    $('#popup').attr('style','display: none')
    $('#backdrop').attr('style','display: none')
    document.getElementById("pwd-input").value = '';
    $('.fake-box').children().val('')
})
//获取输入的金额并传入弹出框中
function getNum(){
    var num = $('#getmoneys').val()
    $('#jine').text('￥'+num)
}

//密码输入错误弹出提示框
//mui初始化
mui.init({
    swipeBack: true //启用右滑关闭功能
});
// var info = document.getElementById("info");
document.getElementById("confirmBtn").addEventListener('click', function() {
    var btnArray = ['重新输入', '忘记密码'];
    mui.confirm('', '交易密码不正确', btnArray, function(e) {
        if (e.index == 0) {
            //点击重新输入执行的函数
            $('#popup').attr('style','display: block')
            $('#backdrop').attr('style','display: block')
            $('#pwd-input')[0].focus()
        } else {
            //点击点击忘记密码执行的函数 跳转到手机验证登陆页面
            window.location.href = '../login/identity.html';

        }
    })
});