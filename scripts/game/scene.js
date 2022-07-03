class Scene {
	constructor(data) {
        this.data = data;
		this.init();
	}

	init() {
		let scene = new PIXI.Stage();

        // заполняем сцену новыми объектами
        for (i in data) {
            // спаун объекта нужного типа с конкретными параметрами
        }
	}
}
