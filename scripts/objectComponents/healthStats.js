class HealthStats {
    constructor(owner, maxHealth = 100, health = maxHealth, isDead = false) {
        this.owner = owner;
        this.maxHealth = maxHealth;
        this.health = health;
        this.isDead = isDead;
    }

    onDamage(damageData) {
        this.health -= damageData.damage;

        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
            this.owner.onDeath();
        }
    }
}
