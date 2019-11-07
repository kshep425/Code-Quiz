/* The high scores page will display the high scores for the players with date achieved.
    The table will contain:
    - Name
    - Date
    - Score
    The "Play Again" button will take you back to the quiz with the alert.
    The "Clear High Scores" button will clear the high scores from internal storage
*/

// Code Quiz H1
let code_quiz_div = document.createElement("div");
code_quiz_div.setAttribute("id", "code_quiz_div");
let code_quiz_h1 = document.createElement("h1");
code_quiz_h1.textContent = "Code Quiz";

code_quiz_div.appendChild(code_quiz_h1);
document.body.appendChild(code_quiz_div);

// High Scores H1
let high_scores_div = document.createElement("div");
let high_scores_h1 = document.createElement("h1");
high_scores_h1.textContent = "High Scores";
high_scores_div.appendChild(high_scores_h1);
document.body.appendChild(high_scores_div);

// Table of Scores
let scores_table_div = document.createElement("div");
let scores_table = document.createElement("table");

scores_table_div.appendChild(scores_table);
document.body.appendChild(scores_table_div);

// 3 columns (Name, Date, Score)
let scores_header = scores_table.createTHead();
let header_row = scores_header.insertRow(0);
let player_name_head = header_row.insertCell(0);
let date_head = header_row.insertCell(1);
let score_head = header_row.insertCell(2);

player_name_head.textContent = "Player Name";
date_head.textContent = "Date";
score_head.textContent = "Score";
// each row from scores in internal storage will display
let high_scores = localStorage.getItem("scores");
high_scores = JSON.parse(high_scores);
if( high_scores != null){

    for (let index = 0; index < high_scores.length; index++) {
        high_score = high_scores[index];
        let row = scores_table.insertRow(index+1);

        for (let index = 0; index < high_score.length; index++) {
            let cell = row.insertCell(index);
            cell.innerHTML = high_score[index];

        }
    }
}
console.log(scores_table);

// buttons area
let buttons_div = document.createElement("div");
buttons_div.setAttribute("id", "buttons_area");
document.body.appendChild(buttons_div);

// Play Again Button
// - Alert with instructions
// - Navigate to quiz.html
let play_again_button = document.createElement("button")
play_again_button.setAttribute("id", "play_again");
play_again_button.setAttribute("class", "start_quiz");
play_again_button.textContent = "Play Again";
play_again_button.onclick = function start_quiz (event){
    alert("Let's start code quiz! \nYou have 60 seconds to complete 5 questions.")
    console.log("Start Quiz Button Clicked")
    event.preventDefault();
    window.location.href = "./quiz.html";
};
buttons_div.appendChild(play_again_button);

// Clear Scores Button
// - delete scores from internal storage
// - remove rows containing scores from table.
let clear_scores_button = document.createElement("button");
clear_scores_button.setAttribute("id", "clear_scores");
clear_scores_button.textContent = "Clear Scores";
buttons_div.appendChild(clear_scores_button);
clear_scores_button.onclick = function (){
    if (confirm("Are you sure you want to delete all of the high scores?")){
        localStorage.removeItem("scores");
        let new_scores_table = document.createElement("table");
        scores_table_div.replaceChild(new_scores_table, scores_table);
    }
}