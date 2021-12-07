var category = [
	// 一级分类 fid为0的项
	{ id: 1, fid: 0, avatar: "./images/women_avatar.png", name: "女式" },
	{ id: 2, fid: 0, avatar: "./images/man_avatar.png", name: "男士" },
	{ id: 3, fid: 0, avatar: "./images/child_avatar.png", name: "婴童" },
	{ id: 4, fid: 0, avatar: "./images/family_avatar.png", name: "居家" },
	{ id: 5, fid: 0, avatar: "./images/accessory_avatar.png", name: "配饰" },
	{ id: 6, fid: 0, avatar: "./images/kitchen_avatar.png", name: "餐厨" },
	{ id: 7, fid: 0, avatar: "./images/sundry_avatar.png", name: "杂货" },
	// 二级分类 fid为非0的项
	// 女士二级
	{ id: 9, fid: 1, avatar: "./images/women001.png", name: "衬衫" },
	{ id:10, fid: 1, avatar: "./images/women002.png", name: "T恤" },
	{ id:11, fid: 1, avatar: "./images/women003.png", name: "连衣裙" },
	{ id:12, fid: 1, avatar: "./images/women004.png", name: "卫衣" },
	{ id:13, fid: 1, avatar: "./images/women005.png", name: "大衣" },
	{ id:14, fid: 1, avatar: "./images/women006.png", name: "裤装" },
	{ id:15, fid: 1, avatar: "./images/women007.png", name: "家居服" },
	{ id:16, fid: 1, avatar: "./images/women008.png", name: "羽绒服" },
	{ id:17, fid: 1, avatar: "./images/women009.png", name: "鞋靴" },
	// 男士二级
	{ id:18, fid: 2, avatar: "./images/man001.png", name: "衬衫" },
	{ id:19, fid: 2, avatar: "./images/man002.png", name: "T恤" },
	{ id:20, fid: 2, avatar: "./images/man003.png", name: "夹克" },
	{ id:21, fid: 2, avatar: "./images/man004.png", name: "卫衣" },
	{ id:22, fid: 2, avatar: "./images/man005.png", name: "大衣" },
	{ id:23, fid: 2, avatar: "./images/man006.png", name: "裤装" },
	{ id:24, fid: 2, avatar: "./images/man007.png", name: "鞋靴" },
	// 婴童二级
	{ id:25, fid: 3, avatar: "./images/child001.png", name: "服饰" },
	{ id:26, fid: 3, avatar: "./images/child002.png", name: "鞋靴" },
	{ id:27, fid: 3, avatar: "./images/child003.png", name: "洗护" },
	{ id:28, fid: 3, avatar: "./images/child004.png", name: "牵引包" },
	{ id:29, fid: 3, avatar: "./images/child005.png", name: "喂养" },
	{ id:30, fid: 3, avatar: "./images/child006.png", name: "尿裤湿巾" },
	{ id:31, fid: 3, avatar: "./images/child007.png", name: "玩具" },
	{ id:32, fid: 3, avatar: "./images/child008.png", name: "寝居" },
	{ id:33, fid: 3, avatar: "./images/child009.png", name: "出行" },
	//  居家二级
	{ id:34, fid: 4, avatar: "./images/family001.png", name: "被芯" },
	{ id:35, fid: 4, avatar: "./images/family002.png", name: "枕头" },
	{ id:36, fid: 4, avatar: "./images/family003.png", name: "床品件套" },
	{ id:37, fid: 4, avatar: "./images/family004.png", name: "收纳" },
	{ id:38, fid: 4, avatar: "./images/family005.png", name: "灯具" },
	{ id:39, fid: 4, avatar: "./images/family006.png", name: "装饰" },
	{ id:40, fid: 4, avatar: "./images/family007.png", name: "宠物" },
	{ id:41, fid: 4, avatar: "./images/family008.png", name: "靠枕" },
	{ id:42, fid: 4, avatar: "./images/family009.png", name: "晾晒" },
	//  配饰二级
	{ id:43, fid: 5, avatar: "./images/accessory001.png", name: "眼镜" },
	{ id:44, fid: 5, avatar: "./images/accessory002.png", name: "围巾" },
	{ id:45, fid: 5, avatar: "./images/accessory003.png", name: "饰品" },
	{ id:46, fid: 5, avatar: "./images/accessory004.png", name: "领带" },
	{ id:47, fid: 5, avatar: "./images/accessory005.png", name: "香薰" },
	{ id:48, fid: 5, avatar: "./images/accessory006.png", name: "包袋" },
	{ id:49, fid: 5, avatar: "./images/accessory007.png", name: "手机壳" },
	{ id:50, fid: 5, avatar: "./images/accessory008.png", name: "皮具" },
	// 餐厨二级
	{ id:51, fid: 6, avatar: "./images/kitchen001.png", name: "酒杯" },
	{ id:52, fid: 6, avatar: "./images/kitchen002.png", name: "锅具" },
	{ id:53, fid: 6, avatar: "./images/kitchen003.png", name: "荼具" },
	{ id:54, fid: 6, avatar: "./images/kitchen004.png", name: "厨具" },
	{ id:55, fid: 6, avatar: "./images/kitchen005.png", name: "刀剪砧板" },
	{ id:56, fid: 6, avatar: "./images/kitchen006.png", name: "餐具" },
	{ id:57, fid: 6, avatar: "./images/kitchen007.png", name: "清洁保鲜" },
	// 杂货二级
	{ id:58, fid: 7, avatar: "./images/sundry001.png", name: "护理" },
	{ id:59, fid: 7, avatar: "./images/sundry002.png", name: "电子产品" },
	{ id:60, fid: 7, avatar: "./images/sundry003.png", name: "旅行必备" },
	{ id:61, fid: 7, avatar: "./images/sundry004.png", name: "礼盒" },
	{ id:62, fid: 7, avatar: "./images/sundry005.png", name: "文具" },
	{ id:63, fid: 7, avatar: "./images/sundry006.png", name: "相框" }
];
var users = [
	{name: "user1",pwd: "12345"},
	{name: "user2",pwd: "12345"}
];

var product = [
	{ id: 1, avatar: "./images/01.png", name: "丛林物语双面印花磨毛四件套", remark: "1.8M;米白色", price: 399 },
	{ id: 2, avatar: "./images/02.png", name: "璀璨灵动 手镯", remark: "手镯", price: 181 },
	{ id: 3, avatar: "./images/03.png", name: "28寸 纯PC\"铝矿\"(非全铝)", remark: "神秘灰", price: 439 }
];
// 购物车中包含了所有用户的购物记录，不是只存某一个用户，是所有用户
var cart = [
	{ id: 1, user: "user1", pid: 1, count: 2 },
	{ id: 2, user: "user1", pid: 2, count: 5 },
	{ id: 3, user: "user1", pid: 3, count: 3 },
	{ id: 4, user: "user2", pid: 1, count: 3 },
	{ id: 5, user: "user2", pid: 3, count: 1 }
];

var myOrder= [
	{ id: 1, avatar: "./images/待付款.png", name:"待付款"},
	{ id: 2, avatar: "./images/待发货1.png",name:"待发货"},
	{ id: 3, avatar: "./images/待收货1.png",name:"待收货"},
	{ id: 4, avatar: "./images/待评价.png",name:"待评价"},
	{ id: 5, avatar: "./images/售后.png",name:"售后"}
]

var myAssets= [
	{ id: 1, avatar: "./images/优惠券.png",name:"优惠卷"},
	{ id: 2, avatar: "./images/钱包.png",name:"钱包"},
	{ id: 3, avatar: "./images/美元.png",name:"D币"},
	{ id: 4, avatar: "./images/红包.png",name:"红包"}
]

var myTools= [
	{ id: 1,avatar: "./images/会员中心1.png",name:"会员中心"},
	{ id: 2,avatar: "./images/收货地址.png",name:"收货地址"},
	{ id: 3,avatar: "./images/客服1.png",name:"客服&售后"},
	{ id: 4,avatar: "./images/T设置.png",name:"设置"},
	{ id: 5,avatar: "./images/商家入驻.png",name:"入住合作"},
	{ id: 6,avatar: "./images/反馈.png",name:"反馈&投诉"},
	{ id: 7,avatar: "./images/报告.png",name:"商品报告"},
	{ id: 8,avatar: "./images/关于我们.png",name:"关于我们"}
]

var homePage= [
	{ id: 1, user:"user1", collection: 15,attention: 31,avatar:"./images/椭圆2.png",name :"简希"},
	{ id: 1, user:"user1", collection: 10,attention: 24,avatar:"./images/椭圆2.png",name :"凡尘"}
]

var decribe= [
	{ id: 1,avatar:"./images/新品.png",name: "新品/热销"},
	{ id: 1,avatar:"./images/拼团.png",name: "超值拼团"},
	{ id: 1,avatar:"./images/新人.png",name: "新人福利"},
	{ id: 1,avatar:"./images/时尚.png",name: "时尚动态"}
]

var hot= [
	{ id : 1,name:"英式经典三防女式长风衣" ,avatar:"./images/女装.png", price:599 },
	{ id : 1,name:"超轻至暖铜氨丝白鹅绒被" ,avatar:"./images/床.png", price:999 },
	{ id : 1,name:"羊毛混纺经典长款大衣" ,avatar:"./images/男装.png", price:1299 },
	{ id : 1,name:"创意懒人叠衣板+收纳箱" ,avatar:"./images/收纳盒.png", price:79 },
	{ id : 1,name:"GF合金包角拉链箱" ,avatar:"./images/旅行包.png", price:259 },
	{ id : 1,name:"婴童纱布长巾三条装" ,avatar:"./images/毛巾.png", price: 59}
]

var good=[
	{ id: 1,name:"本家HOME",avatar:"./images/精选优品.png",remark:"每满100立减20元",price:29.9},
	{ id: 1,name:"本家HOME",avatar:"./images/精选优品.png",remark:"每满100立减20元",price:39.9},
	{ id: 1,name:"本家HOME",avatar:"./images/精选优品.png",remark:"每满100立减20元",price:49.9}
]

var recommend=[
	{ id: 1,name:"狐步小吊灯",avatar:"./images/吊灯.png",price:469,remark:"曼妙裙摆 任意空间的光线舞者"},
	{ id: 1,name:"折简餐具组|碗套装",avatar:"./images/碗.png",price:89,remark:"国画四色 诠释最美器具"},
	{ id: 1,name:"竹枝抱枕",avatar:"./images/枕头.png",price:140,remark:"上百竹枝首尾相连 静生生物"},
	{ id: 1,name:"澎湃声波牙刷 Pro",avatar:"./images/电动牙刷.png",price:259,remark:"一件能明显提升幸福感的小物件"},
	{ id: 1,name:"镜线餐具组",avatar:"./images/碗.png",price:399,remark:"让每一餐都清爽可口"},
	{ id: 1,name:"光合氧气花瓶",avatar:"./images/盒子.png",price:129,remark:"光影魔术手 找到植物的专属生命"}
]

var news=[
	{ id:1, name:"无声派对复古镜-A",remark:"选用优质金属 镜框双色点缀",avatar:"./images/眼镜.png",price:249},
	{ id:1, name:"镜面不锈钢双耳连盖汤煲",remark:"食品级304不锈钢 复合底",avatar:"./images/焖锅.png",price:359},
	{ id:1, name:"纳米水离子空气净化器",remark:"美容、润肤 除甲醛、烟等有毒气体",avatar:"./images/保湿器.png",price:249},
	{ id:1, name:"S.PRINCESS荞麦保健枕",remark:"全面面料 双面工艺 单面荞麦",avatar:"./images/扁枕头.png",price:89}
]