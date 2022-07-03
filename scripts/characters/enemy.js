import { Character } from './character';

class Enemy extends Character {
	constructor() {
		this.activeBehaviour = 'patrol';
	}

	behaviorStates = ['patrol', 'attack'];
	activeBehaviour = '';
}
