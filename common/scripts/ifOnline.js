(function(win){
    function BBNetwork(callback){
        this.navigator = win.navigator ;
        this.callback = callback ;
        this._init() ;
    } ;
    var bbNetworkProto = BBNetwork.prototype ;
    bbNetworkProto._init = function(){
        var that = this ;
        win.addEventListener("online",function(){
            that._fnNetworkHandler() ;
        },true) ;
        win.addEventListener("offline",function(){
            that._fnNetworkHandler() ;
        },true) ;
    } ;
    bbNetworkProto._fnNetworkHandler = function(){
        this.callback && this.callback(this.navigator.onLine ? "online" : "offline") ;
    } ;
    bbNetworkProto.isOnline = function(){
        return this.navigator.onLine ;
    } ;
    win.BBNetwork = BBNetwork ;
})(window) ;
$(function(){
    var bbNetwork = new BBNetwork(function(status){
        if("online" != status){
            loadingFail("无网络，请检查网络设置");
        }
        else{
            //el.hide() ;
            //loadingSuccess("网络恢复")
        }
    }) ;
    if(!bbNetwork.isOnline()){
        loadingFail("无网络，请检查网络设置");
    }
}) ;