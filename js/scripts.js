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

//Quiz function
function play(quiz){
    for(var i = 0; question, answer, i < quiz.length; i++){
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    gameover();
    function ask(question){
        return prompt(question);
    }
    function check(answer){
        if(answer === [i][1]){
            alert("Correct");
            score++;
        } else {
            alert("Wrong NO SOUP FOR YOU!!!!!!");
        }
    }
    function gameover(){
        alert("Game Over, you scored " + score + " points!");
    }
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
