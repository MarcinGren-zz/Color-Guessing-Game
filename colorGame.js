var testColor = document.querySelector(".col-sm-4")
var allColorSquares = document.querySelectorAll(".box")
var rgbHtmlAnswer = document.querySelector(".rgbanswer")
var newColorsButton = document.querySelector(".newcolors")
var hardButton = document.querySelector(".hardbutton")
var easyButton = document.querySelector(".easybutton")
var tryAgainPlace = document.querySelector(".tryagain")
var mainConsole = document.querySelector(".mainconsole")

var correctAnswer = "" //these 3 are temp, might refactor them later
var randomAnswer = Math.floor(Math.random() * 6) //these 3 are temp, might refactor them later

function randomNumberRGB() {
    return Math.floor(Math.random() * 255)
}

function randomColor() {
    return "rgb(" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")"
}

function checkIfClickedBoxIsTheCorrectOne(element) {
    if (element.style.backgroundColor.toUpperCase() == correctAnswer) {
        tryAgainPlace.innerHTML = "Correct!"
        guessedCorrectly()
    } else {
        tryAgainPlace.innerHTML = "Try again"
        element.style.removeProperty("background-color")
        element.classList.add("disabledbox")
    }
}

function getRGBFromRandomedAnswer() { //can move randomAnswer inside
    correctAnswer = allColorSquares[Math.floor(Math.random() * 6)].style.backgroundColor.toUpperCase()
    rgbHtmlAnswer.innerHTML = correctAnswer //these 3 are temp, might refactor them later
    rgbHtmlAnswer.style.textAlign="center"
}

function randomAllBoxesColors() {
    randomAnswer = Math.floor(Math.random() * 6)
    for (var i = 0; i < allColorSquares.length; i++) {
        allColorSquares[i].style.backgroundColor = randomColor()
        allColorSquares[i].classList.remove("disabledbox")
        allColorSquares[i].addEventListener("click", function() {
            checkIfClickedBoxIsTheCorrectOne(this)
        })
    }
    getRGBFromRandomedAnswer()
    mainConsole.style.removeProperty("backgroundColor")
}

function removeThreeBottomBoxes() {
    randomAllBoxesColors()
    for (var i = 3; i < allColorSquares.length; i++) {
        allColorSquares[i].style.removeProperty("background-color")
        allColorSquares[i].classList.add("disabledbox")
        console.log(allColorSquares[i])
    }
    correctAnswer = allColorSquares[Math.floor(Math.random() * 3)].style.backgroundColor.toUpperCase()
    mainConsole.style.backgroundColor = "steelblue"
}

function guessedCorrectly() {
    for (var i = 0; i < allColorSquares.length; i++) {
        allColorSquares[i].style.backgroundColor = correctAnswer
    }
    mainConsole.style.backgroundColor = correctAnswer
    newColorsButton.textContent = "PLAY AGAIN?"
}

function toggleSelectedEasy() {
        hardButton.classList.remove("selected")
        easyButton.classList.add("selected")
    } 

function toggleSelectedHard() {
        easyButton.classList.remove("selected")
        hardButton.classList.add("selected")
    } 

// //so this is working and randoming for the 1 element and its also a border
// document.querySelector("span").addEventListener("click", function () {
//     testColor.style.border = "3px solid " + randomColor()
// })
hardButton.classList.add("selected")
randomAllBoxesColors()
newColorsButton.addEventListener("click", randomAllBoxesColors)
// [randomAllBoxesColors, toggleSelectedHard].array.forEach(func => {
//     hardButton.addEventListener("click", func)
// }) gonna work on this later
hardButton.addEventListener("click", randomAllBoxesColors)
hardButton.addEventListener("click", toggleSelectedHard)
easyButton.addEventListener("click", removeThreeBottomBoxes)
easyButton.addEventListener("click", toggleSelectedEasy)
