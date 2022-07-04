// import { Stage } as PIXI from 'pixi.js'; todo

interface Scene {
	data: any; // todo
}

class Scene {
	constructor(data: any) {
		// todo
		this.data = data;
		this.init();
	}

	init() {
		// let scene = new PIXI; todo стейджа нет, хз что тут нужно

		// заполняем сцену новыми объектами
		for (let i in this.data) {
			// спаун объекта нужного типа с конкретными параметрами
		}
	}
}

export { Scene };
