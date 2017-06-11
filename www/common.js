window.addEventListener('load', function(event){
	setTimeout(function(){
		registerEvents();
		obrocik();
	}, 0);
});

function registerEvents()
{
	var list = document.getElementsByClassName("link");
	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("mouseout", function(event){
		//	window.alert("tutu");
			var source = event.target || event.srcElement;
			if(source.className == "photo_z_pinezka" || source.className == "nazwa_z_pinezka" || source.className == "pinezka") {
				source.parentNode.style.transform = "scale(1.0)";
				source.parentNode.style.zIndex = 0;
			} else {
				source.style.transform = "scale(1.0)";
				source.style.zIndex = 0;
			}
		});
		list[i].addEventListener("mouseover", function(event){
		//	window.alert("tutu");
			var source = event.target || event.srcElement;
			if(source.className == "photo_z_pinezka" || source.className == "nazwa_z_pinezka" || source.className == "pinezka") {
				source.parentNode.style.transform = "scale(1.3)";
				source.parentNode.style.zIndex = 100;
			} else {
				source.style.transform = "scale(1.3)";
				source.style.zIndex = 100;
			}
		});
	}
}

function obrocik()
{
	var list = document.getElementsByClassName("photo_z_pinezka");
	for (var i = 0; i < list.length; i++) {
		list[i].style.transform = "rotate(" + Math.floor((Math.random() * 16) - 8) + "deg)";
	}
	
		var list = document.getElementsByClassName("nazwa_z_pinezka");
	for (var i = 0; i < list.length; i++) {
		list[i].style.transform = "rotate(" + Math.floor((Math.random() * 16) - 8) + "deg)";
	}
}


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62675562-1', 'auto');
  ga('send', 'pageview');
