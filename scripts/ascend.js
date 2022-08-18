function ascendReset() {
    scoutCoins = 0
    scoutDebt = 0
    if (ascendlevel == 1) {
        csfg = 0
        heavy = 0
        nbsg = 0
        yeti = 0

    }

    ascendlevel += 1
    document.getElementById("ascendbutton").style.display = "none"

}

function ascendCheck() {
    if (ascendlevel == 1) {
        if (scoutCoins >= 50000) {
            document.getElementById("ascendbutton").style.display = "flex"
        }
    }
}


function ascendChange() {

}

let ascendcheckinterval = setInterval(ascendCheck, 1000)