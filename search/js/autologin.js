function getId(id) {
	return document.getElementById(id);
}

var userInfo = [
	{	
		"webId" : "http://email.163.com/",
		"userNameIpt" : "18817834467",
		"pwdInput" : "ttz19940814"
	}
];

for(var i = 0; i < userInfo.length; i++) {

	if(userInfo[i].webId == document.location.href) {

		getId('userNameIpt').value = userInfo[i].userNameIpt;
		getId('pwdInput').value = userInfo[i].pwdInput;
		var scriptNode = document.createElement ('script');
		scriptNode.textContent  = 'indexLogin.submitForm();';
		document.body.appendChild (scriptNode);
	}
}

// alert(userInfo[0])
// alert(inputs[0].value);
// var scriptNode = document.createElement ('script');
// scriptNode.textContent  = 'indexLogin.submitForm();';
// document.body.appendChild (scriptNode);



