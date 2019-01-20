let colors = ['yellow', 'green', 'red', 'blue'];

let screen = document.querySelector('.screen');
let score = document.querySelector('.score');
let progresBar = document.querySelector('.run-bar');
let gameStart = document.querySelector('.game-start') 
let levelScreen = document.querySelector('.level');
let gameOver = document.querySelector('.game-over');
let finalScore = document.querySelector('.finalScore');
let buttons = document.querySelector('.buttons');
let mainScreen = document.querySelector('.container');

let shuffelButtons = () => {
for (var i = buttons.children.length; i >= 0; i--) {
    buttons.appendChild(buttons.children[Math.random() * i | 0]);
}
}
// console.log(buttons);

// for(let i = 0; i < button.length; i++){

// }
// let button = [1,2,3,4]

// let shuffle = (button) => {
//     for (let i = button.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [button[i], button[j]] = [button[j], button[i]];
//     }
//     return button;
// }
// console.log(shuffle(button));


let screenSpalva = '';
let progresBarWidth = 0;
let gameTime;
let level = 1;
let gameOverButtons = true;

score.innerHTML = 0;
levelScreen.innerText = 'Level:'+ level;



//Funkcija atsakynga uz zaidimo paleidima
let startButton = () => {

    mainScreen.classList.toggle('filter');
    gameStart.style.visibility = 'hidden';
    newInterval()

}

//Funkcija atsakynga uz naujo zaidimo paleidima
let startNewGame = () => {
    // gameOverButtons = false;
    mainScreen.classList.toggle('filter');
    gameOver.classList.toggle('startDivOut');
    score.innerHTML = 0;
    level = 1;
    levelScreen.innerText = 'Level:'+ level;
    newInterval();
   
}

//Funkcija atsakynga uz zaidimo pajungima ir laika
let newInterval = () => {
    clearInterval(gameTime);
    gameOverButtons = false;
    progresBarWidth = 0;
    gameTime= setInterval( () => { runProgres() }, 100/level)

    //Funkcija atsakynga uz progressBar'a
    let runProgres = () => {

        if( progresBarWidth >= 100){
            gameOverButtons = true;
            mainScreen.classList.toggle('filter');
            gameOver.classList.toggle('startDivOut')
            clearInterval(gameTime)
        } else {
        progresBarWidth++;
        progresBar.style.width = progresBarWidth +'%';
        }
    }
}

//Funkcija atsakynga uz random spalvas ant eikrano
let screenBG = () => {
    screenSpalva = colors[Math.floor(Math.random()*colors.length)];
    screen.style.background =  screenSpalva;

}

screenBG()

//Funkcija atsakynga uz zaidimo mygtuku paspaudima rezultata ir lygi
let sendSpalva = (sendSpalva) => {
   if(gameOverButtons == true){
       return false;
   }
    if( sendSpalva == screenSpalva) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        finalScore.innerHTML = 'Yours score: ' + score.innerHTML;
        
        screenBG()
        newInterval()
        if(parseInt(score.innerHTML) % 5 == 0){
            level++;
            console.log(level);
            levelScreen.innerText = 'Level:'+ level;
            // shuffle(button)
            shuffelButtons()
        }
    }
}
