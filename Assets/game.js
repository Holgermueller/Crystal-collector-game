'use strict';

$(document).ready(function(){

//program generates a random number between 19 and 120

const randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNumber);
    
console.log(randNumber); //it works!!!



//each crystal has a hidden value i.e. random number between1 and 12

let pearl = Math.floor(Math.random()*12)+1;

//console.log(pearl);

let emld = Math.floor(Math.random()*12)+1;

//console.log(emld);

let ruby = Math.floor(Math.random()*12)+1;

//console.log(ruby);

let sapphire = Math.floor(Math.random()*12)+1;

//console.log(sapphire);

//player clicks the crystals to display value to totScore

let wins = 0; //#wins
let losses = 0;  //#losses
let totScore = 0;
$('#totScore').text(totScore);

function win() {
    wins = wins+1;
    $('#wins').text(wins);
    reset();
}

function lose() {
    losses = losses+1;
    $('#losses').text(losses);
    lose();
}

$('#pearl').click(function() {
    totScore = totScore + pearl
    $('#totScore').text(totScore);
    //console.log(pearl);
    if ( totScore === randNumber ) {
        win()
       } else if ( totScore > randNumber ) {
        lose()
   }   
})

$('#emld').click(function() {
    totScore = totScore + emld;
    $('#totScore').text(totScore);
    //console.log(emld);
    if ( totScore === randNumber ) {
        win()
       } else if ( totScore > randNumber ) {
        lose()
   }
})

$('#ruby').click(function() {
    totScore = totScore + ruby;
    $('#totScore').text(totScore);
    //console.log(ruby);
    if ( totScore === randNumber ) {
        win()
       } else if ( totScore > randNumber ) {
        lose()
       }
})

$('#sapphire').click(function() {
    totScore = totScore + sapphire;
    $('#totScore').text(totScore);
    //console.log(sapphire);
    if ( totScore === randNumber ) {
        win()
       } else if ( totScore > randNumber ) {
        lose()
   }
})

//random numbers (jewels) get added together: look above

//script determines if player wins or loses and outcome recorded in winsLosses

console.log(wins);
console.log(losses);

//game restarst, page does NOT reload

function reset () {
    const randNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
    $('#randNum').html(randNumber);
    let pearl = Math.floor(Math.random()*12)+1;
    let emld = Math.floor(Math.random()*12)+1;
    let ruby = Math.floor(Math.random()*12)+1;
    let sapphire = Math.floor(Math.random()*12)+1;
    let totScore = 0;
    $('#totScore').text(totScore);
}



});