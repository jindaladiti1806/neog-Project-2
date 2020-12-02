var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("What is your name? ");
console.log(chalk.cyanBright.bold("Hey!! " + username));
console.log("\nWelcome to " + chalk.bgRedBright.underline.bold("Quiz Competition ")+" on " + chalk.bgRedBright.underline.bold("Mythology"));

function play(ques, options, ans)
{
  console.log(chalk.blueBright("\n"+ques));
  for(let i=0; i<options.length;i++)
    console.log(i+1 + ". " + options[i]);
  let guess = readlineSync.question(chalk.rgb(0,191,255)("Choose the correct option : "));

  if(guess === ans )
  {
    score++;
    console.log(chalk.green("Right!"));
  }
  else{
    console.log(chalk.red("Oops! Wrong Answer"));
  }
  console.log("Current score: "+score+"\n-------------");
}

let questions = [{
  ques: "Who is known as the father of Sita?",
  options: ["Manu", "Raja Janak", "Yayati", "Raja Dashratha"],
  ans: "2"
},{
  ques: "Who brought the River goddess Ganga to earth form heaven?",
  options: ["Krishna", "Raja Harishchandra", "Shree Rama", "Bhagiratha"],
  ans: "4"
},{
  ques: "For how many days the battle of kurukshetra was fought?",
  options: ["18", "9", "15", "3"],
  ans: "1"
},{
  ques: "What are the Mahabharata and Ramayana together known as?",
  options: ["Rigveda", "Purana","Veda","Itihasa"],
  ans: "4"
},{
  ques: "Who, according to the Indian Mythology, is the first mortal?",
  options: ["Yayati", "King Dasharath", "Lord Shiva", "King Manu"],
  ans: "4"
},{
  ques: "According to Hindu mythology King Kansa was the uncle of ?",
  options: ["Duryodhana", "Krishna", "Rama", "Arjuna"],
  ans: "2"
},]

let highscorers = [{
  name: "Aditi",
  score:6
},
{
  name: "Ishika",
  score:5
}
]

let i=0, attempted=0, score=0;
do{
  play(questions[i].ques, questions[i].options, questions[i].ans);
  i++;
  attempted++;
  let user = readlineSync.question("Press enter key to continue....to exit press 'y' and enter...");
  if(user=="y")
    break;
}
while(i<questions.length)

console.log(chalk.inverse.bold("Congratulations! You have successfully completed the quiz.\n"))
console.log(chalk.bgRed("Final score: " + score +"/"+attempted));


if(score>=highscorers[0].score){
  console.log(chalk.rgb(255,192,203).bold("Yayy you got a high score"));
  console.log("To get your name added to Top Scorers list, send me a screenshot");
}

console.log(chalk.bold("\nHere are the top scorers so far:"));
for(let i=0; i<highscorers.length; i++)
{
  console.log(">" + highscorers[i].name + ": " + highscorers[i].score);  
}