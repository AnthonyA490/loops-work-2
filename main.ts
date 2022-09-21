input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 1; index++) {
        basic.pause(200)
        sprite.set(LedSpriteProperty.Y, 2)
        basic.pause(200)
        sprite.set(LedSpriteProperty.Y, 1)
        basic.pause(200)
        sprite.set(LedSpriteProperty.X, 2)
        basic.pause(200)
        sprite.set(LedSpriteProperty.X, 1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(3, 3)
