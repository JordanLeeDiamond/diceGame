const rules = document.getElementById("rules");
const d1 = document.getElementById("d1");
const score = document.getElementById("score");
const rollButton = document.getElementById("roll");
const resetButton = document.getElementById("reset");

let p1score = 0;



rollButton.addEventListener("click", () => {
    const diceRoll = Math.floor(Math.random() * 6 + 1)
    let diceImage = "./images/d" + diceRoll + ".png"
    d1.src = diceImage;
    if (diceRoll == 1) {
        rules.innerHTML = "You Lose!"
        p1score = 0;
    } else {
        rules.innerHTML = `You Rolled a ${diceRoll}`;
    }

resetButton.addEventListener("click", () => {
    score.innerHTML = 0;
    rules.innerHTML = "Score 21 to Win!";
})

    if (diceRoll != 1) {
        
        p1score += diceRoll
        score.innerHTML = p1score

    } else {
        score.innerText = 0;
    }

    if (p1score >= 21) {
        rules.innerHTML = "You Win!"
        p1score = 0
    }

})