import { Scene } from '../scene';

interface LevelManager {
	level: number;
}

class LevelManager {
	constructor(level: number = 0) {
		this.level = level;
	}

	loadScene(index: number) {
		let data: Array<any> = []; // TODO собираем инфу из json файла отдельного уровня (возьмем по индексу)

		let scene = new Scene(data);
	}

	reloadScene() {
		this.loadScene(this.level);
	}
}

export { LevelManager };
