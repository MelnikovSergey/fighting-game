/*

Key code list:
- - -

Fighter 1
- -
a		65
w 		87
d		68
s		83
l		76
k		75
j		74

- - - - - - - - - -

Fighter 2
- -
arrow left	37
arrow up	38
arrow right	39
arrow down	40
m		77
n		78
b		66

*/

window.onkeydown = keyDown;
window.onkeyup = keyUp;

var actionGame = false;

function keyDown(e) {

    var event = e || window.event;
    var key = event.keyCode;
    // console.log(key);

    if (key == 83 && !actionGame) {
        // GameInstance.score.reset();
        // GameInstance.credit.reset();
	// startGame();
	// .. 
	console.log('Game started!');
    }

    // Fighter 1
    if (key == 65) {
	// ...
        fighter1.runFramesArray("walkFighter1");
    }
    if (key == 87) {
	// ...
        fighter1.runFramesArray("jumpFighter1");
    }
    if (key == 83) {
	// ...
        fighter1.runFramesArray("downFighter1");
    }
    if (key == 68) {
	// ...
        fighter1.runFramesArray("walkFighter1");
    }
    if (key == 76) {
	// ...
        fighter1.runFramesArray("punchFighter1");
    }
    if (key == 75) {
	// ...
        fighter1.runFramesArray("kickFighter1");
    }
    if (key == 74) {
	// ...
        fighter1.runFramesArray("blockFighter1");
    }

    // Fighter 2
    if (key == 37) {
	// ...
        fighter2.runFramesArray("walkFighter2");
    }
    if (key == 38) {
	// ...
        fighter2.runFramesArray("jumpFighter2");
    }
    if (key == 40) {
	// ...
        fighter2.runFramesArray("downFighter2");
    }
    if (key == 39) {
	// ...
        fighter2.runFramesArray("walkFighter2");
    }
    if (key == 77) {
	// ...
        fighter2.runFramesArray("punchFighter2");
    }
    if (key == 78) {
	// ...
        fighter2.runFramesArray("kickFighter2");
    }
    if (key == 66) {
	// ...
        fighter2.runFramesArray("blockFighter2");
    }

}

function keyUp(e) {

    // Fighter 1
    if (e.keyCode == 65) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 87) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 68) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 83) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 76) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 75) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }
    if (e.keyCode == 74) {
	// ...
        fighter1.runFramesArray("standFighter1");
    }

    // Fighter 2
    if (e.keyCode == 37) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 38) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 40) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 39) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 77) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 78) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }
    if (e.keyCode == 66) {
	// ...
        fighter2.runFramesArray("standFighter2");
    }

}