'use strict';
let generateRandomNum = 0;
let randomNumGenerate = function () {
  generateRandomNum = Math.trunc(Math.random() * 20) + 1;
};
randomNumGenerate();
let score = 20;
let highScore;
localStorage.setItem(`highScore`, score);

$('.again').on('click', function () {
  $('.message').empty().append('Start guessing...');
  $('.label-score')
    .empty()
    .append(`💯 Score: <span class="score">20</span></p>`);
  $('.number').replaceWith(`<div class="number">?</div>`);
  $('body').css('background-color', '#222');
  $('.guess').val('');
  highScore = localStorage.getItem(`highScore`);
  score = 20;
  randomNumGenerate();
  $('.check').show();
});
const btnCheck = $('.check').on('click', function () {
  const numberByUser = $('.guess').val();
  if (generateRandomNum == numberByUser) {
    $('.number').replaceWith(`<div class="number">${generateRandomNum}</div>`);
    $('body').css('background-color', '#60b347');
    $('.label-highscore').replaceWith(`<p class="label-highscore">
    🥇 Highscore: <span class="highscore">${score}</span>
  </p>`);
    score = 20;
    $('.check').hide();
  } else {
    $('body').css('background-color', 'red');
    score--;
    $('.label-score').replaceWith(
      `<p class="label-score">💯 Score: <span class="score">$${score}</span></p>`
    );
  }
  if (generateRandomNum > numberByUser) {
    $('.message').replaceWith(`<p class="message">Too low!</p>`);
  } else if (generateRandomNum < numberByUser) {
    $('.message').replaceWith(`<p class="message">Too high!</p>`);
  } else {
    $('.message').replaceWith(`<p class="message">Correct Answer!</p>`);
  }
});
