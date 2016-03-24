var submit = document.getElementById('submit');
var  a = 0;
submit.addEventListener('click', function() {
	a ++;
	document.getElementById('content').innerHTML = a;
})