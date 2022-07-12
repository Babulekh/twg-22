import { GameManager } from './managers/gameManager';
import { AudioManager } from './managers/audioManager';
import { Sprite, Texture } from 'pixi.js';
import { TileType } from '../enums';

interface GameObject {
	name: string; // name - string, тип объекта
	id: TileType; // id - string, уникальное название объекта, берется из основного спаунера, который хранит в себе информацию о уже существующих объектах и их кол-ве
	assetSrc: string; // assetSrc - string, путь к ассету
	rotate: Array<number>; // rotate - double, угол поворота объекта (x, y)
	scale: Array<number>; // scale - double, масштаб объекта
	active: Boolean; // active - bool, активен ли объект?
	audioManager: AudioManager;
	sprite: Sprite;
	coordX: number;
	coordY: number;
}

class GameObject {
	constructor(name: string = 'Wall', id: TileType = TileType.Empty, coords: Array<number> = [0, 0], rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;

		this.audioManager = new AudioManager(100);

		const texture = Texture.from(`../../assets/sprites/${this.name}.png`);
		this.sprite = new Sprite(texture);

		[this.coordX, this.coordY] = coords;
		[this.sprite.x, this.sprite.y] = [coords[0] * GameManager.Instance.resolution, coords[1] * GameManager.Instance.resolution];
	}

	setCoords(x: number, y: number) {
		if (GameManager.Instance.currentScene.checkCoords(x, y) !== TileType.Empty) return;

		this.onBeforeMove();

		[this.coordX, this.coordY, this.sprite.x, this.sprite.y] = [x, y, x * GameManager.Instance.resolution, y * GameManager.Instance.resolution];

		this.onAfterMove();
	}

	onBeforeMove() {
		GameManager.Instance.currentScene.level.board[this.y][this.x] = TileType.Empty;
	}

	onAfterMove() {
		GameManager.Instance.currentScene.level.board[this.y][this.x] = this.id;

		// console.clear();
		// for (const row of GameManager.Instance.currentScene.level.board) {
		// 	console.log(row);
		// }
	}

	get x(): number {
		return this.coordX;
	}

	set x(coord: number) {
		if (GameManager.Instance.currentScene.checkCoords(coord, this.coordY) !== TileType.Empty) return;

		this.onBeforeMove();

		this.coordX = coord;
		this.sprite.x = coord * GameManager.Instance.resolution;

		this.onAfterMove();
	}

	get y(): number {
		return this.coordY;
	}

	set y(coord: number) {
		if (GameManager.Instance.currentScene.checkCoords(this.coordX, coord) !== TileType.Empty) return;

		this.onBeforeMove();

		this.coordY = coord;
		this.sprite.y = coord * GameManager.Instance.resolution;

		this.onAfterMove();
	}

	playSound(src: string, volume: number) {
		this.audioManager.playSound(src);
	}

	destroy() {
		// this.gameManager.onObjectDestroy(this);
		// this = null; todo реализовать удаление экземпляра класса
	}
}

export { GameObject };
