var testColor = document.querySelector(".col-sm-4")
var allColorSquares = document.querySelectorAll(".thumbnail")

var randomAnswer = Math.floor(Math.random() * 6)
var correctAnswer = getRGBFromRandomedAnswer()

function randomNumberRGB() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    return "rgb(" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")"
}

function getRGBFromRandomedAnswer() { //can move randomAnswer inside
    return allColorSquares[randomAnswer].style.background.toUpperCase()
}

function randomAllBoxesColors() {
    for (var i = 0; i < allColorSquares.length; i++) {
        allColorSquares[i].style.background = randomColor()
    }
}

// //so this is working and randoming for the 1 element and its also a border
// document.querySelector("span").addEventListener("click", function () {
//     testColor.style.border = "3px solid " + randomColor()
// })
randomAllBoxesColors()