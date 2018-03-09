'use strict';

$(document).ready(function(){

//program generates a random number between 19 and 120

const randNum = Math.floor(Math.random() * ((120-19)+1) + 19);
$('#randNum').html(randNum);
    
//console.log(randNum); it works!!!



//each crystal has a hidden value i.e. random number between1 and 12
let savedNum = "";
let pearl = "";
let emld = "";
let ruby = "";
let sapphire = "";

$('#pearl').click(function() {
    pearl = Math.floor(Math.random()*12)+1;
    $('#totScore').text(pearl);
    });

//const pearl = Math.floor(Math.random()*12)+1;

//console.log(pearl);

$('#emld').click(function() {
    emld = Math.floor(Math.random()*12)+1;
    $('#totScore').text(emld);
    });

//console.log(emld);

$('#ruby').click(function() {
    ruby = Math.floor(Math.random()*12)+1;
    $('#totScore').text(ruby);
    });

//console.log(ruby);

$('#sapphire').click(function() {
    sapphire = Math.floor(Math.random()*12)+1;
    $('#totScore').text(sapphire);
    });

//console.log(sapphire);

//player clicks the crystals to add value to totScore







//script determines if player wins or loses


//outcome recorded in winsLosses
//const wins = win;
//const lose = lose;

//game restars, page does NOT reload



})