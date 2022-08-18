//level 1

function csfgGen() {
    scoutCoins += 1 * csfg
}

function heavyGen() {
    scoutCoins += 3 * heavy
}

function nbsgGen() {
    scoutCoins += 2 * nbsg
}

function yetiGen() {
    scoutCoins += 6 * yeti
}

//level 2
function alienGen() {
    scoutCoins += 5 * alien 

}

function ufoGen() {
    scoutCoins += 10 * ufo
}

function meteorGen() {
    scoutCoins += 20 * meteor 
}

function wormholeGen() {
    scoutCoins += 75 * wormhole
}


let csfginterval = setInterval(csfgGen, csfgtime)
let heavyinterval = setInterval(heavyGen, heavytime)
let nbsginterval = setInterval(nbsgGen, nbsgtime)
let yetiinterval = setInterval(yetiGen, yetitime)

let alieninterval = setInterval(alienGen, alientime)
let ufointerval = setInterval(ufoGen, ufotime)
let meteorinterval = setInterval(meteorGen, meteortime)
let wormholeinterval = setInterval(wormholeGen, wormholetime)