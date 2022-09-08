input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showString("T. Normal")
    } else {
        basic.showString("Alerta")
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() >= 100 && input.lightLevel() <= 200) {
        basic.showString("L. Normal")
    } else {
        basic.showString("Alerta")
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
