const rs = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.magenta("\nWelcome to The Game!!!"));
var playerName = rs.question(chalk.yellow("What is Your Name :- "));
console.log(chalk.yellow("Hello ",`${playerName} , Welcome to The Game \n`));
console.log(chalk.magenta("Let's see how well do you know the web series 'Suits' \n"));

var score = 0;

var first = {
    question:"Who is Harvey's in the know assistant ?",
    A:"Rachel Zane",
    B:"Jessica Pearson",
    C:"Donna Paulsen",
    D:"Dana Scott",
    answer:"C",
    description:"Donna is extremely perceptive, with the inside scoop of all the comings and goings at the firm and a razor sharp wit, she is admired and feared by both associates and partners alike."
};
var second = {
    question:"Harvey's unusual middle name is __________ .",
    A:"Reginald",
    B:"Eugene",
    C:"Martha",
    D:"Sidwell",
    answer:"A",
    description:"Harvey doesn't like to use his middle name."
};
var third = {
    question:"Mike Ross is not an actual ____________ .",
    A:"Detective",
    B:"Lawyer",
    C:"Financial Consultant",
    D:"Doctor",
    answer:"B",
    description:"Mike dropped out of college and never passed the bar in his own name."
};
var fourth = {
    question:"Harvey Specter is a brilliant _______ lawyer. ",
    A:"Criminal",
    B:"Consumer",
    C:"Corporate litigation",
    D:"Trial",
    answer:"C",
    description:"A lawyer starting out in corporate litigation can make an average of $160,000/year."
};
var fifth = {
    question:"Suits series 1st aired in ______ .",
    A:"2011",
    B:"2012",
    C:"2013",
    D:"2014",
    answer:"A",
    description:"'Suits' premiered on June 23, 2011."
};
var sixth = {
    question:"What network airs 'Suits'?",
    A:"CBS",
    B:"NBC",
    C:"USA",
    D:"TNT",
    answer:"C",
    description:"The USA Network was originally launched as UA-Columbia/MSG in 1977. It relaunched as USA Network on April 9, 1980."
};
var seventh = {
    question:"________ is the firm's expert on all financial matters.",
    A:"Charles Forstman",
    B:"Robert Zane",
    C:"Jeff Malone",
    D:"Louis Litt",
    answer:"D",
    description:"Louis is overly pedantic, jealous to the point of paranoia, highly suspicious, snobbish, and cruel. However, he is very loyal to those he loves."
};
var eighth = {
    question:"The firm hires law graduates from ________ .",
    A:"Harvard",
    B:"Columbia",
    C:"Yale",
    D:"Stanford",
    answer:"A",
    description:"Founded in 1817, Harvard Law School is one of the preeminent centers of legal education in the world."
};
var ninth = {
    question:"Who lands an interview with harvey Specter after he runs from a drug deal gone bad?",
    A:"Jack Soloff",
    B:"Sean Cahill",
    C:"Mike Ross",
    D:"Jeff Malone",
    answer:"C",
    description:"Mike is a brilliant college drop-out who growing up, lived with his grandmother after his parents died in a car crash."
};
var tenth = {
    question:"Who is the female shark in charge of 'Suits' law firm?",
    A:"Rachel Zane",
    B:"Jessica Pearson",
    C:"Donna Paulsen",
    D:"Dana Scott",
    answer:"B",
    description:"Before she became named partner at Pearson Hardman, she was an associate at Gordon Schmidt Van Dyke."
};

function gamePlay(que , A , B , C , D, ans,des){
    console.log(chalk.cyanBright(que));
    console.log("A :"+A);
    console.log("B :"+B);
    console.log("C :"+C);
    console.log("D :"+D);
    var answer  = rs.question(chalk.magenta("Answer: "));
    if(answer.toUpperCase() == ans){
        console.log(chalk.green("Correct Answer!!")); 
        console.log(chalk.blue("\n Details : "));
        console.log(des);    
        score = score + 5;
    }
    else{
        console.log(chalk.red("Wrong Answer!!"));    
        if(ans === "A"){
            ans=A;
        }
        else if(ans === "B"){
            ans=B;
        }
        else if(ans === "C"){
            ans=C;
        }
        else if(ans === "D"){
            ans=D;
        }
        console.log(chalk.greenBright("Correct Answer is: "+ans));
        console.log(chalk.blue("\n Details : "));
        console.log(des); 
        score = score - 2;
    }
        console.log(chalk.yellowBright('Your score is  :' + score + "\n"));       
} 

qusArray = [first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth];
for(let i =0 ;i<qusArray.length ;i++){
    gamePlay(qusArray[i].question,qusArray[i].A,qusArray[i].B,qusArray[i].C,qusArray[i].D,qusArray[i].answer,qusArray[i].description);
}
console.log(chalk.green('\n Your Final score is  : ' + score));