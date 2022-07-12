import { TileType } from '../../enums';
import { Coords } from '../../interfaces';
import { Character } from './character';

interface Player {}

class Player extends Character {
	constructor(name: string, type: TileType, coords: Coords) {
		super(name, type, coords);
	}
}

export { Player };
