
function checkGuess() {

    const randomno = Math.floor(Math.random() * 9)+1;
    const guessno = document.getElementById("guessno").value;
    const display = document.getElementById("display");

    if(!guessno)
    {
        alert("please Enter the No.")
        return;
    }

    if(guessno>randomno)
    {
        display.innerText =  "OOPS! SORRY!!! TRY A SMALLER NUMBER.";
    }

    else if(guessno<randomno)
    {
        display.innerText = "OOPS! SORRY!!! TRY A LARGER NUMBER.";
    }
    else{
        display.innerText= "Congratulation!!! you Guessed correct No."
    }

  

}

