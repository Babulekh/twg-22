import { GameManager } from './managers/gameManager';
import { AudioManager, SoundType } from './managers/audioManager';
import { Sprite, Texture } from 'pixi.js';
import { TileType } from '../enums';
import { Coords } from '../interfaces';

interface GameObject {
	name: string;
	type: TileType;
	rotate: Array<number>;
	scale: Array<number>;
	active: Boolean;
	audioManager: AudioManager;
	sprite: Sprite;
	_x: number;
	_y: number;
}

class GameObject {
	constructor(name: string = 'Wall', type: TileType = TileType.Empty, coords: Coords, rotate: Array<number> = [0, 0], scale: Array<number> = [1, 1]) {
		this.name = name;
		this.type = type;
		this.rotate = rotate;
		this.scale = scale;
		this.sprite = new Sprite(Texture.from(`../../assets/sprites/${this.name}.png`));

		({ x: this.x, y: this.y } = coords);
		this.audioManager = new AudioManager(0.5, SoundType.Music);
		//this.audioManager.playSound('../../../resources/audio/sound.mp3');
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

		GameManager.Instance.currentScene.level.board[this.y][this.x] = this.type;
	}

	playSound(src: string) {
		GameManager.Instance.audioManager.playSound(src);
	}

	destroy() {
		// this.gameManager.onObjectDestroy(this);
		// this = null; todo реализовать удаление экземпляра класса
	}
}

export { GameObject };
