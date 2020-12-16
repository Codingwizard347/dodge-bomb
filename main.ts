input.onButtonPressed(Button.A, function () {
    Man.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Man.change(LedSpriteProperty.X, 1)
})
let Score = 0
let Drop = 0
let Man: game.LedSprite = null
let Life = 3
game.setScore(0)
Man = game.createSprite(2, 4)
let Plane = game.createSprite(2, 0)
let Bomb = game.createSprite(2, 0)
Bomb.set(LedSpriteProperty.Brightness, 60)
basic.forever(function () {
    if (Drop == 1) {
    	
    } else {
        basic.pause(500)
        Plane.change(LedSpriteProperty.X, 1)
        basic.pause(200)
        Drop = 1
        if (Plane.get(LedSpriteProperty.X) == 4) {
            basic.pause(500)
            Plane.set(LedSpriteProperty.X, 0)
        }
    }
})
basic.forever(function () {
    if (Life == 0 || Life < 0) {
        game.setScore(Score)
        game.gameOver()
    } else {
        if (Man.isTouching(Bomb)) {
            Life += -1
        }
    }
})
basic.forever(function () {
    if (Drop == 1) {
        Bomb.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        Bomb.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        Bomb.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        Bomb.change(LedSpriteProperty.Y, 1)
        Drop = 0
    } else {
        Bomb.set(LedSpriteProperty.Y, Plane.get(LedSpriteProperty.Y))
        Bomb.set(LedSpriteProperty.X, Plane.get(LedSpriteProperty.X))
        basic.pause(100)
        if (Bomb.get(LedSpriteProperty.X) == 4) {
            basic.pause(500)
            Bomb.set(LedSpriteProperty.X, 0)
        }
    }
})
basic.forever(function () {
    basic.pause(2000)
    Score += 1
})
