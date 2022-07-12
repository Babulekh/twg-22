import { ActiveBehaviour, TileType } from '../../enums';
import { Coords } from '../../interfaces';
import { Character } from './character';

interface Enemy {
	activeBehaviour: ActiveBehaviour;
}

class Enemy extends Character {
	constructor(name: string, id: TileType, coords: Coords) {
		super(name, id, coords);
		this.activeBehaviour = ActiveBehaviour.Patrol;
	}
}

export { Enemy };
