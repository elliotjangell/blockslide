namespace SpriteKind {
    export const Text = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        buttonSound()
        mySprite.setVelocity(0, -50)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        buttonSound()
        mySprite.setVelocity(-50, 0)
    }
})
function startNewLevel () {
    mySprite.setVelocity(0, 0)
    tiles.setCurrentTilemap(levels.shift())
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        buttonSound()
        mySprite.setVelocity(50, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        buttonSound()
        mySprite.setVelocity(0, 50)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (levels.length == 0) {
        game.over(true)
    } else {
        startNewLevel()
    }
})
function buttonSound () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    371,
    759,
    800,
    0,
    50,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
}
let location: tiles.Location = null
let mySprite: Sprite = null
let levels: tiles.TileMapData[] = []
levels = [
tilemap`level1`,
tilemap`level10`,
tilemap`level11`,
tilemap`level12`,
tilemap`level13`
]
mySprite = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 8 8 8 8 8 8 8 8 8 8 8 8 f 8 
    8 6 f f f f f f f f f f f f f 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
startNewLevel()
game.onUpdate(function () {
    location = mySprite.tilemapLocation()
    if (location.column == 0 || location.row == 0 || (location.column == 8 || location.row == 6)) {
        game.over(false)
    }
})
