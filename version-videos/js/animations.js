$(document).ready(function(win) {
	var controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});

	win.animationController = controller;

}(window));