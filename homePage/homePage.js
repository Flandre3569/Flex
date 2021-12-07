if(!sessionStorage.getItem("user")) {
	sessionStorage.setItem("backUrl",window.location.href);
	layer.alert("您未登录或登录超时，请重新登陆！",{ closeBtn: 0},() => {
		window.location.href = '../login/login.html';
	});
}else {
	// 使用用户名拿到data的数据并进行动态渲染
	$('.myOrder').html(
		myOrder.map(item => 
					`
						<li>
							<img src="${item.avatar}" />
							<span>${item.name}</span>
						</li>
					`
			)
			.join("")
	);
	
	$('.myAssets').html(
		myAssets.map(item => 
					`
						<li>
							<img src="${item.avatar}" />
							<span>${item.name}</span>
						</li>
					`
			)
			.join("")
	);
	
	$('.myTools').html(
		myTools.map(item => 
					`
						<li>
							<img src="${item.avatar}" />
							<span>${item.name}</span>
						</li>
					`
			)
			.join("")
	);
	
	// // 获取到当前登录用户的用户名
	// var user = sessionStorage.getItem("user")
	// // 使用用户名拿到购物车的数据并进行动态渲染
	// $('head_part1').html(
	// 	homePage.filter(item => item.user === user)
	// 		.map(item => {
	// 			return `
	// 					<img src="${item.avatar}" />
	// 					<span>${item.name}</span>
	// 				`;
	// 		})
	// 		.join("")
	// );
	
	// $('head_part2').html(
	// 	homePage.filter(item => item.user === user)
	// 		.map(item => {
	// 			return `
	// 					<div>
	// 						<div>${item.collection}</div>
	// 						<div>我的收藏</div>
	// 					</div>
	// 					<div>
	// 						<div>${item.attention}</div>
	// 						<div>关注品牌</div>
	// 					</div>
	// 				`;
	// 		})
	// 		.join("")
	// );
	
	}