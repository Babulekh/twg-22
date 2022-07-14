import { Container, Sprite, Texture } from 'pixi.js';
import { GameObject } from './gameObject';
import { Level } from '../interfaces';
import { TileType } from '../enums';
import { GameManager } from './managers/gameManager';
import { Enemy } from '../gameObjects/characters/enemy';
import { Player } from '../gameObjects/characters/player';

interface Scene {
	container: Container;
	board: Array<GameObject>;
}

class Scene {
	constructor(level: Level) {
		this.board = [];
		this.container = new Container();

		// Создание доски
		level.board.forEach((row, y) => {
			row.forEach((cell, x) => {
				let name;

				switch (cell) {
					case TileType.Empty:
						name = 'Empty';
						break;

					case TileType.Wall:
						name = 'Wall';
						break;

					case TileType.Base:
						name = 'Base';
						break;
				}

				this.board.push(new GameObject(name, cell, { x: x, y: y }));
			});
		});

		// Итерация по objects todo

		// Запушить все объекты в this.container
		this.board.forEach((object) => this.container.addChild(object.sprite));
	}

	checkCoords(x?: number, y?: number): TileType {
		this.board.forEach((object) => {
			if (object.x === x && object.y === y) return TileType.Wall;
		});

		return TileType.Empty;
		//todo
	}
}

export { Scene };
