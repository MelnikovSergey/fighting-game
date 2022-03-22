class Fighter {
	let grav;
	let gravity;
	let touchGround;
	let speed;
	let xVelocity;
	let half_h;
	let half_w;
	let maxJump;

	constructor(player, width, height) {
		this.name = player;
		this.grav = 0;
		this.gravity = 0;
		this.touchGround  = 0;
		this.speed = 8;
		this.xVelocity = 0;
		this.half_w = this.width/2;
		this.half_h = this.height/2;
		this.maxJump = -20;
	}

	xMoves {
		//...
	}

	yMoves {
		//...
	}

	testGravitation {
		//...
	}
}