function saveGame() {
    let gameData = {
        scoutCoins: scoutCoins,
        scoutDebt: scoutDebt,
        scoutMod: scoutMod,
        ascendlevel: ascendlevel,
        //gen1
        liptonprice: liptonprice,
        csfgprice: csfgprice,
        heavyprice: heavyprice,
        nbsgprice: nbsgprice,
        yetiprice: yetiprice,
        csfg: csfg,
        heavy: heavy,
        nbsg: nbsg,
        yeti: yeti,
        csfgtime: csfgtime,
        heavytime: heavytime,
        nbsgtime: nbsgtime,
        yetitime: yetitime,
        //gen2
        alienprice: alienprice,
        ufoprice: ufoprice,
        meteorprice: meteorprice,
        wormholeprice: wormholeprice,
        alien: alien,
        ufo: ufo,
        meteor: meteor,
        wormhole: wormhole,
        aleintime: alientime,
        ufotime: ufotime,
        meteortime: meteortime,
        wormholetime: wormholetime,

    }

    localStorage.setItem("scoutClickerSaveData", JSON.stringify(gameData))
}

function loadGame() {
    loadData = JSON.parse(localStorage.getItem("scoutClickerSaveData"))

    //long complex load game if statement bullshit
    if (loadData.scoutCoins !== 'undefined') scoutCoins = loadData.scoutCoins
    if (loadData.scoutDebt !== 'undefined') scoutDebt = loadData.scoutDebt
    if (loadData.scoutMod !== 'undefined') scoutMod = loadData.scoutMod
    if (loadData.ascendlevel !== 'undefined') ascendlevel = loadData.ascendlevel
    if (loadData.liptonprice !== 'undefined') liptonprice = loadData.liptonprice
    if (loadData.csfgprice !== 'undefined') csfgprice = loadData.csfgprice
    if (loadData.heavyprice !== 'undefined') heavyprice = loadData.heavyprice
    if (loadData.nbsgprice !== 'undefined') nbsgprice = loadData.nbsgprice
    if (loadData.yetiprice !== 'undefined') yetiprice = loadData.yetiprice
    if (loadData.csfg !== 'undefined') csfg = loadData.csfg
    if (loadData.heavy !== 'undefined') heavy = loadData.heavy
    if (loadData.nbsg !== 'undefined') nbsg = loadData.nbsg
    if (loadData.yeti !=='undefined') yeti = loadData.yeti 
    if (loadData.csfgtime !== 'undefined') csfgtime = loadData.csfgtime
    if (loadData.heavytime !== 'undefined') heavytime = loadData.heavytime
    if (loadData.nbsgtime !== 'undefined') nbsgtime = loadData.nbsgtime
    if (loadData.yetitime !== 'undefined') yetitime = loadData.yetitime

    if (loadData.alienprice !== 'undefined') alienprice = loadData.alienprice 
    if (loadData.ufoprice !== 'undefined') ufoprice = loadData.ufoprice 
    if (loadData.meteorprice !== 'undefined') meteorprice = loadData.meteorprice 
    if (loadData.wormholeprice !== 'undefined') wormholeprice = loadData.wormholeprice
    if (loadData.alien !== 'undefined') alien = loadData.alien 
    if (loadData.ufo !== 'undefined') ufo = loadData.ufo 
    if (loadData.meteor !== 'undefined') meteor = loadData.meteor 
    if (loadData.wormhole !== 'undefined') wormhole = loadData.wormhole
    if (loadData.alientime !== 'undefined') alientime = loadData.alientime 
    if (loadData.ufotime !== 'undefined') ufotime = loadData.ufotime 
    if (loadData.meteortime !== 'undefined') meteortime = loadData.meteortime 
    if (loadData.wormholetime !== 'undefined') wormholetime = loadData.wormholetime


    update()

}

function resetGame() {
    reset()
    saveGame()
    location.reload()
}

//comment out if adding anything new

window.onload = loadGame()

setInterval(saveGame, 20000)




