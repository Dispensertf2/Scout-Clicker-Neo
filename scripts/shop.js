function buyItem(itemnumber) {
    if (itemnumber == 0) {
        scoutDebt += liptonprice
        liptonprice += 10
        consoleUpdate("You bought Lipton")
        document.getElementById("lipprice").textContent = "Costs: " + liptonprice + " Scout Coins"
        scoutMod += 1
    }
    if (itemnumber == 1) {
        scoutDebt += csfgprice
        csfgprice += 15
        consoleUpdate("You bought a Counterfiet Scout Generator")
        document.getElementById("cfsgprice").textContent = "Costs: " + csfgprice + " Scout Coins"

        csfg += 1
        
        clearInterval(csfginterval)
        if (csfgtime > 300) {
            csfgtime -= 5

        }
        csfginterval = setInterval(csfgGen, csfgtime)

    }
    if (itemnumber == 2) {
        scoutDebt += heavyprice
        heavyprice += 25
        consoleUpdate("You bought a Heavy")
        document.getElementById("heavyprice").textContent = "Costs: " + heavyprice+ " Scout Coins"

        heavy += 1

        clearInterval(heavyinterval)
        if (heavytime > 300) {
            heavytime -= 5
        }
        heavyinterval = setInterval(heavyGen, heavytime)
    }
    if (itemnumber == 3) {
        scoutDebt += nbsgprice
        nbsgprice += 50
        consoleUpdate("You bought a Namebrand Scout Generator")
        document.getElementById("nbsgprice").textContent = "Costs: " + nbsgprice+ " Scout Coins"

        nbsg += 1

        clearInterval(nbsginterval)
        if (nbsgtime > 300) {
            nbsgtime -= 5
        }
        nbsginterval = setInterval(nbsgGen, nbsgtime)
    }
    if (itemnumber == 4) {
        scoutDebt += yetiprice
        yetiprice += 75
        consoleUpdate("You bought a Yeti")
        document.getElementById("yetiprice").textContent = "Costs: " + yetiprice+ " Scout Coins"

        yeti += 1

        clearInterval(yetiinterval)
        if (yetitime > 300) {
            yetitime -= 5
        }
        yetiinterval = setInterval(yetiGen, yetitime)
    }
    if (itemnumber == 5) {
        scoutDebt += alienprice 
        alienprice += 150

        alien += 1

        consoleUpdate("You bought an Alien")
        document.getElementById("alienprice").textContent = "Costs: " + alienprice + " Scout Coins"

        clearInterval(alieninterval)
        if (alientime > 200) {
            alientime -= 10
        }
        alieninterval = setInterval(alienGen, alientime)


    }
    if (itemnumber == 6) {
        scoutDebt += ufoprice
        ufoprice += 250

        ufo += 1

        consoleUpdate("You bought a UFO")
        document.getElementById("ufoprice").textContent = "Costs: " + ufoprice + " Scout Coins"

        clearInterval(ufointerval)
        if (ufotime > 200) {
            ufotime -= 10
        }
        ufointerval = setInterval(ufoGen, ufotime)


    }
    if (itemnumber == 7) {
        scoutDebt += meteorprice
        meteorprice += 750

        meteor += 1

        consoleUpdate("You bought a Meteor")
        document.getElementById("meteorprice").textContent = "Costs: " + meteorprice + " Scout Coins"

        clearInterval(meteorinterval)
        if (meteortime > 200) {
            meteortime -= 10
        }
        meteorinterval = setInterval(meteorGen, meteortime)


    }
    if (itemnumber == 8) {
        scoutDebt += wormholeprice
        wormholeprice += 10000

        wormhole += 1

        consoleUpdate("You bought a Wormhole")
        document.getElementById("wormholeprice").textContent = "Costs: " + wormholeprice + " Scout Coins"

        clearInterval(wormholeinterval)
        if (wormholetime > 200) {
            wormholetime -= 10
        }
        wormholeinterval = setInterval(wormholeGen, wormholetime)


    }
    update()
}