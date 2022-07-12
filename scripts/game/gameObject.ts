import { GameManager } from './managers/gameManager';
import { AudioManager } from './managers/audioManager';
import { Sprite, Texture } from 'pixi.js';
import { TileType } from '../enums';
import { Coords } from '../interfaces';

interface GameObject {
	name: string; // name - string, тип объекта
	id: TileType; // id - string, уникальное название объекта, берется из основного спаунера, который хранит в себе информацию о уже существующих объектах и их кол-ве
	assetSrc: string; // assetSrc - string, путь к ассету
	rotate: Array<number>; // rotate - double, угол поворота объекта (x, y)
	scale: Array<number>; // scale - double, масштаб объекта
	active: Boolean; // active - bool, активен ли объект?
	audioManager: AudioManager;
	sprite: Sprite;
	_x: number;
	_y: number;
}

class GameObject {
	constructor(name: string = 'Wall', id: TileType = TileType.Empty, coords: Coords, rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;

		this.audioManager = new AudioManager(100);

		const texture = Texture.from(`../../assets/sprites/${this.name}.png`);
		this.sprite = new Sprite(texture);

		[this.x, this.y] = [coords.x, coords.y];
	}

	get x(): number {
		return this._x;
	}

	set x(coord: number) {
		this._x = coord;
		this.sprite.x = coord * GameManager.Instance.resolution;
	}

	get y(): number {
		return this._y;
	}

	set y(coord: number) {
		this._y = coord;
		this.sprite.y = coord * GameManager.Instance.resolution;
	}

	move({ x: x, y: y }: Coords) {
		this.moveTo({ x: x ? this.x + x : this.x, y: y ? this.y + y : this.y });
	}

	moveTo({ x: x, y: y }: Coords) {
		if (GameManager.Instance.currentScene.checkCoords(x ?? this.x, y ?? this.y) !== TileType.Empty) return;
		GameManager.Instance.currentScene.level.board[this.y][this.x] = TileType.Empty;

		if (x) this.x = x;
		if (y) this.y = y;

		GameManager.Instance.currentScene.level.board[this.y][this.x] = this.id;
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
