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

let playerOneState = {state: playerOneIdle, frames: 3, autoRepeat = false};

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

function drawPlayerOne() {

	p1FrameCount++;

	if(p1CurrentFrame % frameSpeed == 0) {
		p1CurrentFrame++;
	}

	if(p1CurrentFrame >= playerOneState.frames && playerOneState.autoRepeat) {
		p1FrameCount = 0;
		p1CurrentFrame = 0;
	}

	else if(p1CurrentFrame >= playerOneState.frames && !playerOneState.autoRepeat) {
		p1FrameCount = 0;
		p1CurrentFrame = 0;
		frameSpeed = 0;
		
		if(p1X > p2X) {
			if(playerOneState.state == '') {
				playerOneState = {state: playerOneIdle, frames: 3, autoRepeat = true};
			}
		}
	}

}