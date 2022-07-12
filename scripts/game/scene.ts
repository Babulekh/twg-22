import { Container, Sprite, Texture } from 'pixi.js';
import { GameObject } from './gameObject';
import { Level } from '../interfaces';
import { TileType } from '../enums';
import { GameManager } from './managers/gameManager';

interface Scene {
	container: Container;
	level: Level;
	player: GameObject;
	enemies: Array<GameObject>;
}

class Scene {
	constructor(level: Level) {
		this.level = level;
		this.player = new GameObject('Player', TileType.Player, { x: this.level.player.coords[0], y: this.level.player.coords[1] });
		this.enemies = this.level.enemies.map((enemy) => new GameObject('Enemy', TileType.Enemy, { x: enemy.coords[0], y: enemy.coords[1] }));
		this.container = new Container();
	}

	checkCoords(x?: number, y?: number): TileType {
		return this.level.board[y][x];
	}

	render() {
		const { board: board } = this.level;

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
						texture = Texture.from('../../assets/sprites/Base.png');
						sprite = new Sprite(texture);
						break;
					// etc...
				}

				if (sprite) {
					sprite.x = j * GameManager.Instance.resolution;
					sprite.y = i * GameManager.Instance.resolution;
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
