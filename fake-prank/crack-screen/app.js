var clicks = 0;
window.addEventListener('click', function(){
	clicks++;
	if(clicks == 3) {
		window.close();
	}
});