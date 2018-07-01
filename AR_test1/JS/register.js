/**
 * 文件名： register.js 描述: 用户注册
 */

/**
 * 获取账号，密码，AJAX递交，进行检索
 */
function registerFunction() {
	// var userid = $("#userid").val();
	// var password = $("#password").val();

	// 判断账号种类是否为空
	users_right = $('#users_right option:selected').val();
	if (users_right == '' || users_right == null) {
		document.getElementById("msgRight").innerHTML = "账号种类不能为空";
		return false;
	}
	// 判断账号名称是否为空
	var userid = $("#users_id").val();
	var users_id = trimstring(userid);
	if (users_id == '' || users_id == null) {
		document.getElementById("msgId").innerHTML = "账号名称不能为空";
		return false;
	}
	// 判断密码是否为空
	var usersPassword = $("#users_password").val();
	var users_password = trimstring(usersPassword);
	var repeatPassword = $("#repeat_password").val();
	var repeat_password = trimstring(repeatPassword);
	if (users_password == '' || repeat_password == '' || users_password == null
			|| repeat_password == null) {
		document.getElementById("msgPassword").innerHTML = "密码不能为空";
		return false;
	}
	// 判断两次密码输入是否一致
	// var usersPassword = document.getElementById("users_password");
	// var users_password = usersPassword.value;
	// usersPassword = trimstring(users_password);
	// users_password.value = usersPassword;

	// var repeatPassword = document.getElementById("repeat_password");
	// var repeat_password = repeatPassword.value;
	// repeatPassword = trimstring(repeat_password);
	// repeat_password.value = repeatPassword;
	if (users_password != repeat_password) {
		document.getElementById("msgPassword").innerHTML = "两次输入不一致,请重新输入";
		return false;
	}
	// 判断姓名是否为空
	var username = $("#users_name").val();
	var users_name = trimstring(username);
	if (users_name == '' || users_name == null) {
		document.getElementById("msgName").innerHTML = "姓名不能为空";
		return false;
	}
	// 判断电话是否为空
	var userphonenum = $("#users_phonenum").val();
	var users_phonenum = trimstring(userphonenum);
	if (users_phonenum == '' || users_phonenum == null) {
		document.getElementById("msgPhonenum").innerHTML = "电话不能为空";
		return false;
	}
	// 判断地址是否为空
	var useraddress = $("#users_address").val();
	var users_address = trimstring(useraddress);
	if (users_address == '' || users_address == null) {
		document.getElementById("msgAddress").innerHTML = "地址不能为空";
		return false;
	}
	// 判断性别是否为空
	var users_sex = $('#users_sex option:selected').val();
	if (users_sex == '' || users_sex == null) {
		document.getElementById("msgSex").innerHTML = "性别不能为空";
		return false;
	}
		connectFunction();
}

/**
 * 获取账号，密码，AJAX递交，进行检索
 */
function connectFunction() {
	var data = {
		users_right : $('#users_right option:selected').val(),
		users_id : $("#users_id").val(),
		users_password : $("#users_password").val(),
		users_name : $("#users_name").val(),
		users_phonenum : $("#users_phonenum").val(),
		users_address : $("#users_address").val(),
		users_sex : $('#users_sex option:selected').val(),
		users_birthday : $("#users_birthday").val(),
		users_address : $("#users_address").val(),
	};
	var serverURL = "http://localhost:8080/";
	var searchKey = encodeURIComponent(encodeURI(JSON.stringify(data)));
	/** AJAX递交* */
	$.ajax({
		type : "get",
		url : serverURL + "/register",
		dataType : "json",
		processData : false,
		data : "searchKey=" + searchKey,
		success : function(data) {
			var resultListArray = String(data.resultList).split(",");
			sessionStorage.setItem("users_right", resultListArray[0]);
			sessionStorage.setItem("users_id", resultListArray[1]);
			sessionStorage.setItem("users_password", resultListArray[2]);
			sessionStorage.setItem("users_name", resultListArray[3]);
			sessionStorage.setItem("users_phonenum", resultListArray[4]);
			sessionStorage.setItem("users_address", resultListArray[5]);
			sessionStorage.setItem("users_sex", resultListArray[6]);
			sessionStorage.setItem("users_birthday", resultListArray[7]);
			sessionStorage.setItem("users_post", resultListArray[8]);
		}
	});
}

/**
 * trim操作
 */
function trimstring(str) {
	if (str) {
		if (str.replace) {
			var val = str.replace(/(^\s*)|(\s*$)/g, "");
			return val;
		} else {
			return stringtrim(str)
		}
	}
	return str;
}