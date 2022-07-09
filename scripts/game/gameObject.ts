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
	constructor(name: string = '', id: TileType = TileType.Empty, assetSrc: string = '/assets/sprites/base.png', coords: Array<number> = [0, 0], rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1], active = true) {
		this.name = name;
		this.id = id;
		this.rotate = rotate;
		this.scale = scale;
		this.active = active;

		this.audioManager = new AudioManager(100);

		const texture = Texture.from(assetSrc);
		this.sprite = new Sprite(texture);

		[this.coordX, this.coordY] = coords;
		[this.sprite.x, this.sprite.y] = [coords[0] * GameManager.getInstance().resolution, coords[1] * GameManager.getInstance().resolution];
	}

	setCoords(x: number, y: number) {
		if (GameManager.getInstance().currentScene.checkCoords(x, y) !== TileType.Empty) return;
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = TileType.Empty;
		[this.coordX, this.coordY, this.sprite.x, this.sprite.y] = [x, y, x * GameManager.getInstance().resolution, y * GameManager.getInstance().resolution];
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = this.id;
	}

	get X(): number {
		return this.coordX;
	}

	set X(coord: number) {
		if (GameManager.getInstance().currentScene.checkCoords(coord, this.coordY) !== TileType.Empty) return;
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = TileType.Empty;
		this.coordX = coord;
		this.sprite.x = coord * GameManager.getInstance().resolution;
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = this.id;
	}

	get Y(): number {
		return this.coordY;
	}

	set Y(coord: number) {
		if (GameManager.getInstance().currentScene.checkCoords(this.coordX, coord) !== TileType.Empty) return;
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = TileType.Empty;
		this.coordY = coord;
		this.sprite.y = coord * GameManager.getInstance().resolution;
		GameManager.getInstance().currentScene.level.board[this.coordY][this.coordX] = this.id;
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
