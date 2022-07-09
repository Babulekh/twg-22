import { Scene } from '../scene';

interface LevelManager {
	level: number;
}

class LevelManager {
	constructor(level: number = 0) {
		this.level = level;
	}

	loadScene(index: number) {
		const level = require(`../../../assets/levels/${index}.json`); // Устанавливать номер уровня

		let scene = new Scene(level);

		return scene;
	}

	reloadScene() {
		this.loadScene(this.level);
	}
}

export { LevelManager };
