'use strict';

$(document).ready(function(){

//program generates a random number between 19 and 120

const randNum = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNum);
    
//console.log(randNum); it works!!!



//each crystal has a hidden value i.e. random number between1 and 12

const pearl = Math.floor(Math.random()*12)+1;
//console.log(pearl);

const emld = Math.floor(Math.random()*12)+1;
//console.log(emld);

const ruby = Math.floor(Math.random()*12)+1;
//console.log(ruby);

const sapphire = Math.floor(Math.random()*12)+1;
//console.log(sapphire);

//player clicks the crystals

//values are totalled in totScore

//script determines if player wins or loses


//outcome recorded in winsLosses
//const wins = win;
//const lose = lose;

//game restars, page does NOT reload



})