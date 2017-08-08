$(function(){
	//数据列表中的选项卡
    $('ul.tab li').first().addClass('curr');
     	$('div.tab_list>div').eq(0).show().siblings().hide();
        $('ul.tab li').click(function(){
        $(this).addClass('curr').siblings().removeClass('curr');
        $('div.tab_list>div').eq($(this).index()).show().siblings().hide();
        
    })
     //展开按钮
    $('#logo_big').hide();
    $('#btn_fold').click(function(){
		if($('#fold_all').hasClass('top')){
			$('#fold_all').removeClass('top').addClass('top_max');
			$('#logo').hide();
		    $('#logo_big').show();
		}else{
			$('#fold_all').removeClass('top_max').addClass('top');
		    $('#logo_big').hide();
			$('#logo').show();
		}
	})
    //导航
    $('.second_nav>ul>li').first().addClass('curr');
    $('.second_nav>ul>li').click(function(){
    	$(this).addClass('curr').siblings().removeClass('curr');
    })	
    $('#btn_add').click(function(){
					openModal();
				    closeModal();
				})
			closeModal();
})
 
//打开模态框
	function openModal(){
			var fatherBody = $(window.top.document.body);
			var id = 'pages_m';
			var dialog = $('#' + id);
			if (dialog.length == 0) {
				dialog = $('<div class="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="' + id + '"/>');
				dialog.appendTo(fatherBody);
			}
			dialog.load("model.html", function() {
				dialog.modal({
					backdrop: false
					});
			});
			fatherBody.append("<div id='backdropId' class='modal-backdrop fade in'></div>");
		}
		//关闭模态框
		function closeModal(){
			var fatherBody = $(window.top.document.body);
			fatherBody.find("#pages_m").on('hidden.bs.modal', function (e) {
			fatherBody.find("#pages_m").remove();
			fatherBody.find(".modal-backdrop").remove();
			});
		}