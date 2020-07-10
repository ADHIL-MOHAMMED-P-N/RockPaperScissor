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
var turn =0;


window.addEventListener('load',function(){
    resetFunction();
    effects();
})

playBtn.addEventListener('click',function(){
    resetFunction();
    $(".user-rock").fadeIn(1000);
    $(".user-paper").fadeIn(1000);
    $(".user-scissor").fadeIn(1000);
    $(".opponent-element").fadeIn(1000);
});
//reset
function resetFunction(){
    userPoint.textContent = pointOfUser;
    opponentPoint.textContent = pointOfOpponent;
    turn = 0;
    currentItem ="";
    pointOfUser = 0;
    pointOfOpponent = 0;
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
    turn++;
    opponentTurn();
    if(opponentElement.classList.contains('fa-hand-rock')){
        //no change
       turn--;
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
         turn--;
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
        turn--
     }
    updatePoint();
});

if(turn==9){
    resetFunction();
}

