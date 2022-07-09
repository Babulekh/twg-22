enum TileType {
	Empty = 0,
	Wall,
	Player,
	Enemy,
	Base,
	// etc...
}

enum ActiveBehaviour {
	Patrol = 'patrol',
	Idle = 'idle',
}

interface DamageData {
	damage: number;
	//todo
}

export { TileType, ActiveBehaviour, DamageData };
