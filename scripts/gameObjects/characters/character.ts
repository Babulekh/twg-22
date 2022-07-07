import { GameObject } from '../../game/object';
import { HealthStats } from '../../objectComponents/healthStats';

interface Character {
	healthStats: HealthStats;
	onDeath: Function;
}

class Character extends GameObject {
	constructor() {
		super();
		this.healthStats = new HealthStats(this, 100, 100, false);
	}
}

export { Character };
