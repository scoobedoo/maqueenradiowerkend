radio.onReceivedNumber(function (receivedNumber) {
    // van rechtdoor naar stoppen
    // van rechtdoor naar bocht links
    // vanuit rechtdoor naar bocht rechts
    // vanuit stilstaan naar bocht links
    // vanuit stilstaan naar bocht rechts
    // vanuit bocht links naar stoppen
    // vanuit bocht rechts naar stoppen
    // vanuit bocht links rechtdoor
    // vanuit bocht rechts rechtdoor
    // vanuit bocht links bocht rechts
    // vanuit bocht rechts bocht links
    if (motorLinksAan == false && motorRechtsAan == false && receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        motorLinksAan = true
        motorRechtsAan = true
    } else if (motorLinksAan == true && motorRechtsAan == true && receivedNumber == 1) {
        maqueen.motorStop(maqueen.Motors.All)
        motorLinksAan = false
        motorRechtsAan = false
    } else if (motorLinksAan == true && motorRechtsAan == true && receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.M1)
        motorLinksAan = false
        motorRechtsAan = true
    } else if (motorLinksAan == true && motorRechtsAan == true && receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorStop(maqueen.Motors.M2)
        motorLinksAan = true
        motorRechtsAan = false
    } else if (motorLinksAan == false && motorRechtsAan == false && receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        motorLinksAan = false
        motorRechtsAan = true
    } else if (motorLinksAan == false && motorRechtsAan == false && receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorStop(maqueen.Motors.M2)
        motorLinksAan = true
        motorRechtsAan = false
    } else if (motorLinksAan == false && motorRechtsAan == true && receivedNumber == 2) {
        maqueen.motorStop(maqueen.Motors.All)
        motorLinksAan = false
        motorRechtsAan = false
    } else if (motorLinksAan == true && motorRechtsAan == false && receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.All)
        motorLinksAan = false
        motorRechtsAan = false
    } else if (motorLinksAan == false && motorRechtsAan == true && receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        motorLinksAan = true
        motorRechtsAan = true
    } else if (motorLinksAan == true && motorRechtsAan == false && receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        motorLinksAan = true
        motorRechtsAan = true
    } else if (motorLinksAan == false && motorRechtsAan == true && receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorStop(maqueen.Motors.M2)
        motorLinksAan = true
        motorLinksAan = false
    } else if (motorLinksAan == true && motorRechtsAan == false && receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        maqueen.motorStop(maqueen.Motors.M1)
        motorLinksAan = false
        motorRechtsAan = true
    }
})
let motorRechtsAan = false
let motorLinksAan = false
radio.setGroup(1)
motorLinksAan = false
motorRechtsAan = false
basic.forever(function () {
	
})
