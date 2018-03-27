// ==UserScript==
// @name         防刷知乎提示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  防刷知乎，人人有责
// @author       leto
// @license MIT
// @match        *.zhihu.com/*
// @grant        GM_addStyle
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // window.alert('stop');
    let root = document.getElementById('root');
    root.classList.add('leto-blur');
    let myWindow = document.createElement('div');
    myWindow.id = 'leto-tip';
    let tip = '确保打开的网页确实有用\n在这种情况下，默念 5次--\n “我问心无愧地为了学习” \n点击按钮关闭遮罩';
    let inner = document.createElement('div');
    inner.id = 'leto-inner';
    inner.innerText = tip;
    myWindow.append(inner);
    document.body.appendChild(myWindow);
    let closeBtn = document.createElement('button');
    closeBtn.innerText = 'x';
    closeBtn.id = 'leto-close';
    closeBtn.onclick = function () {
        myWindow.style.display = 'none';
        root.classList.remove('leto-blur');
    };
    setTimeout(()=>{myWindow.append(closeBtn);}, 3000);
    let blurWindow = document.createElement('div');
    blurWindow.id = 'leto-blur';
    root.append(blurWindow);
    /*jshint multistr: true */
    GM_addStyle('\
                #leto-tip {\
                  position: fixed;\
                  width: 96%;\
                  height: 96%;\
                  top: 2%;\
                  left: 2%;\
                  z-index:1000;\
                  background: rgba(0,0,0,0.55);\
                  display: table;\
                }\
                #leto-close {\
                  background: #f6dd2a;\
                  color: #000;\
                  width: 40px;\
                  height: 40px;\
                  position: absolute;\
                  right: 2%;\
                }\
                .leto-blur {\
                  -webkit-filter: blur(10px);\
                  -moz-filter: blur(10px);\
                  -o-filter: blur(10px);\
                  -ms-filter: blur(10px);\
                }\
                #leto-inner {\
                  display: table-cell;\
                  vertical-align: middle;\
                  color: #fff;\
                  text-align: center;\
                  font-size: 60px;\
                }');
})();
