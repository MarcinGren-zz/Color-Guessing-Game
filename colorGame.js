var testColor = document.querySelector(".col-sm-4")
var allColorSquares = document.querySelectorAll(".box")
var rgbHtmlAnswer = document.querySelector(".rgbanswer")
var newColorsButton = document.querySelector(".newcolors")
var hardButton = document.querySelector(".hardbutton")
var easyButton = document.querySelector(".easybutton")

var correctAnswer = "" //these 3 are temp, might refactor them later
var randomAnswer = Math.floor(Math.random() * 6) //these 3 are temp, might refactor them later

function randomNumberRGB() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    return "rgb(" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")"
}

function checkIfClickedBoxIsTheCorrectOne(element) {
    if (element.style.background.toUpperCase() == correctAnswer) {
        console.log("GREAT!")
    } else {
        console.log("NOT GREAT :(")
        element.style.removeProperty("background")
        element.classList.add("disabledbox")
    }
}

function getRGBFromRandomedAnswer() { //can move randomAnswer inside
    correctAnswer = allColorSquares[randomAnswer].style.background.toUpperCase()
    rgbHtmlAnswer.innerHTML = correctAnswer //these 3 are temp, might refactor them later
    rgbHtmlAnswer.style.textAlign="center"
}

function randomAllBoxesColors() {
    for (var i = 0; i < allColorSquares.length; i++) {
        allColorSquares[i].style.background = randomColor()
        allColorSquares[i].addEventListener("click", function() {
            checkIfClickedBoxIsTheCorrectOne(this)
        })
    }
    getRGBFromRandomedAnswer()
}

function removeThreeBottomBoxes() {
    randomAllBoxesColors()
    for (var i = 3; i < allColorSquares.length; i++) {
        allColorSquares[i].style.removeProperty("background")
        allColorSquares[i].classList.add("disabledbox")
        console.log(allColorSquares[i])
    }
}

// //so this is working and randoming for the 1 element and its also a border
// document.querySelector("span").addEventListener("click", function () {
//     testColor.style.border = "3px solid " + randomColor()
// })
randomAllBoxesColors()
newColorsButton.addEventListener("click", randomAllBoxesColors)
hardButton.addEventListener("click", randomAllBoxesColors)
easyButton.addEventListener("click", removeThreeBottomBoxes)
