// Welcome User
alert("Welcome to Quiz Ninja");

//question array
var quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
    ["What is Iron Man's real name?", "Tony Stark"],
    ["What is Wolverine's real name?", "Logan"]
];

//score
var score = 0;

//call function 
play(quiz);

//functions 
function play(quiz){
    for(var i = 0; i < quiz.length; i++){
    question = quiz[i][0];
    answer = ask(question);
    check(answer);
    }
    function ask(question){
        return prompt(question).toUpperCase;
    }
    function check(answer){
        if(answer === quiz[i][1].toUpperCase){
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
