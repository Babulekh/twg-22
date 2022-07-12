import { TileType } from '../../enums';
import { GameObject } from '../../game/gameObject';
import { Coords } from '../../interfaces';
import { HealthStats } from '../../objectComponents/healthStats';

interface Character {
	healthStats: HealthStats;
	onDeath: Function;
}

class Character extends GameObject {
	constructor(name: string, id: TileType, coords: Coords) {
		super(name, id, coords);
		this.healthStats = new HealthStats(this, 100, 100, false);
	}
}

export { Character };
