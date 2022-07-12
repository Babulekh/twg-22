import { TileType } from '../../enums';
import { Coords } from '../../interfaces';
import { Character } from './character';

interface Player {}

class Player extends Character {
	constructor(name: string, id: TileType, coords: Coords) {
		super(name, id, coords);
	}
}

export { Player };
