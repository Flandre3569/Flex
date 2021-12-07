// 初始化banner
new Swiper(".banner",{
	loop:true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el:".swiper-pagination",
		type:"fraction",
	},
});
// 厂家直销

$('.dec_list').html(
		decribe.map(item => 
					`
						<li>
							<img src="${item.avatar}" />
							<span>${item.name}</span>
						</li>
					`
			)
			.join("")
	);
	// $('.new_list').html(
	// 		news.map(item => 
	// 					`
	// 						<li>
	// 							<img src="${item.avatar}" />
	// 							<span class="span_remark">${item.name}</span><br>
	// 							<span class="span_price">￥${item.price}</span>
	// 						</li>
	// 					`
	// 			)
	// 			.join("")
	// 	);
	
	// 热卖
	$('.hot_list').html(
			hot.map(item => 
						`
							<li>
								<img src="${item.avatar}" />
								<span class="span_remark">${item.name}</span><br>
								<span class="span_price">￥${item.price}</span>
							</li>
						`
				)
				.join("")
		);
		
		// 精选优品
	$('.good_list').html(
			good.map(item => 
					`
						<li>
							<img src="${item.avatar}" /><br>
							<span>${item.name}</span><br>
							<span class="span_price">￥${item.price}</span>
							</li>
					`
				)
				.join("")
	);
			
			
	$('.recommend_list').html(
			recommend.map(item => 
						`
							<li>
								<img src="${item.avatar}" /><br>
								<span class="span_remark">${item.name}</span><br>
								<span class="span_remark">${item.remark}</span><br>
								<span class="span_price">￥${item.price}</span>
							</li>
						`
				)
				.join("")
		);
		
// 返回顶部
$(function(){
    var topx=$(".content").offset().top;
        $(window).scroll(function(){
            if($(document).scrollTop()>=1000){
                $(".button").fadeIn();
            }else{
                $(".button").fadeOut();
            }
        })
        $(".button").click(function(){
            //普通的返回顶部
             //$(document).scrollTop(0);

            //动画的返回页面顶部
            $("body,html").animate({
                scrollTop:0
        },500);
    })
})