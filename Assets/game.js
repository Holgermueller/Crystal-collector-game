'use strict';

$(document).ready(function(){

//program generates a random number between 19 and 120

const randNum = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNum);
    
//console.log(randNum); it works!!!



//each crystal has a hidden value i.e. random number between1 and 12
let savedNum = "";


let pearl = Math.floor(Math.random()*12)+1;

//console.log(pearl);

let emld = Math.floor(Math.random()*12)+1;

//console.log(emld);

let ruby = Math.floor(Math.random()*12)+1;

//console.log(ruby);

let sapphire = Math.floor(Math.random()*12)+1;

//console.log(sapphire);

//player clicks the crystals to add value to totScore

$('#pearl').click(function() {
    $('#totScore').text(pearl);
})

$('#emld').click(function() {
    $('#totScore').text(emld);
})

$('#ruby').click(function() {
    $('#totScore').text(ruby);
})

$('#sapphire').click(function() {
    $('#totScore').text(sapphire);
})



//script determines if player wins or loses


//outcome recorded in winsLosses
//const wins = win;
//const lose = lose;

//game restars, page does NOT reload



})