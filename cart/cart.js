if(!sessionStorage.getItem("user")) {
	sessionStorage.setItem("backUrl",window.location.href);
	layer.alert("您未登录或登录超时，请重新登陆！",{ closeBtn: 0},() => {
		window.location.href = '../login/login.html';
	});
}else {
	// 获取到当前登录用户的用户名
	var user = sessionStorage.getItem("user")
	// 使用用户名拿到购物车的数据并进行动态渲染
	$('ul.list').html(
		cart.filter(item => item.user === user)
			.map(item => {
				var target = product.find(item2 => item2.id === item.pid);
				return `
						<li>
							<i class="checkbox checked normal show"></i>
							<i class="checkbox edit"></i>
							<img src="${target.avatar}" />
							<div class="detail">
								<h3>${target.name}</h3>
								<p>${target.remark}</p>
								<div class="count-wrapper">
									<button class="btn-decrease">-</button>
									<span class="count">${item.count}</span>
									<button class="btn-increase">+</button>
								</div>
								<div class="price-wrapper">
									￥<span class="price">${target.price}</span>.00
								</div>
							</div>
						</li>
					`;
			})
			.join("")
	);
	$('button.btn-decrease').on('click',function(){
		$(this).next().next().attr('disabled',false);
		var newCount = parseInt($(this).next().text())-1;
		$(this).next().text(newCount);
		$(this).attr('disabled',newCount === 1);
		updateTotal();
	})
	$('button.btn-increase').on('click',function(){
		$(this).prev().prev().attr('disabled',false);
		var newCount = parseInt($(this).prev().text()) + 1;
		$(this).prev().text(newCount);
		$(this).attr('disabled',newCount === 10);
		updateTotal();
	})
	updateTotal();
}

// 给右上角的按钮绑定点击事件
$('button.btn-begin-edit, button.btn-end-edit').on('click', () => {
	// $('button.btn-begin-edit, button.btn-end-edit').toggleClass("show");		//切换class值
	// $('ul.list i.checkbox').toggleClass("show");
	// $('.footer-normal, .footer-edit').toggleClass("show");
	
	//使用jQuery简化 
	// toggleClass() 
	// 只有一个参数表示 对class进行有无的切换，有两个参数时表示对指定的操作的class进行切换
	// （进行相同操作时可以使用and函数并起来一起操作）
	$('button.btn-begin-edit, button.btn-end-edit')
	.add('ul.list i.checkbox')
	.add('.footer-normal, .footer-edit')
	.toggleClass("show");
	$('i.checkbox.all.normal').toggleClass(
		"checked",
		$('ul.list i.checkbox.normal:not(.checked)').length === 0
	);
	updateTotal();
});

// 全选反选联动
// 下联动上
$('i.checkbox.all.normal').on('click', function() {
	$(this).toggleClass('checked');
	$('ul.list i.checkbox.normal').toggleClass("checked",$(this).hasClass("checked"));
	updateTotal();
});
$('i.checkbox.all.edit').on('click', function() {
	$(this).toggleClass('checked');
	$('ul.list i.checkbox.edit').toggleClass("checked",$(this).hasClass("checked"));
	updateTotal();
});
// 上联动下
$('ul.list i.checkbox.normal').on('click', function() {
	$(this).toggleClass('checked');
	$('i.checkbox.all.normal').toggleClass("checked",$('ul.list i.checkbox.normal:not(.checked)').length === 0);
	updateTotal();
});
$('ul.list i.checkbox.edit').on('click', function() {
	$(this).toggleClass('checked');
	$('i.checkbox.all.edit').toggleClass("checked",$('ul.list i.checkbox.edit:not(.checked)').length === 0);
	updateTotal();
});

// 公共函数		用于更新显示总金额
function updateTotal() {
	var total = 0;
	$('ul.list li:has(i.checkbox.normal.checked)').each(function(i, item) {
		var price = parseInt($(item).find('span.price').text());
		var count = parseInt($(item).find('span.count').text());
		total += price * count;
	});
	$('span.total').text(total);
}


//删除购物记录
$('button.btn-remove').on('click',function(){
	var $checkboxes = $('ul.list i.checkbox.edit.checked');
	if($checkboxes.length === 0){
		layer.alter('请至少选择一条购物记录');
		return;
	}
	layer.confirm("月底了，没钱了？！",{closeBtn: 0},() => {
		$checkboxes.each(function(i,checkbox){
			$(checkbox).closest('li').remove();
		})
		//如果你的删除操作清空了购物车
		if($('ul.list li').length === 0){
			$('button.btn-begin-edit, button.btn-end-edit')
			.add('.footer-normal, .footer-edit')
			.removeClass("show");
		}
		layer.closeAll('dialog');
		$('ul.list').replaceWith('<p>去<a href="../home/home.html">商城</a>看看吧！</p>')
	});
});