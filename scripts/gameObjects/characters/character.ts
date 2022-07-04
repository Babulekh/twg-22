import { GameObject } from '../../game/object';
import { HealthStats } from '../../objectComponents/healthStats';

interface Character {
	healthStats: HealthStats;
}

class Character extends GameObject {
	constructor() {
		super();
		// this.healthStats = new HealthStats(); todo добавить аргументы
	}
}

export { Character };
