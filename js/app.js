const playBtn = document.querySelector('.play-btn');
const userPoint = document.querySelector('.user-point');
const opponentPoint = document.querySelector('.opponent-point');
const opponentElement = document.querySelector('.opponent-element');
const userRock = document.querySelector('.user-rock');
const userPaper = document.querySelector('.user-paper');
const userScissor = document.querySelector('.user-scissor');
const Items = ['fa-hand-rock','fa-hand-paper','fa-hand-scissors'];
var pointOfUser = 0;//actual point
var pointOfOpponent = 0;//actual point
var currentItem = "";
var previousItem = "";
var turn =0;


window.addEventListener('load',function(){
    resetFunction();
})

playBtn.addEventListener('click',function(){
    resetFunction();
    
});
//reset
function resetFunction(){
    userPoint.textContent = pointOfUser;
    opponentPoint.textContent = pointOfOpponent;
};
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
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
       //No change
    }else if(opponentElement.classList.contains('fa-hand-paper')){
        pointOfOpponent++;
    }else{
        pointOfUser++;
    }
    updatePoint();
});
userPaper.addEventListener('click',function(){
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
       pointOfUser++;
     }else if(opponentElement.classList.contains('fa-hand-paper')){
         //no Change
     }else{
        pointOfOpponent++;
     }
    updatePoint();
});

userScissor.addEventListener('click',function(){
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
        pointOfOpponent++;
     }else if(opponentElement.classList.contains('fa-hand-paper')){
         pointOfUser++;
     }else{
        //no change
     }
    updatePoint();
});


