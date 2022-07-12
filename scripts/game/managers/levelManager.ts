import { Scene } from '../scene';

interface LevelManager {
	level: number;
}

class LevelManager {
	constructor(level: number = 0) {
		this.level = level;
	}

	get scene() {
		const level = require(`../../../assets/levels/${this.level}.json`);
		return new Scene(level);
	}
}

export { LevelManager };
