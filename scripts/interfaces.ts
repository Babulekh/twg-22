interface PlayerObject {
	coords: Array<number>;
	maxHealth: number;
	health: number;
}

interface EnemyObject {
	coords: Array<number>;
	maxHealth: number;
	health: number;
}

interface Level {
	board: Array<Array<number>>;
	player: PlayerObject; // TODO объединить интрефейс игрока с сещуствующим модулем
	enemies: Array<EnemyObject>; // TODO сделать интерфейс врага
}

export { PlayerObject, EnemyObject, Level };
