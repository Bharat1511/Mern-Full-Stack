function start()
{
    console.log("Game Started");

    document.getElementById("RollPlay1").disabled = false;
    document.getElementById("Restart").disabled = false;
    document.getElementById("start").disabled = true;
   
   
   
    
}

function restart()
{
   window.location.reload();
    
}

function p1Play()
{
    console.log("P1Playing");
    let score = Number(document.getElementById("p1sc").innerText);

    const DiceFace = Math.floor(Math.random()*6) + 1;

    switch(DiceFace){
        case 1: {
            document.getElementById("p1dice").src = "./images/1dice.png";
            break;
        }
        case 2: {
            document.getElementById("p1dice").src = "./images/2dice.png";
            break;
        }
        case 3: {
            document.getElementById("p1dice").src = "./images/3dice.png";
            break;
        }
        case 4: {
            document.getElementById("p1dice").src = "./images/4dice.png";
            break;
        }
        case 5: {
            document.getElementById("p1dice").src = "./images/5dice.png";
            break;
        }
        case 6: {
            document.getElementById("p1dice").src = "./images/6dice.png";
            break;
        }
        default: {
            document.getElementById("p1dice").src = "./images/6dice.png";
    }
    }

    if(DiceFace===6)
    {
        document.getElementById("RollPlay1").disabled = true;
        document.getElementById("RollPlay2").disabled = false;

    }
    else{

         score = score + DiceFace

        document.getElementById("p1sc").innerText = score;

    }


}

function p2Play()
{
    console.log("P2Playing");
   
    let score = Number(document.getElementById("p2sc").innerText);

    const DiceFace = Math.floor(Math.random()*6) + 1;

    //   shortCut ot SwitchCase

  document.getElementById("p2dice").src = `./images/${DiceFace}dice.png`

    if(DiceFace===6)
    {
        document.getElementById("RollPlay1").disabled = false;
        document.getElementById("RollPlay2").disabled = true;

    }
    else{

         score = score + DiceFace

        document.getElementById("p2sc").innerText = score;

    }
    
}