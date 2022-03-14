(function(id) {
	'use strict';

	let canvas = document.getElementById('game');
	let ctx = canvas.getContext('2d');
	let fps = 60;

	let player = new Image();
	player.src = 'assets/fighter.png';

	let p1X = 180;
	let p1Y = 100;
	let p1FrameCount = 0;
	let p1CurrentFrame = 0;

	let p2X = 260;
	let p2Y = 920;
	let p2FrameCount = 0;
	let p2CurrentFrame = 0;

	let frameSpeed = 8;

}(document));