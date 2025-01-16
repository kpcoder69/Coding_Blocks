let no = Math.floor(Math.random() * 100)+1;
let AttemptLeft = 3;

function check(){
    const guess = Number(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('result');
    const attemptMessage = document.getElementById('attempt');
    if(AttemptLeft > 1){
        if(guess == no){
            resultMessage.textContent = 'congrats! crrct guess';
            disableGame();w
            
        }
    }
}
function disableGame{
    
}