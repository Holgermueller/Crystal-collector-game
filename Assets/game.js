'use strict';

$(document).ready(function(){

//program generates a random number between 19 and 120

let randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNumber);
    
console.log(randNumber); //it works!!!

//each crystal has a hidden value i.e. random number between1 and 12

let pearl = Math.floor(Math.random()*12)+1;

console.log(pearl);

let emld = Math.floor(Math.random()*12)+1;

console.log(emld);

let ruby = Math.floor(Math.random()*12)+1;

console.log(ruby);

let sapphire = Math.floor(Math.random()*12)+1;

console.log(sapphire);

//player clicks the crystals to display value to totScore

let wins = 0; //#wins
let losses = 0;  //#losses

let totScore = 0;
$('#totScore').text(totScore);
console.log(totScore);

function win() {
    wins = wins+1;
    $('#wins').text(wins);
    resetTwo();
    reset();
}

function lose() {
    losses = losses+1;
    $('#losses').text(losses);
    resetTwo();
    reset();
}

$('#pearl').click(function() {
    totScore = totScore + pearl
    $('#totScore').text(totScore);
    //console.log(pearl);
    if ( totScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }  
})

$('#emld').click(function() {
    totScore = totScore + emld;
    $('#totScore').text(totScore);
    //console.log(emld);
    if ( totScore === randNumber ) {
        win();
        reset();
        resetTwo();
    } else if ( totScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }
})

$('#ruby').click(function() {
    totScore = totScore + ruby;
    $('#totScore').text(totScore);
    //console.log(ruby);
    if ( totScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totScore > randNumber ) {
        lose();
        reset();
        resetTwo();
    }
})

$('#sapphire').click(function() {
    totScore = totScore + sapphire;
    $('#totScore').text(totScore);
    //console.log(sapphire);
    if ( totScore === randNumber ) {
        win();
        reset();
        resetTwo();
       } else if ( totScore > randNumber ) {
        lose();
        reset();
        resetTwo();
   }
})

//random numbers (jewels) get added together: look above
//script determines if player wins or loses and outcome recorded in winsLosses

console.log(wins);
console.log(losses);

//game restarst, page does NOT reload

function reset () {
    totScore = 0;
    $('#totScore').text(totScore);
}

function resetTwo () {
    randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
    $('#randNum').html(randNumber);
    pearl = Math.floor(Math.random()*12)+1;
    emld = Math.floor(Math.random()*12)+1;
    ruby = Math.floor(Math.random()*12)+1;
    sapphire = Math.floor(Math.random()*12)+1;
}

});