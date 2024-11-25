let Cislo = 0
function zistiKlaves () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        return 2
    } else {
        if (pins.digitalReadPin(DigitalPin.P14) == 1) {
            return 5
        } else {
            if (pins.digitalReadPin(DigitalPin.P13) == 1) {
                return 8
            }
            if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                return 0
            }
        }
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        if (pins.digitalReadPin(DigitalPin.P15) == 1) {
            return 3
        } else {
            if (pins.digitalReadPin(DigitalPin.P14) == 1) {
                return 6
            } else {
                if (pins.digitalReadPin(DigitalPin.P13) == 1) {
                    return 9
                }
                if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                    return 0
                }
            }
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.digitalWritePin(DigitalPin.P11, 0)
            pins.digitalWritePin(DigitalPin.P10, 0)
            pins.digitalWritePin(DigitalPin.P9, 1)
            if (pins.digitalReadPin(DigitalPin.P15) == 1) {
                return 1
            } else {
                if (pins.digitalReadPin(DigitalPin.P14) == 1) {
                    return 4
                } else {
                    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
                        return 7
                    }
                    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                        return 0
                    }
                }
                return -1
            }
            return -1
        }
    }
}
basic.forever(function () {
    Cislo = zistiKlaves()
    if (Cislo >= 0) {
        basic.showNumber(Cislo)
    }
})
