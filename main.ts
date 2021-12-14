radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Rover.stop(eStopMode.Brake)
        Rover.setLedColor(0xFF0000)
    } else {
        if (receivedNumber == 1) {
            Rover.ledClear()
            Rover.setPixelColor(1, 0x0000FF)
            Rover.steer(eDirection.Left, 30)
            Rover.move(eVector.Forward, 40)
        } else {
            if (receivedNumber == 2) {
                Rover.ledClear()
                Rover.setPixelColor(2, 0x0000FF)
                Rover.steer(eDirection.Right, 30)
                Rover.move(eVector.Forward, 40)
            } else {
                if (receivedNumber == 3) {
                    Rover.ledClear()
                    Rover.setLedColor(0x18E600)
                    Rover.zeroServos(eServoGroup.Wheel)
                    Rover.move(eVector.Forward, 80)
                } else {
                    if (receivedNumber == 4) {
                        Rover.ledClear()
                        Rover.setPixelColor(0, 0xFF0000)
                        Rover.setPixelColor(3, 0xFF0000)
                        Rover.zeroServos(eServoGroup.Wheel)
                        Rover.move(eVector.Reverse, 40)
                    }
                }
            }
        }
    }
})
radio.setGroup(1)
Rover.zeroServos(eServoGroup.All)
Rover.ledClear()
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
