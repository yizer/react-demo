import './toast.css';

export let toastIt = function (text, time, options) {

    //如果已经弹出一个了，那么就先移除，这边只会有一个

    try {
        document.body.removeChild(document.querySelector('div.toast-it'));
    } catch (e) {

    }
    //开始创造
    var timeout = time || 2000;
    let toast = document.createElement('DIV');
    toast.classList.add('toast-it');
    let content = document.createTextNode(text);
    toast.appendChild(content);
    toast.style.animationDuration = timeout / 1000 + 's';
    for (let prop in options) {
        toast.style[prop] = options[prop];
    }
    //别被挡住了
    toast.style['z-index'] = 9999;
    document.body.appendChild(toast);
    setTimeout(function () {
        try {
            document.body.removeChild(toast);
        } catch (e) {

        }
    }, timeout - 100);
};
