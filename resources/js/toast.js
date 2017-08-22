/**
 * Created by newmind on 2017/8/22.
 */

// <button onclick="Toast('已成功',10000);">Toast</button>

//自定义弹框
function Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="width: 30%;min-width: 0.8rem;min-height: 0.3rem;color: rgb(255, 255, 255); line-height: 0.3rem;text-align: center;border-radius: 5px;position: fixed;top: 40%;z-index: 999999;font-size: 0.25rem; padding-top:1.2rem;padding-bottom:0.2rem;  background:rgba(0, 0, 0,0.7) url('resources/images/001.png') top 0.4rem center no-repeat; background-size: 0.6rem 0.44rem;";
    m.style.left = ((document.body.clientWidth - document.body.clientWidth*3/10) / 2) + 'px';
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);

};



