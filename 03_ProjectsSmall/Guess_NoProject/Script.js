let no = Math.floor(Math.random() * 100)+1;
let AttemptLeft = 3;

function check(){
    const guess = Number(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('result');
    const attemptMessage = document.getElementById('attempt');
    if(AttemptLeft > 1){
        if(guess == no){
            resultMessage.textContent = 'congrats! crrct guess';
            disableGame();
            
        }
        else{
            AttemptLeft-- ;
            resultMessage.textContent = guess > no? "Higher" : "Lower";
            attemptMessage.textContent = `Attempt Left:${AttemptLeft}`;
        }
    }
    else{
        resultMessage.textContent = "attempts exhausted";
        disableGame();
    }
}
function disableGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button[onclick ="check()"]').disabled = true;
}