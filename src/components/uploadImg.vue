<template>
    <div>
        <template v-if="false">
            <form id="uploadForm" enctype="multipart/form-data" method="post" action="XXXXXX">
                <input type="file" name="imageFile" id="imageFile" onchange="fileSelected()"/>
            </form>
        </template>

        <template v-if="false">
            <div>文件预览功能</div>
            <input type="file" name="file" class="upload__input" @change="uploadChange"
                   accept="image/png,image/gif,image/jpg">
            <div class="imgSrc">
                <img :src="imgDataUrl">
            </div>
            <button @click="addSub">提交</button>
        </template>

        <template>
                <div class="upload">
                    <div class="upload_warp_left" @click="fileClick">
                        <button class="btn btn-success">上传图片</button>
                    </div>
                    <div class="upload_warp_text">
                        选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}; 最多上传<span class="text-primary"> 6</span>
                        张图片！
                    </div>
                    <div class="upload_warp" style="border: 1px solid white;">
                        <div class="upload_warp_img" v-show="imgList.length!=0">
                            <div class="upload_warp_img_div" v-for="(item,index) of imgList">
                                <div class="upload_warp_img_div_top">
                                    <div class="upload_warp_img_div_text">
                                        {{item.file.name}}
                                    </div>
                                    <span class="upload_warp_img_div_del" @click="fileDel(index)">X</span>
                                </div>
                                <img :src="item.file.src">
                            </div>
                        </div>
                    </div>


                    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>

                </div>
        </template>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue';
    export default{
        data(){
            return {
                imgDataUrl: '',//文件路径
                files: '',//文件资源

                imgList: [],
                size: 0,
            }
        },
        components: {},
        computed: {},
        methods: {
//            base64预览图片
            uploadChange(event){
                if (event.target.files.length > 0) {
                    this.files = event.target.files[0];  //提交的图片
                    alert(JSON.stringify(this.files), '//这里的file未获取到');
                    this.getBase64(event.target, (url) => {
                        //url---专为了base64
                        this.imgDataUrl = 'data:image/png;base64,' + url;   //显示的图片
                    });
                }

            },
//            将图片转为base64
            getBase64(file, callback){
                var maxWidth = 640;
                if (file.files && file.files[0]) {
                    var thisFile = file.files[0];
                    if (thisFile.size > 2019200) {
                        // mualert.alertBox("图片不能超过800K");
                        alert("图片不能超过2M");
                        return
                    }
                    ;
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var imgUrl = event.target.result;
                        var img = new Image();
                        img.onload = function () {
                            var canvasId = 'canvasBase64Imgid',
                                    canvas = document.getElementById(canvasId);
                            if (canvas != null) {
                                document.body.removeChild(canvas);
                            }
                            var canvas = document.createElement("canvas");
                            canvas.innerHTML = 'New Canvas';
                            canvas.setAttribute("id", canvasId);
                            canvas.style.display = 'none';
                            document.body.appendChild(canvas);
                            canvas.width = this.width;
                            canvas.height = this.height;
                            var imageWidth = this.width,
                                    imageHeight = this.height;
                            if (this.width > maxWidth) {
                                imageWidth = maxWidth;
                                imageHeight = this.height * maxWidth / this.width;
                                canvas.width = imageWidth;
                                canvas.height = imageHeight;
                            }
                            var context = canvas.getContext('2d');
                            context.clearRect(0, 0, imageWidth, imageHeight);
                            context.drawImage(this, 0, 0, imageWidth, imageHeight);
                            var base64 = canvas.toDataURL('image/png', 1);
                            var imgbase = base64.substr(22);
                            callback(imgbase)
                            //this.imgUrl =
                        }
                        img.src = imgUrl;
                    }
                    reader.readAsDataURL(file.files[0]);
                }
            },
//            提交表单
            addSub(){
                let data = {};
                let files = this.files;
                let param = new FormData(); //创建form对象
                if (files != '') {
                    param.append('file', files, files.name); //单个图片 ，多个用循环 append 添加
                } else {
//                    this.$message.error('请添加图片');
                }

                alert('图片数据', this.files, JSON.stringify(param));
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                };  //添加请求头
            },


//            上传多个文件开始
            fileClick(){
                document.getElementById('upload_file').click()
            },
            fileChange(el){//文件变化
                if (!el.target.files[0].size) return;
                this.fileList(el.target.files);
                el.target.value = ''
            },
            fileList(files){
                for (let i = 0; i < files.length; i++) {
                    this.fileAdd(files[i]);
                }
            },
            fileAdd(file){//新增文件
                this.size = this.size + file.size;//总大小
                let reader = new FileReader();
                reader.vue = this;
                reader.readAsDataURL(file);
                reader.onload = function () {
                    file.src = this.result;
                    this.vue.imgList.push({
                        file
                    });
                }
            },
            fileDel(index){
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
            },
            bytesToSize(bytes){
                if (bytes === 0) return '0 B';
                let k = 1000, // or 1024
                        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                        i = Math.floor(Math.log(bytes) / Math.log(k));
                return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            },
            dragenter(el){
                el.stopPropagation();
                el.preventDefault();
            },
            dragover(el){
                el.stopPropagation();
                el.preventDefault();
            },
            drop(el){
                el.stopPropagation();
                el.preventDefault();
                this.fileList(el.dataTransfer.files);
            }
//            上传多个文件结束


        },
    }

//传统方式
    /*var iMaxFilesize = 2097152; //2M
     window.fileSelected = function () {
     var oFile = document.getElementById('imageFile').files[0];    //读取文件
     var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
     if (!rFilter.test(oFile.type)) {
     alert("文件格式必须为图片");
     return;
     }
     if (oFile.size > iMaxFilesize) {
     alert("图片大小不能超过2M");
     return;
     }
     var vFD = new FormData(document.getElementById('uploadForm')),    //建立请求和数据
     oXHR = new XMLHttpRequest();
     oXHR.addEventListener('load', function (resUpload) {
     //成功
     }, false);
     oXHR.addEventListener('error', function () {
     //失败
     }, false);
     oXHR.addEventListener('abort', function () {
     //上传中断
     }, false);
     oXHR.open('POST', actionUrl);
     oXHR.send(vFD);
     };*/
</script>

<style scoped>
    .upload_warp_img_div_del {
        position: absolute;
        top: 6px;
        width: 16px;
        right: 4px;
    }

    .upload_warp_img_div_top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.4);
        line-height: 30px;
        text-align: left;
        color: #fff;
        font-size: 12px;
        text-indent: 4px;
    }

    .upload_warp_img_div_text {
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .upload_warp_img_div img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: middle;
    }

    .upload_warp_img_div {
        position: relative;
        height: 100px;
        width: 120px;
        border: 1px solid #ccc;
        margin: 0px 5px 5px 0px;
        float: left;
        line-height: 100px;
        display: table-cell;
        text-align: center;
        background-color: #eee;
        cursor: pointer;
    }

    .upload_warp_img {
        border-top: 1px solid #D2D2D2;
        padding: 5px 0 0 5px;
        overflow: hidden
    }

    .upload_warp_text {
        text-align: left;
        margin-bottom: 5px;
        padding-top: 5px;
        text-indent: 14px;
        border-top: 1px solid #ccc;
        font-size: 14px;
    }

    .upload_warp_right {
        float: left;
        width: 57%;
        margin-left: 2%;
        height: 100%;
        border: 1px dashed #999;
        border-radius: 4px;
        line-height: 130px;
        color: #999;
    }

    .upload_warp_left button {

        margin: 8px 5px 0px 5px;
        cursor: pointer;

    }

    .upload_warp_left {
        float: left;

    }

    .upload_warp {
        margin: 5px;

    }

    .upload {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        background-color: #fff;
        width: 770px;
        box-shadow: 0px 1px 0px #ccc;
        border-radius: 4px;
    }

    .hello {
        width: 770px;
        text-align: center;
    }
</style>
