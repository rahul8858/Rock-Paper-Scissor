let wins=document.getElementById('wins');
let loses=document.getElementById('loses');
let loss=0,win=0;
let userChoiceDisplay=document.getElementById('user-choice');
let computerChoiceDisplay=document.getElementById('computer-choice');
let userChoice;
let computerChoice;

let computerChoiceGenerator = () =>{
    let option=Math.floor(Math.random()*3);
    if(option===1) computerChoice='rock.jpg';
    else if(option===2) computerChoice='paper.jpg';
    else computerChoice='scissor.jpg';
}

let whoWins = () =>{
    if(userChoice===computerChoice){
        win++;loss++;
    }
    if(userChoice==='images/paper.jpg'){
        if(computerChoice==='images/rock.jpg') win++;
        else if(computerChoice==='images/scissor.jpg') loss++;
    }
    else if(userChoice==='images/rock.jpg'){
        if(computerChoice==='images/scissor.jpg') win++;
        else if(computerChoice==='images/paper.jpg') loss++;
    }
    else{
        if(computerChoice==='images/rock.jpg') loss++;
        else if(computerChoice==='images/paper.jpg') win++;
    }
}

let buttons=document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click',(e)=>{
    userChoice=`${e.target.id}.jpg`;
    userChoiceDisplay.innerHTML=`<img src=${userChoice}>`;
    computerChoiceGenerator();
    computerChoiceDisplay.innerHTML=`<img src=${computerChoice}>`;
    whoWins();
    wins.innerHTML=win;
    loses.innerHTML=loss;
}));