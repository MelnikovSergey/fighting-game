(function(id) {
	'use strict';

	function startGame() {
		const fightArenaWrapper = document.querySelector('.fight_arena_wrapper');
		fightArenaWrapper.style.display = 'block';

		console.log('Game started!');
	}
	
	document.addEventListener('keydown', (event) => {

		// if the [S] key was pressed
		if(event.keyCode === 83) {
			startGame();
		}

		console.log('KeyDown ' + event.keyCode);
	});
	
}(document));