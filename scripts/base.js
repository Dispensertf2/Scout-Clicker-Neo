

function consoleUpdate(string) {
    document.getElementById("messagebox").textContent = string
}

function ascendupdate() {
    if (ascendlevel == 1) {
        document.getElementById("body").style.backgroundImage = "url(assets/background/background_1.png)"
        document.getElementById("stats").style.display = "none"
        document.getElementById("gen2").style.display = "none"
        document.getElementById("level2items").style.display = "none"
        document.getElementById("weaponshopopen").style.display = "none"
    }
    if (ascendlevel == 2) {
        document.getElementById("body").style.backgroundImage = "url(assets/background/background_2.png)"
        document.getElementById("body").style.color = "#fff"
        document.getElementById("gen1").style.display = "none"
        document.getElementById("level1items").style.display = "none"
        document.getElementById("scoutbuttonimage").src = "assets/button/statue384.png"
        document.getElementById("stats").style.display = "block"
        document.getElementById("gen2").style.display = "block"
        document.getElementById("level2items").style.display = "block"
        document.getElementById("weaponshopopen").style.display = "block"
    }
}



function update() {
    debtCheck()
    ascendupdate()
    document.getElementById("scoutCoins").textContent = "Scout Coins: " + scoutCoins.toLocaleString()
    document.getElementById("scoutDebt").textContent = "Debt: " + scoutDebt
    document.getElementById("scoutMod").textContent = "Mod: " + scoutMod
    //genammounts
    document.getElementById("csfgs").textContent = "Counterfeit Scout Generators: "+csfg
    document.getElementById("heavys").textContent = "Heavys: "+heavy
    document.getElementById("nbsgs").textContent = "Namebrand Scout Generators: "+nbsg
    document.getElementById("yetis").textContent = "Yetis: "+yeti

    document.getElementById("aliens").textContent = "Aliens: " + alien 
    document.getElementById("ufos").textContent = "UFOs: " + ufo 
    document.getElementById("meteors").textContent = "Meteors: " + meteor
    document.getElementById("wormholes").textContent = "Wormholes: " + wormhole 
    
    //title
    document.getElementById("title").textContent = "$" + scoutCoins + " - Scout Clicker NEO"
    
    //shop
    document.getElementById("lipprice").textContent = "Costs: " + liptonprice + " Scout Coins"
    document.getElementById("cfsgprice").textContent = "Costs: " + csfgprice + " Scout Coins"
    document.getElementById("heavyprice").textContent = "Costs: " + heavyprice+ " Scout Coins"
    document.getElementById("nbsgprice").textContent = "Costs: " + nbsgprice+ " Scout Coins"
    document.getElementById("yetiprice").textContent = "Costs: " + yetiprice+ " Scout Coins"

    document.getElementById("alienprice").textContent = "Costs: " + alienprice + " Scout Coins"
    document.getElementById("ufoprice").textContent = "Costs: " + ufoprice + " Scout Coins"
    document.getElementById("meteorprice").textContent = "Costs: " + meteorprice+ " Scout Coins"
    document.getElementById("wormholeprice").textContent = "Costs: " + wormholeprice+ " Scout Coins"

    document.getElementById("atk").textContent = "Attack: " + attack
    document.getElementById("def").textContent = "Defense: " + defense
    document.getElementById("dod").textContent = "Dodge: " + dodge
    
}


function plusScoutCoin() {
    scoutCoins += 1 * scoutMod

    update()

}

function debtCheck() {
    if (scoutCoins < 0) {
        reset()
        consoleUpdate("You were in the negative, so the IRS came and reset your game")
        location.reload()    
    }

    if (scoutDebt > scoutCoins * 2) {
        consoleUpdate("You need to start collecting enough money to pay off your debt")
        setTimeout(irsSub, 2500)
        
        
    }
}

function irsSub() {
    if (scoutDebt > scoutCoins) {
        scoutCoins -= 1

    }
}

function payDebt() {
    if (scoutCoins >= scoutDebt && scoutDebt != 0) {
        scoutCoins -= scoutDebt
        scoutDebt = 0

        consoleUpdate("Congrats, you paid off your debt!")

        
    }
    update()
}

function reset() {
    //Player Stats

    scoutCoins = 0
    scoutDebt = 0
    scoutMod = 1

    ascendlevel = 1

    liptonprice = 10
    csfgprice = 100
    heavyprice = 300
    nbsgprice = 750
    yetiprice = 2000

    csfg = 0
    heavy = 0
    nbsg = 0
    yeti = 0



    csfgtime = 3000
    heavytime = 2000
    nbsgtime = 1000
    yetitime = 1000

    alienprice = 500
    ufoprice = 2000
    meteorprice = 25000
    wormholeprice = 75000
    meteor = 0

    alien = 0
    ufo = 0
    meteor = 0
    wormhole = 0
    
    alientime = 3000
    ufotime = 1000
    meteortime = 500
    wormholetime = 500
}

setInterval(update, 1000)