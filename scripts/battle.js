function closebattlemenu() {
    document.getElementById("battlemenuparent").style.display = "none"
}

function openbattlemenu(enemyname) {
    document.getElementById("battlemenuparent").style.display = "flex"
    
    this.enemy = enemy_types[enemyname]

    document.getElementById("enemy_sprite").src = enemy.sprite
    document.getElementById("battlemenu").style.backgroundImage = `url(${enemy.battleback})`
    enemyupdate()


}

function enemyupdate() {
    document.getElementById("enemystats").textContent = "Name: " + enemy.name + " | Health: " + enemy.health.toLocaleString()
}

function enemyattack() {
    enemy.health -= attack
    enemyupdate()
    
}