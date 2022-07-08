"use strict";
exports.__esModule = true;
exports.HealthStats = void 0;
var HealthStats = /** @class */ (function () {
    function HealthStats(owner, maxHealth, health, isDead) {
        if (maxHealth === void 0) { maxHealth = 100; }
        if (health === void 0) { health = maxHealth; }
        if (isDead === void 0) { isDead = false; }
        this.owner = owner;
        this.maxHealth = maxHealth;
        this.health = health;
        this.isDead = isDead;
    }
    HealthStats.prototype.onDamage = function (damageData) {
        this.health -= damageData.damage;
        if (this.health <= 0) {
            this.health = 0;
            this.isDead = true;
            this.owner.onDeath();
        }
    };
    return HealthStats;
}());
exports.HealthStats = HealthStats;
