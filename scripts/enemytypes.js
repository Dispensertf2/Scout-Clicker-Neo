class Enemy {
    constructor (name, health, regen, attack, sprite, battleback) {
        this.name = name
        this.health = health 
        this.regen = regen
        this.attack = attack 
        this.sprite = sprite
        this.battleback = battleback
    }
}

let enemy_types =  {} 

enemy_types['dummy'] = new Enemy("Dummy", 100000000000, 0, 0, "assets/enemies/dummy.png", "assets/battlebacks/range.png")