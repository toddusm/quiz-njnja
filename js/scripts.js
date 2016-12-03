// Welcome User
alert("Welcome to Quiz Ninja");

//question object
var quiz = {
    name: "Super Hero Name Quiz",
    description: "How many super heros can you name?",
    question: "What is the real name of ",
    questions: [
        {codeName: "Cyclops", realName: "Scott Summers"},
        {codeName: "Marvel Girl", realName: "Jean Grey"},
        {codeName: "Beast", realName: "Hank McCoy"},
        {codeName: "Iceman", realName: "Bobby Drake"},
        {codeName: "Angel", realName: "Warren Worthington III"}
    ]
}

//score
var score = 0;

//call function 
play(quiz);

//functions 
function play(quiz){
    for(var i = 0; i < quiz.questions.length; i++){
    question = quiz.questions[i].codeName;
    console.log(question);
    answer = ask(question);
    console.log(answer)
    check(answer);
    }
    function ask(question){
        return prompt(quiz.question + question).toUpperCase();
    }
    function check(answer){
        if(answer === quiz.questions[i].realName.toUpperCase()){
            console.log(ask);
            alert("Correct");
            score++;
        } else {
            alert("Wrong!!!! Your Nerd Card is revoked!");
        }
    }
    function gameOver(){
        alert("Game Over, you scored " + score + " points!");
    }
    gameOver();
}



























// for (var i=0; i < quiz.length; i++){
//     //get answer
//     var answer = prompt(quiz[i][0]).toLowerCase();
//     //check answer
//     if(answer === quiz[i][1].toLowerCase()){
//         alert("Correct")
//         console.log(quiz[i][1]);
//         score++;
//     } else {
//         alert("Wrong!!!! Your Nerd Card is revoked!");
//     }
// }
// alert("Game Over, you scored " + score + " points!");
