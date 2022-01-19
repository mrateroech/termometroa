let tenpext = 0
radio.setGroup(1)
basic.forever(function () {
    tenpext = input.temperature()
    tenpext = tenpext
    basic.showNumber(tenpext)
    radio.sendNumber(tenpext)
})
