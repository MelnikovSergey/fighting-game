let playerTwoIdle = [{}, {}, {}];
let playerTwoMoveFWD = [{}, {}, {}, {}, {}, {}];
let playerTwoMoveBack = [{}, {}, {}, {}, {}, {}];
let playerTwoJump = [{}, {}, {}, {}, {}, {}];
let playerTwoCrouch = [{}, {}, {}, {}, {}, {}];
let playerTwoFwdSault = [{}, {}, {}, {}, {}, {}];
let playerTwoBackSault = [{}, {}, {}, {}, {}, {}];
let playerTwoJab = [{}, {}, {}, {}, {}, {}];
let playerTwoRoundHouse = [{}, {}, {}, {}, {}, {}];
let playerTwoThrustToNeck = [{}, {}, {}, {}, {}, {}];
let playerTwoReverseKick = [{}, {}, {}, {}, {}, {}];
let playerTwoThrustToHead = [{}, {}, {}, {}, {}, {}];
let playerTwoLegKick = [{}, {}, {}, {}, {}, {}];
let playerTwoFlyingKick = [{}, {}, {}, {}, {}, {}];
let playerTwoLegSweep = [{}, {}, {}, {}, {}, {}];
let playerTwoUnderArmSweep = [{}, {}, {}, {}, {}, {}];
let playerTwoChestKick = [{}, {}, {}, {}, {}, {}];

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