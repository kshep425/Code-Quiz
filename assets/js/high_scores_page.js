/* The high scores page will display the high scores for the players with date achieved.
    The table will contain:
    - Name
    - Date
    - Score
    The "Play Again" button will take you back to the quiz with the alert.
    The "Clear High Scores" button will clear the high scores from internal storage
*/

// Declare all let variables
let container_div,
    code_quiz_div, code_quiz_h1,        // code header area
    high_scores_div, high_scores_h1,    // high scores area
    scores_table_div, scores_table,     // high scores table params
    scores_header,
    header_row,
    player_name_head,
    date_head,
    score_head,
    quiz_type_head,
    high_scores, new_scores_table,
    index, index2,                      // for loop indexes
    buttons_div, play_again_button, clear_scores_button // buttons area

// Container Div
container_div = document.createElement("div");
container_div.setAttribute("class", "container text-center my-3")

// Code Quiz H1
code_quiz_div = document.createElement("div");
code_quiz_div.setAttribute("id", "code_quiz_div");
code_quiz_div.setAttribute("class", "my-3")
code_quiz_h1 = document.createElement("h1");
code_quiz_h1.textContent = "Code Quiz";

// High Scores H1
high_scores_div = document.createElement("div");
high_scores_div.setAttribute("class", "my-3")
high_scores_h1 = document.createElement("h1");
high_scores_h1.textContent = "High Scores";

// Table of Scores
scores_table_div = document.createElement("div");
scores_table_div.setAttribute("class", "my-3")

scores_table = document.createElement("table");
scores_table.setAttribute("class", "table table-striped table-bordered table-hover table-sm")

// 4 header columns (Name, Date, Score, Quiz Types)
scores_header = scores_table.createTHead();
header_row = scores_header.insertRow(0);

headers = ["Player Name", "Date", "Score", "Quiz Types"]

headers.forEach(header => {
    head = document.createElement("th");
    head.setAttribute("scope", "col");
    head.textContent = header;
    header_row.append(head);

});

// Add table body
table_body = document.createElement("tbody")

// add classes
scores_header.setAttribute("class", "table-secondary")

// each row from scores in internal storage will display
high_scores = localStorage.getItem("scores");
high_scores = JSON.parse(high_scores);
if( high_scores != null){

    for (index = 0; index < high_scores.length; index++) {
        high_score = high_scores[index];
        let row = table_body.insertRow(index);

        for (index2 = 0; index2 < high_score.length; index2++) {
            let cell = row.insertCell(index2);
            cell.innerHTML = high_score[index2];

        }
    }
}

// Buttons area
buttons_div = document.createElement("div");
buttons_div.setAttribute("class", "my-3 ")
buttons_div.setAttribute("id", "buttons_area");

// Play Again Button
// - Alert with instructions
// - Navigate to quiz.html
play_again_button = document.createElement("button")
play_again_button.setAttribute("id", "play_again");
play_again_button.setAttribute("class", "start_quiz btn btn-secondary m-3");
play_again_button.textContent = "Play Again";


// Clear Scores Button
// - delete scores from internal storage
// - remove rows containing scores from table.
clear_scores_button = document.createElement("button");
clear_scores_button.setAttribute("id", "clear_scores");
clear_scores_button.textContent = "Clear Scores";
clear_scores_button.setAttribute("class", "btn btn-secondary m-3")

// Append Elements to Window
code_quiz_div.appendChild(code_quiz_h1);

high_scores_div.appendChild(high_scores_h1);

scores_table.appendChild(table_body);
scores_table_div.appendChild(scores_table);

buttons_div.appendChild(play_again_button);
buttons_div.appendChild(clear_scores_button);

container_div.appendChild(code_quiz_div);
container_div.appendChild(high_scores_div);
container_div.appendChild(scores_table_div);
container_div.appendChild(buttons_div);

document.body.appendChild(container_div);

// Add functions
clear_scores_button.onclick = function (){
    if (confirm("Are you sure you want to delete all of the high scores?")){
        localStorage.removeItem("scores");
        new_scores_table = document.createElement("table");
        // use replace child to change table to a new empty table
        scores_table_div.replaceChild(new_scores_table, scores_table);
    }
}

play_again_button.onclick = function start_quiz (event){
    alert("Let's start code quiz! \nYou have 60 seconds to complete 5 questions.")
    console.log("Start Quiz Button Clicked")
    event.preventDefault();
    window.location.href = "./quiz.html";
};