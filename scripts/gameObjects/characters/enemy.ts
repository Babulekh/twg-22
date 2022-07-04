import { Character } from './character';

enum ActiveBehaviour {
	Patrol = 'patrol',
	Idle = 'idle',
}

interface Enemy {
	activeBehaviour: ActiveBehaviour;
}

class Enemy extends Character {
	constructor() {
		super();
		this.activeBehaviour = ActiveBehaviour.Patrol;
	}
}
