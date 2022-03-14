let playerOneIdle = [{}, {}, {}];
let playerOneMoveFWD = [{}, {}, {}, {}, {}, {}];
let playerOneMoveBack = [{}, {}, {}, {}, {}, {}];
let playerOneJump = [{}, {}, {}, {}, {}, {}];
let playerOneCrouch = [{}, {}, {}, {}, {}, {}];
let playerOneFwdSault = [{}, {}, {}, {}, {}, {}];
let playerOneBackSault = [{}, {}, {}, {}, {}, {}];
let playerOneJab = [{}, {}, {}, {}, {}, {}];
let playerOneRoundHouse = [{}, {}, {}, {}, {}, {}];
let playerOneThrustToNeck = [{}, {}, {}, {}, {}, {}];
let playerOneReverseKick = [{}, {}, {}, {}, {}, {}];
let playerOneThrustToHead = [{}, {}, {}, {}, {}, {}];
let playerOneLegKick = [{}, {}, {}, {}, {}, {}];
let playerOneFlyingKick = [{}, {}, {}, {}, {}, {}];
let playerOneLegSweep = [{}, {}, {}, {}, {}, {}];
let playerOneUnderArmSweep = [{}, {}, {}, {}, {}, {}];
let playerOneChestKick = [{}, {}, {}, {}, {}, {}];

let playerOneState = {state: playerOneIdle};

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function keyDownHandler(e) {

	if(e.keyCode == 38) {
		upPressed = true;
	}

	else if(e.keyCode == 40) {
		downPressed = true;
	}

	else if(e.keyCode == 37) {
		leftPressed = true;
	}

	else if(e.keyCode == 39) {
		rightPressed = true;
	}
}