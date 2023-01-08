const startBtn = document.querySelector('.start');
const tryAgain = document.querySelector('.try-again');
const answerBtn = document.querySelector('.answer');
const displayGuess = document.querySelector('.display-guess');
const input = document.querySelector('#guess-input');
const guessBtn = document.querySelector('.guess');
const warningMsg = document.querySelector('.warning-msg');

//按鈕們初始設定
startBtn.disabled = false;
tryAgain.disabled = true;
answerBtn.disabled = true;
guessBtn.disabled = true;

//按startBtn 產生四個亂數(字串)
let ansNumResult = "";
startBtn.addEventListener('click', function () {
    getRandom();
    let ansNum = getRandom();
    ansNumResult = `${ansNum[0]}${ansNum[1]}${ansNum[2]}${ansNum[3]}`
    console.log(ansNumResult);
    startBtn.disabled = true;
    tryAgain.disabled = false;
    answerBtn.disabled = false;
    guessBtn.disabled = false;
    warningMsg.innerHTML = `<span style="font-weight: bold;">請輸入4個不重複數字</span>`;
})

function getRandom() {
    let numsCount = 10;

    ansNum = [];
    for (let i = 0; i < numsCount; i++) {
        ansNum[i] = i; //0,1,2,3,4,5,6,7,8,9
    }

    ansNum.sort(function () {
        return 0.5 - Math.random(); //產生0-9的亂數
    })
    return ansNum;
}

//按 answerBtn 看答案
answerBtn.addEventListener('click', function () {
    alert(ansNumResult);
})

// 按 tryAgain遊戲重新開始
tryAgain.addEventListener('click', function () {
    getRandom();
    displayGuess.innerHTML = "";
    startBtn.disabled = false;
    input.value = "";
    guessBtn.disabled = true;
    answerBtn.disabled = true;
    tryAgain.disabled = true;
    warningMsg.innerHTML = `<span style="color:#945255; font-weight: bold;">答案是${ansNumResult} ! 請按Start重新開始遊戲 !</span>`;
})

//把正解和猜的數字都轉成字元陣列去比較
let ansNumArr = [];
let guessArr = [];
let guessTxt;
function createAnsNumArr() {
    ansNum1 = ansNumResult.charAt(0);
    ansNum2 = ansNumResult.charAt(1);
    ansNum3 = ansNumResult.charAt(2);
    ansNum4 = ansNumResult.charAt(3);
    ansNumArr = [ansNum1, ansNum2, ansNum3, ansNum4];
    console.log(ansNumArr);
}

function createGuessArr() {
    guessTxt = input.value;
    guessNum1 = guessTxt.charAt(0);
    guessNum2 = guessTxt.charAt(1);
    guessNum3 = guessTxt.charAt(2);
    guessNum4 = guessTxt.charAt(3);
    guessArr = [guessNum1, guessNum2, guessNum3, guessNum4];
    console.log(guessArr);
}

//新增guessBtn的點擊事件
guessBtn.addEventListener('click', function () {
    createAnsNumArr();
    createGuessArr();
    let A = 0;
    let B = 0;
    let myIntNums;
    const radix = 10;
    guessArr.forEach((numStr) => {
        myIntNums = parseInt(numStr, radix);
        console.log(myIntNums);
    })
    if (isNaN(myIntNums)) {
        warningMsg.innerHTML = `<span style="color:#945255; font-weight: bold;">您輸入的非4個不重複數字 ! 請重新輸入</span>`;
        input.value = "";
    }
    else {
        if (guessTxt === ansNumResult) {
            warningMsg.innerHTML = `<span style="color:#945255; font-weight: bold;">猜對了 ! 恭喜你 !</span>`;
            input.value = "";
            displayGuess.innerHTML += `<span style="color:#959E89; font-weight: bold;">4A0B</span> ${guessTxt}<br>`;
            startBtn.disabled = true;
            guessBtn.disabled = true;
            answerBtn.disabled = true;
            tryAgain.disabled = false;
        }
        // else if (guessTxt.length !== 4) {
        //     warningMsg.innerText = `請輸入4個數字 !`;
        //     input.value = "";
        // }
        else if (guessTxt.length !== 4 || judgeRepeatNum()) {
            warningMsg.innerHTML = `<span style="color:#945255; font-weight: bold;">您輸入的非4個不重複數字 ! 請重新輸入</span>`;
            //跳完要清掉
            input.value = "";
        }
        else {
            createGuessArr();
            for (let i = 0; i < ansNumArr.length; i++) {
                if (guessArr[i] === ansNumArr[i]) {
                    A++;
                }
                else if (guessArr.includes(ansNumArr[i])) {
                    B++;
                }
            }
            displayGuess.innerHTML += `<span style="color:#9F7A7F; font-weight: bold;">${A}A${B}B</span> ${guessTxt}<br>`;
            input.value = "";
        }
    }


})

//防呆:防止輸入重複數字
function judgeRepeatNum() {
    let sortGuessArr = guessArr.sort((a, b) => a - b);
    for (let i = 0; i < guessArr.length - 1; i++) {
        if (sortGuessArr[i] == sortGuessArr[i + 1]) {
            return true;
        }
    }
    return false;
}