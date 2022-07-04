import { GameManager } from './managers/gameManager';
import { AudioManager } from './managers/audioManager';
import { Sprite } from 'pixi.js';

interface GameObject {
	name: string;
	id: string;
	assetSrc: string;
	coords: Array<number>;
	rotate: Array<number>;
	scale: Array<number>;
	active: Boolean;
	gameManager: GameManager;
	audioManager: AudioManager;
	object: Sprite;
	coordX: number;
	coordY: number;
}

class GameObject {
	/* параметры 
		name - string, тип объекта
        id - string, уникальное название объекта, берется из основного спаунера, который хранит в себе информацию о уже существующих объектах и их кол-ве
		assetSrc - string, путь к ассету
		coords - double, координаты объекта (x, y)
		rotate - double, угол поворота объекта (x, y)
		scale - double, масштаб объекта
		active - bool, активен ли объект?
	*/
	constructor(name: string = '', id: string = '', assetSrc: string = '/resources/sprites/base.png', coords: Array<number> = [0, 0], rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.assetSrc = assetSrc;
		this.coords = coords;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;
		[this.coordX, this.coordY] = coords;

		this.gameManager = new GameManager();
		this.audioManager = new AudioManager(100);

		this.init();
	}

	init() {
		this.object = Sprite.from(this.assetSrc);
		this.object.x = this.coordX;
		this.object.y = this.coordY;

		// app.stage.addChild(bunny);

		this.gameManager.onObjectCreate(this);
	}

	move(deltaX: number, deltaY: number) {
		this.object.x += deltaX;
		this.object.y += deltaY;
	}

	playSound(src: string, volume: number) {
		this.audioManager.playSound(src);
	}

	destroy() {
		this.gameManager.onObjectDestroy(this);
		// this = null; todo реализовать удаление экземпляра класса
	}
}

export { GameObject };
