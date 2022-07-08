import { Container, Loader, Sprite, Texture } from 'pixi.js';
import { Level } from './managers/levelManager';

interface Scene {
	container: Container;
	level: Level;
}

enum TileType {
	Empty = 0,
	Wall,
	Player,
	Enemy,
	// etc...
}

class Scene {
	constructor(level: Level) {
		this.level = level;
	}

	init() {
		const resolution = 32; // длина одного спрайта в пикселях
		const board = this.level.board;

		// const Empty = require('../../assets/sprites/Empty.png');
		// const Wall = require('../../assets/sprites/Wall.png');

		// Load resources
		const loader: Loader = Loader.shared;
		loader.add('Empty', '../../assets/sprites/Empty.png').add('Wall', '../../assets/sprites/Wall.png').load();

		this.container = new Container();

		// 1. Рендер поля
		for (let i = 0; i < board.length; i++) {
			const row = board[i];

			for (let j = 0; j < row.length; j++) {
				const tile = board[i][j];
				let sprite;
				let texture;

				switch (tile) {
					case TileType.Empty:
						texture = Texture.from('../../assets/sprites/Empty.png');
						// sprite = new Sprite(loader.resources['Empty'].texture);
						sprite = new Sprite(texture);
						break;
					case TileType.Wall:
						texture = Texture.from('../../assets/sprites/Wall.png');
						// sprite = new Sprite(loader.resources['Wall'].texture);
						sprite = new Sprite(texture);
						break;
					// etc...
					default:
						break;
				}

				sprite.x = j * resolution;
				sprite.y = i * resolution;

				this.container.addChild(sprite);
			}
		}

		// 2. Размещение игрока
		// 3. Размещение врагов
		// console.log(this.container.children);
		return this.container;
	}
}

export { Scene };
