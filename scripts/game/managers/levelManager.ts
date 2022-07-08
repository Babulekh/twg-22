import { Scene } from '../scene';

interface LevelManager {
	level: number;
}

interface Level {
	board: Array<Array<number>>;
	player: Object; // TODO сделать интерфейс игрока
	enemies: Array<Object>; // TODO сделать интерфейс врага
}

class LevelManager {
	constructor(level: number = 0) {
		this.level = level;
	}

	loadScene(index: number) {
		const level = require(`../../../assets/levels/${index}.json`); // Устанавливать номер уровня

		// let data: Array<any> = [];  TODO собираем инфу из json файла отдельного уровня (возьмем по индексу)

		let scene = new Scene(level);

		return scene;
	}

	reloadScene() {
		this.loadScene(this.level);
	}
}

export { LevelManager, Level };
