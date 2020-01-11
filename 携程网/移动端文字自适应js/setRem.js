function setRem() {
    // 获取屏幕宽度
    var winW = document.documentElement.clientWidth;
    // 以宽度640为标准
    var uiW = 320;
    // 比例
    if(winW>768){
        winW=768;
    }
    var rate = winW / uiW;
    document.documentElement.style.fontSize = rate*100 + "px";
    document.getElementsByTagName("body")[0].style.width="768px";
    console.log(document.body.clientWidth)
}
setRem();
window.onresize = function () {
    setRem();
}