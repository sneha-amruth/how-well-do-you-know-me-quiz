var readlinesync = require('readline-sync');
const chalk = require('chalk');

var userName = readlinesync.question(chalk.white.bgBlue.bold("Welcome, Please enter your name "));

console.log(chalk.white.bgBlue.bold("\n"+userName+", let's see how well you know Sneha\n"));


var listOfQuestions = [{
  question: "Where do i live?",
  correctAnswer: 'hyderabad'
},
{
  question: "Do I like mountains or beaches?",
  correctAnswer: 'mountains'
},
{
  question: "My fav dish?",
  correctAnswer: 'pasta'
},
{
  question: "Am I an early riser or a night owl?",
  correctAnswer: 'night owl'
},
{
  question: "Do I like Chai or Coffee?",
  correctAnswer: 'chai'
},
]
var currentScore = 0;

var highscores = [
  {
    name: "Sukruthi",
    score: 1
  },
  {
    name: "Kyathi",
    score: 3
  },
]



listOfQuestions.forEach(function(eachQues){
  var usersAns = readlinesync.question(eachQues.question+" ");
  if(usersAns.toLowerCase() == eachQues.correctAnswer){
     currentScore++;
     console.log("\nYou're right!\nCurrent Score: "+currentScore);
  }
  else{
    currentScore--;
    console.log("\nYou're wrong!\nCurrent Score: "+currentScore);
  }
  console.log("-------------------------------");
})

var currHighScore = 0;
highscores.forEach(function(highscore){
  if(currentScore >= highscore.score) {
     currHighScore = currentScore;
  }
})
if(currHighScore != 0){
  console.log("\nYour final score: "+currentScore+"\n");
   highscores.push({name: userName.toString(), score: currentScore.toString()});
}
sortScores();
function sortScores() {
  highscores.sort(function(a, b){return b.score - a.score});
}
  console.log("Leader Board:\n");
  highscores.forEach(function(highscore){
    console.log(highscore.name+" with score "+highscore.score+"\n");
  })




