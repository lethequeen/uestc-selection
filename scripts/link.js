



//图片轮番
function move (num) {
	var pic = document.getElementById('images');
	var location = parseInt(pic.style.left) + num;
	pic.style.left = location + "px";
	if (location < -11400) {
    pic.style.left = "-600px"
	}
	if (location > -600) {
    pic.style.left = "-11400px"
	}
}

//左右按钮
var buttonl = document.getElementById('button-l');
var buttonr = document.getElementById('button-r');
console.log(buttonl)
console.log(buttonr)
buttonl.onclick = function () {
	move (-600);
}
buttonr.onclick = function () {
	move (600);
}
//自动轮番
var timer = null;
function play() {
	timer = setInterval(function () {
		buttonl.onclick();
	}, 1000);
}
play();

//停止
function stop () {
	    clearInterval(timer);
}
var container = document.getElementById('container');
container.onmouseover = stop;
container.onmouseout = play;