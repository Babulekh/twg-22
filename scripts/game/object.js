import { GameManager } from './managers/gameManager'

class Object {
	/* параметры 
		name - string, тип объекта
	 	id - string, уникальное название объекта, берется из основного спаунера, который хранит в себе информацию о уже существующих объектах и их кол-ве
		assetSrc - string, путь к ассету
		coords - double, координаты объекта (x, y)
		rotate - double, угол поворота объекта (x, y)
		scale - double, масштаб объекта
		active - bool, активен ли объект?
	*/
	constructor(name = '', id = '', assetSrc = '/resources/sprites/base.png', coords = [0, 0], rotate = [0, 0], scale = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.assetSrc = assetSrc;
		this.coords = coords;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;

		gameManager = new GameManager();

		init();
	}

	init() {
		object = PIXI.Sprite.from(this.assetSrc);
		object.coordX = this.coordX;
		object.coordY = this.coordY;

		// app.stage.addChild(bunny);

		gameManager.onObjectCreate(this);
	}

	Move(deltaX, deltaY) {
		object.coordX = this.coordX;
		object.coordY = this.coordY;
	}

	Destroy() {
		gameManager.onObjectDestroy(this);
		this = null;
	}
}
