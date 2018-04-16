/**
 * Created by lailai on 2017/9/20.
 */
$(function(){
    var app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },
        // deviceready Event Handler
        onDeviceReady: function() {
            this.receivedEvent();
        },
        $$: function(id) {
            return document.getElementById(id);
        },
        receivedEvent: function(){
            var _this = this;
            var getDomLabrary = this.$$('openLabrary');
            getDomLabrary.onclick = function(){
                $(".meng").hide();
                // 打开图片库
                navigator.camera.getPicture(onSuccess, onFail, {
                    /*quality: 50,                                       // 相片质量是50
                     sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, // 设置从图片库获取
                     destinationType: Camera.DestinationType.DATA_URL       // 以base64返回*/
                    quality : 75,
                    destinationType : Camera.DestinationType.DATA_URL,
                    sourceType : Camera.PictureSourceType.CAMERA,
                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                });




            };
            var selectPhoto = this.$$('selectPhoto');
            selectPhoto.onclick = function(){
                $(".meng").hide();
                // 打开图片库
                navigator.camera.getPicture(onSuccess, onFail, {
                    /*quality: 50,   */
                    quality : 75,                                  // 相片质量是50
                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, // 设置从图片库获取
                     destinationType: Camera.DestinationType.DATA_URL ,      // 以base64返回

                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                });
            };
            var upImage = this.$$('upImage');
            upImage.onclick = function(){
                $(".meng").hide();
                // 打开图片库
                navigator.camera.getPicture(onSuccessUP, onFail, {
                    /*quality: 50,   */
                    quality : 75,                                  // 相片质量是50
                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, // 设置从图片库获取
                    destinationType: Camera.DestinationType.DATA_URL ,      // 以base64返回

                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                });
            };

            var downImage = this.$$('downImage');
            downImage.onclick = function(){
                $(".meng").hide();
                // 打开图片库
                navigator.camera.getPicture(onSuccessDOWN, onFail, {
                    /*quality: 50,   */
                    quality : 75,                                  // 相片质量是50
                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, // 设置从图片库获取
                    destinationType: Camera.DestinationType.DATA_URL ,      // 以base64返回

                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                });
            };

            var imageAll = this.$$('imageAll');
            imageAll.onclick = function(){
                $(".meng").hide();
                // 打开图片库
                navigator.camera.getPicture(onSuccessALL, onFail, {
                    /*quality: 50,   */
                    quality : 75,                                  // 相片质量是50
                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, // 设置从图片库获取
                    destinationType: Camera.DestinationType.DATA_URL ,      // 以base64返回

                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                });
            };

            function onSuccess(imageData) {

                _this.$$('myImage').src = "data:image/jpeg;base64," + imageData;
            }
            function onSuccessUP(imageData) {

                _this.$$('upImage').src = "data:image/jpeg;base64," + imageData;
            }
            function onSuccessDOWN(imageData) {

                _this.$$('downImage').src = "data:image/jpeg;base64," + imageData;
            }
            function onSuccessALL(imageData) {

                _this.$$('imageAll').src = "data:image/jpeg;base64," + imageData;
            }
            function onFail(message) {
               /* alert('Failed because: ' + message);*/
            }
        }
    };

    app.initialize();
})