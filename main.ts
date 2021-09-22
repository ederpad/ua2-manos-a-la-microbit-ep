let salida_analogica = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, salida_analogica)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (salida_analogica > 1023) {
        salida_analogica = 0
    }
    salida_analogica += 50
})
