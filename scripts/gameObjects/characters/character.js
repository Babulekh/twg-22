import { Object } from '../../game/object'
import { HealthStats } from '../../objectComponents/healthStats';

class Character extends Object {
	constructor() {
		this.healthStats = new HealthStats();
	}
}
