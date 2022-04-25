DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    if (input.lightLevel() > 100) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
