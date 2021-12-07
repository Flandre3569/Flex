//动态渲染 一级分类

// var htmlStr = "";
// // 对category数组进行过滤筛选，使用filter(筛选条件)函数 选取一级分类fid===0的值
// category.filter(function(item) { return item.fid === 0; }).forEach(function(item) { //forEach(迭代内容)进行迭代
// 	// `号进行字符串拼接，使用${}进行取值
// 	htmlStr += `<li data-id="${item.id}" data-avatar="${item.avatar}"><span>${item.name}</span></li>`;
// });
// $("ul.list-main").html(htmlStr);//jquery中使用$("")来查找html的标签，使用css语法	$("").html();来增加对应标签中的内容

// 简化
$("ul.list-main").html(
	category
	.filter(item => item.fid === 0)
	.map(item => `<li data-id="${item.id}" data-avatar="${item.avatar}"><span>${item.name}</span></li>`)
	.join("")
);

// 找到渲染完成的li动态绑定单击事件
// $("ul.list-main>li").on('click',function() {	//jquery中使用on('操作',事件)函数来绑定事件
// 	// 选中状态的切换
// 	$(this).addClass("active").siblings().removeClass();	//jquery中可以使用 $(js对象) 来把js对象转化成jq对象，使用addClass("类名")来给标签增加class属性。siblings().removeClass()来给其他兄弟去除active属性
// 	// 右上角avatar关联图片的切换
// 	$("img.avatar").attr("src",this.dataset.avatar);	//jquery中attr(属性，值)用来给被选中对象设置属性的值
// 	// 右下关联二级分类的切换
// 	var id = parseInt(this.dataset.id),str = "";
// 	category.filter(function(item) { return item.fid === id }).forEach(function(item) {
// 		str += `
// 			<li>
// 				<a>
// 					<div class="img-wrapper">
// 						<img src="${item.avatar}"/>
// 					</div>
// 					<span>${item.name}</span>
// 				</a>
// 			</li>
// 		`;
// 	});
// 	$("ul.list-sub").html(str);
// });

// 简化
$("ul.list-main>li").on('click',function() {

	$(this).addClass("active").siblings().removeClass();
	$("img.avatar").attr("src",this.dataset.avatar);
	$("ul.list-sub").html(
		category
		.filter(item => item.fid === parseInt(this.dataset.id))
		.map(item => 
			`
				<li>
					<a>
						<div class="img-wrapper">
							<img src="${item.avatar}"/>
						</div>
						<span>${item.name}</span>
					</a>
				</li>
			`
		)
		.join("")
	);
});




// 使用jquery进行点击事件模拟，模拟(trigger)出第一个一级菜单被 点击
// jquery中的eq()函数可以继续 进行筛选相同标签的第几个标签
$('ul.list-main li').eq(0).trigger("click");