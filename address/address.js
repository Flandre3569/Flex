if(!sessionStorage.getItem("user")) {
	sessionStorage.setItem("backUrl",window.location.href);
	layer.alert("您未登录或登录超时，请重新登陆！",{ closeBtn: 0},() => {
		window.location.href = '../login/login.html';
	});
}