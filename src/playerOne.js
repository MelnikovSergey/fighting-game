let playerOneIdle = [{}, {}, {}];
let playerOneWalking = [{}, {}, {}, {}, {}, {}];

let playerOneState = {state: playerOneIdle};

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function keyDownHandler(e) {

	if(e.keyCode == 38) {
		upPressed = true;
	}

	elseif(e.keyCode == 40) {
		downPressed = true;
	}

	elseif(e.keyCode == 37) {
		leftPressed = true;
	}

	elseif(e.keyCode == 39) {
		rightPressed = true;
	}
}
