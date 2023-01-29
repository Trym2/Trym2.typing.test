
const typeText = document.getElementById("typetext")
const input = document.getElementById("input")
const timer = document.getElementById("timer")
const wpm = document.getElementById("wpm")


let textString = "lorem ipsum dolor sit amet"
textString = textString.split(" ")

let i = 0;
let score = 0;
let time = 30;
let totalWPM = 0;
typeText.innerHTML = textString.toString()
let timerRoll = false;


input.addEventListener("keyup", (e) => {

    if (timerRoll) {

    } else {
        setInterval(() => {
            if (time > 0) {
                time = time - 1
                timer.innerHTML = time.toString()
                console.log("HI")
            } else {
                clearInterval()
                let calculate = score * 2
                wpm.innerHTML = calculate.toString()
            }
        }, 1000)
    }

    timerRoll = true;

    console.log(e.target.value)
    console.log(textString[i])
    if (e.target.value.includes(" ")) {

        if (e.target.value.trim() === textString[i]) {
            score++
            textString[i] = "<span style='color: green'>" + textString[i] + "</span>"
            
            console.log("CORRECT")
        } else {
            textString[i] = "<span style='color: red'>" + textString[i] + "</span>"
            console.log("FALSE")
        }
        typeText.innerHTML = textString;
        i++
        e.target.value = ""  
    }
})


