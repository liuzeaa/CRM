~function () {
	function fn(){
		var desW = 640;
    	var winW = document.documentElement.clientWidth;
    	document.documentElement.style.fontSize = winW / desW * 100 + 'px';
	}
    fn();
    $(window).on('resize', fn);
}();