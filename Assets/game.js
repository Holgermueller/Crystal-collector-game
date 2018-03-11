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

let totScore = 0;
$('#totScore').text(totScore);

$('#pearl').click(function() {
    totScore = totScore + pearl
    $('#totScore').text(totScore);
    //console.log(pearl);
})

$('#emld').click(function() {
    totScore = totScore + emld;
    $('#totScore').text(totScore);
    //console.log(emld);
})

$('#ruby').click(function() {
    totScore = totScore + ruby;
    $('#totScore').text(totScore);
    //console.log(ruby);
})

$('#sapphire').click(function() {
    totScore = totScore + sapphire;
    $('#totScore').text(totScore);
    //console.log(sapphire);
})

//random numbers (jewels) get added together: look above

//script determines if player wins or loses and outcome recorded in winsLosses

let wins = 0; //#wins
let losses = 0;  //#losses

function winLose() {
    if ( totScore = randNumber ) {
     wins = wins++;
     console.log(wins);
     $('#wins').text(wins);
} else if ( totScore > randNumber ) {
     losses = losses++;
     console.log(losses);
     $('#losses').text(losses);
}

}





//game restars, page does NOT reload



});