let playerTwoIdle = [{}, {}, {}];
let playerTwoWalking = [{}, {}, {}, {}, {}, {}];

let playerTwoState = {state: playerTwoIdle};

let playerTwoUpPressed = false;
let playerTwoDownPressed = false;
let playerTwoLeftPressed = false;
let playerTwoRightPressed = false;

function keyDownHandler(e) {

	if(e.keyCode == '???') {
		playerTwoUpPressed = true;
	}

	else if(e.keyCode == '???') {
		playerTwoDownPressed = true;
	}

	else if(e.keyCode == '???') {
		playerTwoLeftPressed= true;
	}

	else if(e.keyCode == '???') {
		playerTwoRightPressed = true;
	}
}