let shoutgun_purchaseable = true 



function purchaseweapon(weaponid) {
    if (weaponid == 0) {
        if (shoutgun_purchaseable == true) {
            scoutDebt += 2000

            attack += 10

            current_weapon = "shotgun"

            engie_talk("Good choice, powerful for taking down targets in close ranges.")

            shoutgun_purchaseable = false
        }
        else {
            current_weapon = "shotgun"

            engie_talk("Here's your shotgun back")
        }
    }
    update()
}


function engie_talk(string) {
    document.getElementById("engiedialogue").textContent = string
}