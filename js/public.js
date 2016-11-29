/*--String.prototype--*/
~function (pro) {
    //->queryURLParameter:get url parameter or hash
    function queryURLParameter() {
        var reg = /([^?=&#]+)=([^?=&#]+)/g,
            obj = {};
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });

        //->HASH
        reg = /#([^?=&#]+)/g;
        this.replace(reg, function () {
            obj['HASH'] = arguments[1];
        });
        return obj;
    }

    //->formatTime:format time by template
    function formatTime(template) {
        template = template || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
        var reg = /\d+/g,
            ary = this.match(reg);
        template = template.replace(/\{(\d+)\}/g, function () {
            var index = arguments[1],
                res = ary[index] || '00';
            res.length < 2 ? res = '0' + res : null;
            return res;
        });
        return template;
    }

    pro.formatTime = formatTime;
    pro.queryURLParameter = queryURLParameter;
}(String.prototype);
	~function () {
		function fn(){
			var desW = 640;
	    	var winW = document.documentElement.clientWidth;
	    	document.documentElement.style.fontSize = winW / desW * 100 + 'px';
		}
	    fn();
	    $(window).on('resize', fn);
	}();	
