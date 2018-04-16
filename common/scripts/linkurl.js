var linkURL={
    domain:"http://182.92.224.208",
    //domain:"http://beijing.scity.cn,"
    //domain:"http://182.92.178.106:8070"
}

//获取子栏目列表
function getChannelList(key,fn){//key为cms数据库对应信息里面的栏目id的关键词，fn是渲染页面的方法
    loadingShow();
    $.ajax({
         type: "GET",
         url: linkURL.domain+'/bjappcms/scityapp/serviceList.jspx?position='+key,
         dataType: "json",
         success: function(ret){
                     //alert(JSON.stringify(ret));
                     //alert(ajaxURL);
                       if(ret){
                            // console.log($api.jsonToStr(ret));
                            var data = ret;
                            fn&&fn(data);//判断是否有传递过来的fn函数，如果有，执行(因为数据库调用不支持同步，所以通过传递函数的方式解决)
                            localStorage.key=ret;
                        }else{
                //          alert('网络错误，请重试！');
                        }
                  },
        complete:function(){
                    loadingHide();
                  },
        error:function(){
                    toast("数据获取失败，请稍后重试");
                  }
    });
};


//根据栏目id获取文章
function getArticle (channelId,typeId,pageNumber,pageSize,fn){//文章所属栏目的id，typeId是文章类型id，fn是渲染页面方法
    var url = "";
    if(typeId==undefined||typeId==null){
        url = linkURL.domain+"/bjappcms/scityapp/contentList.jspx?channelId="+channelId+"&pageNumber="+pageNumber+"&pageSize="+pageSize;
    }else{
        url = linkURL.domain+"/bjappcms/scityapp/contentList.jspx?channelId="+channelId+"&typeId="+typeId+"&pageNumber="+pageNumber+"&pageSize="+pageSize;
    }
    
    loadingShow();
    $.ajax({
         type: "GET",
         url: url,
         dataType: "json",
         success: function(ret){
                     //alert(JSON.stringify(ret));
                     //alert(ajaxURL);
                       if (ret) {
                            var data = ret;
                            // console.log($api.jsonToStr(data));
                            fn&&fn(data);//判断是否有传递过来的fn函数，如果有，执行(因为数据库调用不支持同步，所以通过传递函数的方式解决)
                            loadingHide();
                        }else {
                            loadingHide();
                        }
                  },
        complete:function(){
                    loadingHide();
                  },
        error:function(){
                    toast("数据获取失败，请稍后重试");
                  }
    });   
};
    
//根据文章id获取文章内容
function getArticleById(id,fn){//key为cms数据库对应信息里面的栏目id的关键词，fn是渲染页面的方法
    loadingShow();
    $.ajax({
         type: "GET",
         url: linkURL.domain+'/bjappcms/scityapp/contentDetail.jspx?id='+id,
         dataType: "json",
         success: function(ret){
                     //alert(JSON.stringify(ret));
                     //alert(ajaxURL);
                       if(ret){
                            // console.log($api.jsonToStr(ret));
                            var data = ret;
                            
                            fn&&fn(data);//判断是否有传递过来的fn函数，如果有，执行(因为数据库调用不支持同步，所以通过传递函数的方式解决)
                            
                        }else{
                            
                            //alert('网络错误，请重试！');
                        }
                  },
        complete:function(){
                    loadingHide();
                  },
        error:function(){
                    toast("数据获取失败，请稍后重试");
                  }
    });
};


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?07ec9308e774a501fee7ff15eaff9a5a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();