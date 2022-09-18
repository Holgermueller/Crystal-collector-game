"use strict";

$(document).ready(() => {
  //program generates a random number between 19 and 120
  let randNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  $("#randNum").html(randNumber);

  //each crystal has a hidden value i.e. random number between1 and 12
  let amethyst = Math.floor(Math.random() * 12) + 1;
  let emld = Math.floor(Math.random() * 12) + 1;
  let ruby = Math.floor(Math.random() * 12) + 1;
  let sapphire = Math.floor(Math.random() * 12) + 1;

  //player clicks the crystals to display value to totScore
  let wins = 0; //#wins
  let losses = 0; //#losses

  let totScore = 0;
  $("#totScore").text(totScore);

  function win() {
    wins = wins + 1;
    $("#wins").text(wins);
    resetTwo();
    reset();
  }

  function lose() {
    losses = losses + 1;
    $("#losses").text(losses);
    resetTwo();
    reset();
  }

  $("#amethyst").click(() => {
    totScore = totScore + amethyst;
    $("#totScore").text(totScore);
    if (totScore === randNumber) {
      win();
      reset();
      resetTwo();
    } else if (totScore > randNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  $("#emld").click(() => {
    totScore = totScore + emld;
    $("#totScore").text(totScore);
    if (totScore === randNumber) {
      win();
      reset();
      resetTwo();
    } else if (totScore > randNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  $("#ruby").click(() => {
    totScore = totScore + ruby;
    $("#totScore").text(totScore);
    if (totScore === randNumber) {
      win();
      reset();
      resetTwo();
    } else if (totScore > randNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  $("#sapphire").click(() => {
    totScore = totScore + sapphire;
    $("#totScore").text(totScore);
    if (totScore === randNumber) {
      win();
      reset();
      resetTwo();
    } else if (totScore > randNumber) {
      lose();
      reset();
      resetTwo();
    }
  });

  //random numbers (jewels) get added together: look above
  //script determines if player wins or loses and outcome recorded in winsLosses
  //game restarst, page does NOT reload
  function reset() {
    totScore = 0;
    $("#totScore").text(totScore);
  }

  function resetTwo() {
    randNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#randNum").html(randNumber);
    amethyst = Math.floor(Math.random() * 12) + 1;
    emld = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
  }
});
