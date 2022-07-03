import {Scene} from '../scene'

class LevelManager {
	constructor(level = 0) {
		this.level = level;
	}

	loadScene(index) {
		data = []; // TODO собираем инфу из json файла отдельного уровня (возьмем по индексу)

		let scene = new Scene(data);
	}

	reloadScene() {
		this.loadScene(this.level);
	}
}
