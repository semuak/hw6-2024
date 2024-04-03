var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1")
	video.autoplay = false;
	video.lookup = false;
	console.log("Autoplay is set to " +video.autoplay)
	console.log("Loop is set to " +video.loop)

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

