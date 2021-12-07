//判断当前我所在的页面，根据页面决定哪个菜单下是激活的
var index = window.parent.name,
	li = document.getElementsByTagName('li')[index],
	img = li.getElementsByTagName('img')[0];
img.src = img.dataset.aa;
