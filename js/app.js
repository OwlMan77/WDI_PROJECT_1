console.log('linktest');

// Have a timer that counts down from a predetermined time (1min)
// Have a score box with a intial value of 0
// When time runs out, clear the screen and make it go bang!
// When end screen is shown display the score and game over.
// Have the computer make a 4*4 square of 4 buttons( li elements) in a div
// Have the computer make a random sequence of buttons light up for the player to click. Make sure they can't click it while this happens.
// When play clicks a button a specifc sound (for each button) will play.
// Only accept the answer when the sequence length entered = the sequence length shown
// IF player is correct then add +10 seconds to the time and 10 points to the score.
// IF player is wrong then add -10 seconds to time and -10 points from the score.
// IF player is correct then have the computer repeat do the same sequence but with a new random button press.
// IF player is incorrect then have the computer repeat the previous sequence.
// Repeat until the user can no longer remember and runs out of time.



var bomb = bomb || {};
bomb.start;
bomb.makeKP;
bomb.base = 4;
bomb.comSeq = [];
bomb.pSeq = [];
bomb.timer;



bomb.start = function start(){
  bomb.makeKP();
};


// Have the computer make a 4*4 square of 4 buttons( li elements) in a div
bomb.makeKP = function makeKP(){
  console.log('I\'m working');
  var body = $('body');
  var keyDiv = '<div id="keyDiv"></div>';
  var keyGrid = '<ul></ul>';
  body.append(keyDiv);
  keyDiv.append('ul');
  for (var i = 0; i < bomb.base*bomb.base ; i++) {
    var newKey = '<li id ="'+ i +'"></li>';
    keyGrid.append(newKey);
  }
};

document.addEventListener('DOMContentLoaded', bomb.start);
