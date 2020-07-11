const playBtn = document.querySelector('.play-btn');
const userPoint = document.querySelector('.user-point');
const opponentPoint = document.querySelector('.opponent-point');
const opponentElement = document.querySelector('.opponent-element');
const userRock = document.querySelector('.user-rock');
const userPaper = document.querySelector('.user-paper');
const userScissor = document.querySelector('.user-scissor');
const Items = ['fa-hand-rock','fa-hand-paper','fa-hand-scissors'];
const resetSpan = document.querySelector('.reset-span');
const playSpan = document.querySelector('.play-span');
const scoreCard  = document.querySelector('.score-card');
const result = document.querySelector('.result');
const closeBtn = document.querySelector('.close-btn');
const diff = document.querySelector('.diff');
const cheersSound = document.querySelector('.cheers-sound');
const dissSound = document.querySelector('.dis-sound');
const bgSound = document.querySelector('.bg-sound');
const volume = document.querySelector('.fa-volume-up');
const mute = document.querySelector('.fa-volume-mute');

//------------------------------------------------
var onBtn = false; //sound btn is initially off
var pointOfUser = 0;//actual point
var pointOfOpponent = 0;//actual point
var currentItem = "";
var turn =0;


window.addEventListener('load',function(){
    effects();
    opponentElement.classList.add('fa-angry');
    fadeInFunction();
    resetFunction();
 
    //effects();
})

/*playBtn.addEventListener('click',function(){
    if(resetSpan.classList.contains('reset-span-display')){
        //console.log('btn now in reset mode');
        fadeOutFunction();
    }
    resetFunction();
   if(playSpan.classList.contains('play-span-none')){
   }else{
    fadeInFunction();
   }
    btnChange();
});*/

function fadeInFunction(){
    $(".user-rock").fadeIn(1000);
    $(".user-paper").fadeIn(1000);
    $(".user-scissor").fadeIn(1000);
    $(".opponent-element").fadeIn(1000);
}

function fadeOutFunction(){
    $(".user-rock").fadeOut(100);
    $(".user-paper").fadeOut(100);
    $(".user-scissor").fadeOut(100);
    $(".opponent-element").fadeOut(100);
}
//reset
function resetFunction(){
    turn = 0;
    currentItem ="";
    pointOfUser = 0;
    pointOfOpponent = 0;
    userRock.style.fontSize = '45px';
    userPaper.style.fontSize = '45px';
    userScissor.style.fontSize = '45px';
    updatePoint();
};
//Animation
function effects(){
    userRock.style.display = 'none';
    userPaper.style.display = 'none';
    userScissor.style.display = 'none';
    opponentElement.style.display = 'none';
}

//Updating point
function updatePoint(){

    userPoint.textContent = pointOfUser;
    opponentPoint.textContent = pointOfOpponent;
}

//opposite turn
function opponentTurn(){
    if(turn > 1){
        opponentElement.classList.remove(currentItem);
    }
    var randomNumber;
    randomNumber = Math.floor(Math.random() * Items.length);
    currentItem = Items[randomNumber];
    opponentElement.classList.add(currentItem);
    
    
}
//Rock
userRock.addEventListener('click',function(){
    userRock.style.fontSize = '60px';
    userPaper.style.fontSize = '45px';
    userScissor.style.fontSize = '45px';
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
        //no change
       turn--;
    }else if(opponentElement.classList.contains('fa-hand-paper')){
        pointOfOpponent++;
        cheersSound.pause();
        dissSound.play();
    }else{
        pointOfUser++;
        dissSound.pause();
         cheersSound.play();
    }
    updatePoint();
    turnOver();
});
userPaper.addEventListener('click',function(){
    userRock.style.fontSize = '45px';
    userPaper.style.fontSize = '60px';
    userScissor.style.fontSize = '45px';
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
       pointOfUser++;
       dissSound.pause();
       cheersSound.play();
     }else if(opponentElement.classList.contains('fa-hand-paper')){
         //no Change
         turn--;
     }else{
        pointOfOpponent++;
        cheersSound.pause();
        dissSound.play();
     }
    updatePoint();
    turnOver();
});

userScissor.addEventListener('click',function(){
    userRock.style.fontSize = '45px';
    userPaper.style.fontSize = '45px';
    userScissor.style.fontSize = '6ss0px';
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
        pointOfOpponent++;
        cheersSound.pause();
        dissSound.play();
        
     }else if(opponentElement.classList.contains('fa-hand-paper')){
         pointOfUser++;
         dissSound.pause();
         cheersSound.play();
     }else{
        //no change
        turn--
     }  
     updatePoint();
     turnOver();
});

function turnOver(){
    if(turn == 10 ){
        scorecardDisplay();
        resetFunction();
        fadeOutFunction();
      //  btnChange();
       
    }
}
/*function btnChange(){
        playBtn.classList.toggle('btn-danger');
        resetSpan.classList.toggle('reset-span-display');
        playSpan.classList.toggle('play-span-none');
}*/
function scorecardDisplay(){
    scoreCard.classList.add('score-card-display');
   // console.log(pointOfOpponent);
   // console.log(pointOfUser);
    if(pointOfUser > pointOfOpponent){
        result.textContent = 'You Won by';
        difference = pointOfUser - pointOfOpponent;
        diff.textContent = difference;
        result.style.color = '#28a745';
    }else if(pointOfUser < pointOfOpponent){
        result.textContent = 'You Lost by';
        difference = pointOfOpponent - pointOfUser;
        diff.textContent = difference;
        result.style.color = '#dc3545';
    }else{
        result.textContent = 'Tie';
        diff.textContent = "";
        result.style.color = '#003bff';
    }
}
closeBtn.addEventListener('click',function(){
    scoreCard.classList.remove('score-card-display');
})

volume.addEventListener('click',function(){
    onBtn = true;//sound is on
        setInterval(function(){
            if(onBtn){
                bgSound.play();
            }
        },100);   
});
mute.addEventListener('click',function(){
    onBtn = false;
    bgSound.pause();
});

