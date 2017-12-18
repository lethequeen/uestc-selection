
//图片轮番
function move (num) {
	var pic = document.getElementById('images');
	var location = parseInt(pic.style.left) + num;
	pic.style.left = location + "px";
	if (location < -8400) {
    pic.style.left = "-400px"
	}
	if (location > -600) {
    pic.style.left = "-8400px"
	}
}

//左右按钮
var buttonl = document.getElementById('button-l');
var buttonr = document.getElementById('button-r');
console.log(buttonl)
console.log(buttonr)
buttonl.onclick = function () {
	move (-400);
}
buttonr.onclick = function () {
	move (400);
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


//选择栏
var optiontop = document.getElementById('top');
var select = document.getElementById('select');
var optioncontainer = document.getElementById('optioncontainer');
optiontop.onclick = function () {
	optioncontainer.style.overflow = "scroll";
	optioncontainer.style.height = "135px";
	select.style.height = "135px";
}

var message = null;
function option () {
  var lis = document.getElementsByClassName('option');
  for(var i= 1; i< lis.length; i++ ) {
	  (function(i){
	    lis[i].addEventListener('click', function(){
	    	optioncontainer.style.height = "45px"
	    	console.log(lis[i].innerText);
	      message = i;
	      optioncontainer.innerText = lis[i].innerText;
	      select.style.height = "45px"
	  },true)})(i)
	}
}
option();
//提交弹出窗口
var infirm = document.getElementById('confirm');
infirm.onclick = function () {
		var xmlhttp = new XMLHttpRequest();
		var formdata = new FormData();
		formdata.append("id",message);
		xmlhttp.open("POST","http://47.95.237.117/main/vote",true);
		xmlhttp.withCredentials = true;   
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var text = JSON.parse(xmlhttp.responseText)
				if (text.errorCode==0) {                
			    alert("投票成功！");
			    optiontop.addAttribute(disabled,"true");
				}else if (text.errorCode==100) {
          alert(text.errorMsg);
				}
				else if (text.errorCode==101) {
          alert(text.errorMsg);
				}
				else if (text.errorCode==110) {
           alert(text.errorMsg);
				}
			}
		}
		xmlhttp.send(formdata);
}
