var a = document.getElementById('confirm');
var b = document.getElementById('user');
var c = document.getElementById('password');  
a.onclick = function check() {  
	if (!b.value.length) {  
		document.getElementById("inform").innerText="姓名不能为空";  
	} else if (c.value.length == 0) {  
		document.getElementById("inform").innerText="电话号码不为空";  
	}else if(b.value.length != 0 && c.value.length != 0){  
		ajax(name,c);  
	}
}

function ajax(name,password) {
	var formdata = new FormData();
  console.log(b.value);
  console.log(c.value);
	formdata.append("name",b.value);
	formdata.append("password",c.value);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","http://47.95.237.117/main/login",true); 
	xmlhttp.withCredentials = true; 
	xmlhttp.onreadystatechange=function() {
		console.log(xmlhttp);
		console.log(xmlhttp.responseText);
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			console.log(JSON.parse(xmlhttp.responseText));
			var text = JSON.parse(xmlhttp.responseText);
			if (text.errorCode==0) {                
      window.location.href = "http://localhost/demo/link.html"; 
			console.log(111);
			}else if (text.errorCode==100){
				alert(text.errorMsg);
			}else if (text.errorCode==101){
				alert(text.errorMsg);
			}else if (text.errorCode==110){
				alert(text.errorMsg);
			}
		}
	};
	xmlhttp.send(formdata);
}