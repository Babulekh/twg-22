import { Character } from "../gameObjects/characters/character";

interface HealthStats {
	owner: Character;
	maxHealth: number;
	health: number;
	isDead: Boolean;
}

interface DamageData {
	damage: number;
	//todo
}

class HealthStats {
	constructor(owner: Character, maxHealth = 100, health = maxHealth, isDead = false) {
		this.owner = owner;
		this.maxHealth = maxHealth;
		this.health = health;
		this.isDead = isDead;
	}

	onDamage(damageData: DamageData) {
		this.health -= damageData.damage;

		if (this.health <= 0) {
			this.health = 0;
			this.isDead = true;
			this.owner.onDeath();
		}
	}
}

export { HealthStats };
