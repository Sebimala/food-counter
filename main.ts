input.onButtonPressed(Button.A, function () {
    Drink += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Drink + Food))
})
input.onButtonPressed(Button.B, function () {
    Food += 1
})
let Food = 0
let Drink = 0
Drink = 0
Food = 0
basic.forever(function () {
	
})
