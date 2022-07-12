import { ActiveBehaviour, TileType } from '../../enums';
import { Coords } from '../../interfaces';
import { Character } from './character';

interface Enemy {
	activeBehaviour: ActiveBehaviour;
}

class Enemy extends Character {
	constructor(name: string, type: TileType, coords: Coords) {
		super(name, type, coords);
		this.activeBehaviour = ActiveBehaviour.Patrol;
	}
}

export { Enemy };
