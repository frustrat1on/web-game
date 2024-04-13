let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let changeImg = document.getElementById("change-img");
let chance = 5;
let gameOver = false;
let history = [];


resetButton.addEventListener("click", reset);
playButton.addEventListener("click", play);



function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}
pickRandomNum();



function play() {
    let userValue = userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "범위값을 벗어났습니다";
        return;
    }
    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다";
        return;
    }
    if (chance == 1) {
        gameOver = true;
        changeImg.src="https://media1.tenor.com/m/fAKIFrYkfpAAAAAd/sad-sad-cat.gif"
    }
    if (gameOver == true) {
        playButton.disabled = true;
        
    }

    chance--;
    chanceArea.textContent = `남은기회:${chance}번`;
    console.log("chance", chance);



    if (userValue < computerNum) {
        resultArea.textContent = "UP";
    } else if (userValue > computerNum) {
        resultArea.textContent = "down";
    } else {
        resultArea.textContent = "정답";
        gameOver = true;
        changeImg.src="https://media1.tenor.com/m/vuJzzAUfJakAAAAd/victory-achieved.gif"
    }
    history.push(userValue);
    console.log(history);
    }
   




function reset() {
    userInput.Value = "";
    pickRandomNum();
    resultArea.textContent = "새로운번호생성";
    gameOver=false;
    chance=5;
    changeImg.src="https://media1.tenor.com/m/AiT4-_vjfc4AAAAC/kerehn-1.gif"
    

}
