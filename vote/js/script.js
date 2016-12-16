window.onload = function() {
	fontSelf();
}
window.onresize = function() {
	fontSelf();
};

function fontSelf() {
	var wHtml = document.getElementById('html');
	var w = document.documentElement.clientWidth;
	w = w > 768 ? 768 : document.documentElement.clientWidth;
	wHtml.style.fontSize = w * 0.045 + 'px';
};

//timestamp = 0;
////时间戳转码->时间
//var unixTimestamp = new Date(timestamp * 1000) ;
//commonTime = unixTimestamp.toLocaleString();
//alert(commonTime)

for(var i = 0; i < $(".btn-lg").length; i++) {
	$(".btn-lg").parent().eq(i).attr('id', i);
}

function addZ(a){
	return a < 10 ? '0' + a : '' + a;
}

$(".btn-lg").click(function() {
		if($(this).is('.disabled1')) {
			$('.modal-body').html('你已投过票！！！');
		} else {
			$.ajax({
				type: "get",
				url: "http://192.168.0.163:8080/vote/index",
				data: {},
				dataType: "json",
				async: true,
				success: function(data) {
					$('.model-body').empty(); 
					document.cookie = "statu=data";
					
					var id;
					if(!data) {
						$.ajax({
							type: "get",
							url: "http://192.168.0.163:8080/vote/index",
							data: {
								id: $(this).parent().attr('id')
							},
							dataType: "json",
							async: true,
							success: function() {

								$('.modal-body').html('投票成功！！！');
								$('.btn-lg').addClass('disabled1');
							}
						});

					} else {
						$('.modal-body').html('你已投过票！！！');
						$('.btn-lg').addClass('disabled1');
					}

				}
			});

		}

	})

			//方法二
			//function dispose(data) {
			//	var nowTime = showTime();
			//	$('.model-body').empty(); //清空show里面的所有内容
			//	$.each(data, function() {
			//		if(!(data.time) || (nowTime - time > 86400)) {
			//			$.ajax({
			//				type: "post",
			//				url: "",
			//								data: {
			//									id: $(this).parent().attr('id'),
			//									time: time
			//								},
			//				dataType: 'json',
			//				async: true,
			//				success: function() {
			//					$('.modal-body').html('投票成功！！！');
			//					$('.btn-lg').addClass('disabled');
			//				}
			//			});
			//		} else {
			//			$('.modal-body').html('你已投过票！！！');
			//		}
			//	})
			//}
			//$(".btn-lg").click(function() {
			//	$.ajax({
			//		type: "post",
			//		url: "",
			//		data:{
			//			
			//		},
			//		dataType: "json",
			//		async: true,
			//		success: dispose(),
			//		error: function() {
			//			$('.modal-body').html('投票失败');
			//		}
			//	});
			//
			//});