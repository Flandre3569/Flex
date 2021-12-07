var loginFrom =  $("form.login").Validform({
	tiptype:3
});

$("button.btn-login").on('click',() => {
	if(!loginFrom.check(false)) return;
	
	var name = $('input.name').val(), pwd = $('input.pwd').val();		//找到用户输入的用户名和密码
	if(users.some(item => item.name === name && item.pwd === pwd )) {
		sessionStorage.setItem("user", name);
		window.location.href = sessionStorage.getItem("bakeUrl") || "../home/home.html";
	}else {
		layer.alert("用户名或密码错误！");
	}
});