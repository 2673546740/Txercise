(function ($) {
	//拖拽移动使用方法  $('移动容器').move()
	//此容器下需要有一个p标签
	$.fn.move = function () {
		var target = $(this).find('p');
		var parents = this;
		$(target).on('mousedown',function (e) {
			$(document).on('mousemove',function (event) {
				if (event.pageX-e.offsetX <0 || event.pageY-e.offsetY < 0) {
					return false;
				} else{
					$(parents).css({
						'left': event.pageX-e.offsetX,
						'top' : event.pageY-e.offsetY,
					})
				}
			})
		})
		$(target).on('mouseup',function () {
			$(document).unbind('mousemove')
		})
	};
	//获取url中的参数，使用方法$(document).getURLParms()
	//可以选择是否传入参数
	$.fn.getURLParms = function (url) {
		if (url) {
			var urls = url.split('?')[1].split('&');
		}else{
			var urls = window.location.href.split('?')[1].split('&');
		}
		var parms = {};
		for (var i = 0 ; i < urls.length ; i++) {
			parms[urls[i].split('=')[0]] = urls[i].split('=')[1];
		}
		return parms;
	}
	$.extend({
		//获取url中的参数，使用方法$.getURLParms();
		//可以选择是否传入参数
		getURLParms:function (url) {
			if (url) {
				var urls = url.split('?')[1].split('&');
			}else{
				var urls = window.location.href.split('?')[1].split('&');
			}
			var parms = {};
			for (var i = 0 ; i < urls.length ; i++) {
				parms[urls[i].split('=')[0]] = urls[i].split('=')[1];
			}
			return parms;
		},
		//格式化钱，使用方法$.formatterMoney();
		formatterMoney:function (money) {
			var money = money.toString();
			if (money.indexOf(".")>0) {
				var str = money.split('.')[1].length<2?money.split('.')[1]+"0":money.split('.')[1].substring(0,2);
				return money = money.split('.')[0]+str;
			} else{
				return money = money+"00";
			}
		}
	});
})(jQuery)
