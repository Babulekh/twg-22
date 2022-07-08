import { GameManager } from './managers/gameManager';
import { AudioManager } from './managers/audioManager';
import { Sprite, Texture } from 'pixi.js';

interface GameObject {
	name: string; // name - string, тип объекта
	id: string; // id - string, уникальное название объекта, берется из основного спаунера, который хранит в себе информацию о уже существующих объектах и их кол-ве
	assetSrc: string; // assetSrc - string, путь к ассету
	rotate: Array<number>; // rotate - double, угол поворота объекта (x, y)
	scale: Array<number>; // scale - double, масштаб объекта
	active: Boolean; // active - bool, активен ли объект?
	gameManager: GameManager;
	audioManager: AudioManager;
	sprite: Sprite;
	coordX: number;
	coordY: number;
}

class GameObject {
	constructor(name: string = '', id: string = '', assetSrc: string = '/assets/sprites/base.png', coords: Array<number> = [0, 0], rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;

		this.gameManager = GameManager.getInstance();
		this.audioManager = new AudioManager(100);

		const texture = Texture.from(assetSrc);
		this.sprite = new Sprite(texture);

		[this.coordX, this.coordY] = coords;
		[this.sprite.x, this.sprite.y] = coords;
	}

	// setCoords(x: number, y: number) {
	// 	this.X = x;
	// 	this.Y = y;
	// }

	// move(deltaX: number, deltaY: number) {
	// 	this.X += deltaX;
	// 	this.Y += deltaY;
	// }

	// set X(coord: number) {
	// 	this.coordX = coord;
	// 	this.sprite.x = coord;
	// }

	// set Y(coord: number) {
	// 	this.coordY = coord;
	// 	this.sprite.y = coord;
	// }

	playSound(src: string, volume: number) {
		this.audioManager.playSound(src);
	}

	destroy() {
		// this.gameManager.onObjectDestroy(this);
		// this = null; todo реализовать удаление экземпляра класса
	}
}

export { GameObject };
