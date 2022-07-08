import { Container, Loader, Sprite, Texture } from 'pixi.js';
import { GameObject } from './gameObject';
import { Level } from './managers/levelManager';

interface Scene {
	container: Container;
	level: Level;
	resolution: number; // длина стороны спрайта в пикселях
	player: GameObject;
	enemies: Array<GameObject>;
}

export enum TileType {
	Empty = 0,
	Wall,
	Player,
	Enemy,
	Base,
	// etc...
}

class Scene {
	constructor(level: Level) {
		this.level = level;
		this.resolution = 64;
		this.player = new GameObject('player', TileType.Player, '../../assets/sprites/Player.png', this.level.player.coords);
		this.enemies = this.level.enemies.map((enemy, idx) => new GameObject(`enemy${idx}`, TileType.Enemy, '../../assets/sprites/Enemy.png', enemy.coords));
	}

	checkCoords(x?: number, y?: number): TileType {
		return this.level.board[y][x];
	}

	render() {
		const { board: board, player: player, enemies: enemies } = this.level;

		// const Empty = require('../../assets/sprites/Empty.png');
		// const Wall = require('../../assets/sprites/Wall.png');

		// Load resources
		// const loader: Loader = Loader.shared;
		// loader.add('Empty', '../../assets/sprites/Empty.png').add('Wall', '../../assets/sprites/Wall.png').load();
		delete this.container;
		this.container = new Container();

		// 1. Рендер поля
		for (let i = 0; i < board.length; i++) {
			const row = board[i];

			for (let j = 0; j < row.length; j++) {
				const tile = board[i][j];
				let sprite;
				let texture;

				switch (tile) {
					case TileType.Enemy:
					case TileType.Player:
					case TileType.Empty:
						texture = Texture.from('../../assets/sprites/Empty.png');
						sprite = new Sprite(texture);
						break;

					case TileType.Wall:
						texture = Texture.from('../../assets/sprites/Wall.png');
						sprite = new Sprite(texture);
						break;
					case TileType.Base:
						texture = Texture.from('../../assets/sprites/base.png');
						sprite = new Sprite(texture);
						break;
					// etc...
				}

				if (sprite) {
					sprite.x = j * this.resolution;
					sprite.y = i * this.resolution;
					this.container.addChild(sprite);
				}
			}
		}

		// 2. Размещение игрока
		this.container.addChild(this.player.sprite);

		// 3. Размещение врагов
		for (const enemy of this.enemies) {
			this.container.addChild(enemy.sprite);
		}
	}
}

export { Scene };
