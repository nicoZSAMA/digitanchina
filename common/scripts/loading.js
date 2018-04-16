
function loadingShow(el){
    el=el||'加载中'
    $('#loading').remove();
    var _html="";
    _html+='<div id="loading" class="loadingBg"><div class="loading-wrap">'
        +'<div class="loading-text">'
            +'<span class="loading-icon" am-mode="toast-loading"></span>'
            +el
        +'</div>'
    +'</div></div>';
    $('body').append(_html);
    setTimeout('loadingHide()',20000);
}
function loadingSuccess(el){
    el=el||"";
    $('#loading').remove();
    var _html="";
    _html+='<div id="loading" class="loadingBg"><div class="loading-wrap">'
        +'<div class="loading-text">'
            +'<span class="loading-icon" am-mode="toast-success"></span>'
            +el
        +'</div>'
    +'</div></div>';
    $('body').append(_html);
    setTimeout('loadingHide()',2500);
}
function loadingFail(el){
    el=el||"";
    $('#loading').remove();
    var _html="";
    _html+='<div id="loading" class="loadingBg"><div class="loading-wrap">'
        +'<div class="loading-text">'
            +'<span class="loading-icon" am-mode="toast-fail"></span>'
            +el
        +'</div>'
    +'</div></div>';
    $('body').append(_html);
    setTimeout('loadingHide()',2500);
}
function loadingHide(){
    $('#loading').remove(); 
}
function toast(el){
    /*if (!window.navigator.onLine) {
        return loadingFail("无网络，请检查网络设置");
    }*/
    $('#msg').remove();
    var _msghtml="";
    _msghtml+='<div id="msg">';
        _msghtml+=el;
    _msghtml+='</div>';

    $(document.body).append(_msghtml);
    $("#msg").animate({
        bottom:'25px'
    },100,function(){
        setTimeout("$('#msg').remove();",3000)
    });
}
function isOnline(){
    if(!window.navigator.onLine) {
        $('#msg').remove();
        loadingFail("无网络，请检查网络设置");
        $(".loading-icon").remove();
        return;
    }
}
function isApp() {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/dfhapp/)){
        return true;
    }else{
        return false;
    }
}


/*身份证验证*/

var aCity={
    11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
};


function isCardID(sId){
    /*  var sId =sId.toString();*/
    var iSum=0 ;
    var info="" ;
    if(!/^\d{17}(\d|x)$/i.test(sId)){
        return false;
    }
    sId=sId.replace(/x$/i,"a");

    if(aCity[parseInt(sId.substr(0,2))]==null){
        return false;
    }
    sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
    var d=new Date(sBirthday.replace(/-/g,"/")) ;
    if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())){
        return false;
    };
    for(var i = 17;i>=0;i --){
        iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
    }
    if(iSum%11!=1){
        return false;
    }
    //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
    return true;
}
function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
function openLink(text) {//在微信中打开，暂时没需求要求做
    var text = text|| '请在浏览器中打开哦';
    /*var openLinkDom ='<div id="linkDom" style="position: absolute;z-index: 1000000;top: 0;right: 0;bottom: 0;left: 0;text-align: center;padding-top: 30%;"><img src="../../../ytcommon/common/image/openlink-min.png" alt=""><img src="../../../ytcommon/common/image/openlinkArrow-min.png" alt="" style="position:absolute;top: 2%;right: 15%;"><p style="color:#fff">'+text+'</p></div>';
    if ($("#mask")) {
        $("#linkDom").remove();
        $("#mask").after(openLinkDom);
    }*/
    alert(text);
}
function insertDom(callbackUrl){//插入登录元素
    /*var _html="";
    _html+='<div id="login">'
        +'<div class="title">登录</div>'
        +'<div class="logo"><img src="/beijing/app5service/login/images/logo.png" width="100px"></div>'
        +'<div class="tip">由北京服务您提供</div>'
        +'<div class="keywrap">'
            +'<div class="key">'
                +'<div><img  src="/beijing/app5service/login/images/loginpage_iphone.png" width="24px"></div>'
                +'<div><input id="username" data-name="login" placeholder="手机号" type="tel"></div>'
            +'</div>'
            +'<div class="key">'
                +'<div><img src="/beijing/app5service/login/images/loginpage_password.png" width="24px"></div>'
                +'<div><input id="userpwd" data-name="login"  placeholder="密码" type="password"></div>'
            +'</div>'
        +'</div>'
        +'<div id="loginButton" class="loginButton">登录</div>'
        +'<div class="download">注册及找回密码&nbsp;&nbsp;请点<a href="http://beijing.scity.cn/m">这里</a></div>'
    +'</div>';
    $('body').append(_html);*/
    //登录按钮控制
    /*$("[data-name=login]").on('input',function(){
        if($(this).val()!=""){//value 值不为空 显示关闭按钮
            $('.inputCloseBtn').remove();
            var closehtml="";
            closehtml+='<div class="inputCloseBtn"><img src="/beijing/app5service/login/images/icons-close.png" width="20px;"></div>'
            $(this).after(closehtml);
            $(".inputCloseBtn").on('click',function(){
                $(this).prev('input').val('');
                $(this).remove();
            })
        }else{//否则移除关闭按钮
             $('.inputCloseBtn').remove();
        }
        //判断输入是否为空增加登录事件
        if($("#username").val()!=""&&$("#userpwd").val()!=""){
            $("#loginButton").addClass('active');
            $("#loginButton").unbind();
            $("#loginButton").bind('click',function(){
                checkUser();
            });
        }else{
            $("#loginButton").removeClass('active');
            $("#loginButton").unbind();
        }
    })*/
    window.sessionStorage.setItem('callbackUrl',callbackUrl);
    location.href="../login/login.html"
}
function removeLogin(){
    $("#login").remove();
}
function checkUser(){
    $('.inputCloseBtn').remove();//移除关闭按钮
    var username=$("#username").val();
    var userpwd=$("#userpwd").val();
    if(username==""){
        toast('请输入用户名');
        return;
    }else if(userpwd==""){
        toast('请输入密码');
        return;
    }else{
        login(username,userpwd);
    }
}
function login(name,pwd){
    loadingShow('登录中');
    $.ajax({
         type: "POST",
         url: linkURL.domain+"/bjappcms/scity/login.jspx",
         dataType: "json",
         data:{
            username: name,
            password : pwd,
            siteid: '110000'
         },
         success: function(ret){
                        if (ret) {
                            if (ret.status != '' && ret.status == 'success') {       
                                getUserInfo(ret.accessTicket);//登录成功去获取用户信息
                            } else {
                                loadingFail(ret.content);
                            }
                        } else {
                            loadingFail('网络不稳定，请稍后再试！');
                        }
                  },
        error:function(){
                    loadingFail("数据获取失败，请稍后重试");
                  }
    });
}
function getUserInfo(accessTicket){
    $.ajax({
         type: "POST",
         url: linkURL.domain+"/bjappcms/scity/getBasicUserInfo.jspx",
         dataType: "json",
         data:{
            accessTicket: accessTicket
         },
         success: function(ret){
                        if (ret) {
                            if (ret.status != '' && ret.status == 'success') {       
                                window.sessionStorage.setItem('userInfo',JSON.stringify(ret));//获取用户信息成功
                                //goService();//在各个服务首页执行原服务函数
                                //removeLogin();//移除登录控件
                                if(window.sessionStorage.getItem('callbackUrl')==null){
                                    loadingFail('回调地址失效');
                                    return;
                                }
                                location.href=window.sessionStorage.getItem('callbackUrl');
                            } else {
                                loadingFail(ret.content);
                            }
                        } else {
                            loadingFail('网络不稳定，请稍后再试！');
                        }
                  },
        error:function(){
                    loadingFail("数据获取失败，请稍后重试");
                  }
    });
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
$(function(){
    
   /* $(document).ajaxStart(function() {
        isOnline();
    });
    $(document).ajaxStop(function(){  
        isOnline();
    });*/
    /*$('body').on('click',function(){
        if($('input:focus').length==0){
            isOnline();
        }
    })*/


})