
const typeText = document.getElementById("typetext")
const input = document.getElementById("input")
const scoreText = document.getElementById("score")


let textString = "lorem ipsum dolor sit amet"
textString = textString.split(" ")

let i = 0;
let score = 0;
typeText.innerHTML = textString.toString()
scoreText.innerHTML+= score

input.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    console.log(textString[i])
    if (e.target.value.includes(" ")) {

        if (e.target.value.trim() === textString[i]) {
            score++
            scoreText.innerHTML = score
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