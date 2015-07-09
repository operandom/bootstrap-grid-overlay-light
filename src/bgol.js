(function() {

    'use strict';

    var vendor = 'bgol-',
        wrapper = createElement('wrapper', true),
        container = createElement('container'),
        row = createElement('row'),
        style = document.createElement('style'),
        button = document.createElement('button'),
        key = vendor + 'show'
    ;

    document.head.appendChild(style);
    style.setAttribute('rel', 'stylesheet');
    style.appendChild(document.createTextNode('.' + vendor + [
        'wrapper{position:fixed;z-index:10000;top:0;left:0;width:100%;height:100vh;pointer-events:none;}',
        'wrapper *{height:100%;}',
        'col-xs-1{outline:1px solid rgba(0,0,0,.05)}',
        'col-inner{outline:1px solid rgba(0,0,0,.15);background:rgba(255,255,255,.1)}',
        'switch{position:fixed;z-index:10001;display:block;top:100vh;left:15px;margin-top:-45px;width:30px;height:30px;font-size:12px;transform:rotate(90deg);border: 1px solid rgba(255, 255, 255, 0.1);background:rgba(0,0,0,.5);color:#FFF;transition:all 200ms ease}',
        'switch:hover{background:rgba(0,0,0,.8);}'
    ].join('.' + vendor)));

    wrapper.appendChild(container);
    container.appendChild(row);
    createColumns(row, 12);

    if (sessionStorage.getItem(key) === 'true') {
        document.body.appendChild(wrapper);
    }

    document.body.appendChild(button);
    button.className = vendor + 'switch glyphicon glyphicon-align-justify';
    button.onclick = function() {
        button.blur();
        if (wrapper.parentElement === document.body) {
            document.body.removeChild(wrapper);
            sessionStorage.setItem(key, false);
        } else {
            document.body.appendChild(wrapper);
            sessionStorage.setItem(key, true);
        }
    };


    function createElement(className, simple) {
        var el = document.createElement('div');
        el.className = vendor + className + (simple ? '' : ' ' + className);
        return el;
    }

    function createColumns(el, nbr) {
        var i,col;

        for (i = 0; i < nbr; i++) {
            col = createElement('col-xs-1');
            col.appendChild(createElement('col-inner',true));
            el.appendChild(col);
        }
    }

})();
