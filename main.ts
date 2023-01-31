radio.onReceivedNumber(function (receivedNumber) {
    while (enviado == 0) {
        basic.pause(100)
    }
    basic.pause(100)
    basic.clearScreen()
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    radio.sendNumber(1)
    serial.writeString("piedra")
    basic.pause(100)
    enviado += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    radio.sendNumber(3)
    serial.writeString("tijera")
    basic.pause(100)
    enviado += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
    serial.writeString("papel")
    basic.pause(100)
    enviado += 1
})
let enviado = 0
radio.setGroup(138)
