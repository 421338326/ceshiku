function setRem() {
    // 获取屏幕宽度
    var winW = document.documentElement.clientWidth;
    // 以宽度640为标准
    var uiW = 375;
  
    var rate = winW / uiW;
    document.documentElement.style.fontSize = rate*100 + "px";
  
}
setRem();
window.onresize = function () {
    setRem();
}