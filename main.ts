input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        sprite = game.createSprite(3, 3)
        basic.pause(200)
        sprite.set(LedSpriteProperty.Y, 2)
    }
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Angry)
