import { ActiveBehaviour } from '../../enums';
import { Character } from './character';

interface Enemy {
	activeBehaviour: ActiveBehaviour;
}

class Enemy extends Character {
	constructor() {
		super();
		this.activeBehaviour = ActiveBehaviour.Patrol;
	}
}

export { Enemy };
