var testColor = document.querySelector(".col-sm-4")
var allColorSquares = document.querySelectorAll(".thumbnail")
var rgbHtmlAnswer = document.querySelector("#rgbanswer")
var newColorsButton = document.querySelector("#newcolors")

var correctAnswer = "" //these 3 are temp, might refactor them later
var randomAnswer = Math.floor(Math.random() * 6) //these 3 are temp, might refactor them later

function randomNumberRGB() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    return "rgb(" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")"
}

function getRGBFromRandomedAnswer() { //can move randomAnswer inside
    correctAnswer = allColorSquares[randomAnswer].style.background.toUpperCase()
    rgbHtmlAnswer.innerHTML = correctAnswer //these 3 are temp, might refactor them later
}

function randomAllBoxesColors() {
    for (var i = 0; i < allColorSquares.length; i++) {
        allColorSquares[i].style.background = randomColor()
    }
    getRGBFromRandomedAnswer()
}

// //so this is working and randoming for the 1 element and its also a border
// document.querySelector("span").addEventListener("click", function () {
//     testColor.style.border = "3px solid " + randomColor()
// })
randomAllBoxesColors()
newColorsButton.addEventListener("click", randomAllBoxesColors)