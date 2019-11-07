/* On the the complete page the user will be able to:
    - submit their high score
    - save their high score with their name
*/

// Time
//  - create time area
let time_comp_div = document.createElement("div");
time_comp_div.setAttribute("id", "time_area");

//  - Create text content Time: <time_left>
let time_comp_p = document.createElement("p");
let time_comp_sp = document.createElement("span");
let time_comp_left = localStorage.getItem("score");
time_comp_p.textContent = "Time: ";
time_comp_sp.textContent = time_comp_left;

// - Add text content to time_div
time_comp_p.appendChild(time_comp_sp);
time_comp_div.appendChild(time_comp_p);
document.body.appendChild(time_comp_div);

// Great Job Header
// - Create header div
code_quiz_div = document.createElement("div");
code_quiz_div.setAttribute("id", "code_quiz_div");
code_quiz_h1 = document.createElement("h1");
code_quiz_h1.textContent = "Code Quiz";
code_quiz_h1.setAttribute("id", "code_quiz_h1");
code_quiz_div.appendChild(code_quiz_h1);
document.body.appendChild(code_quiz_div);

// Great Job Header
// - Create header div
let great_job_div = document.createElement("div")
great_job_div.setAttribute("id", "great_job_div");

let great_job_h1 = document.createElement("h1");
great_job_h1.textContent = "Great Job!";
great_job_h1.setAttribute("id", "great_job_h1");

great_job_div.appendChild(great_job_h1);
document.body.appendChild(great_job_div);


// Form area
let form_div = document.createElement("div");
let form_form = document.createElement("form");
form_form.setAttribute("id", "high_score_form");

// - Display Score
let score_h2 = document.createElement("h2");
score_h2.textContent = "Your score is: " + time_comp_left;

// - Input Name
let player_name_div = document.createElement("div");
player_name_div.textContent = "Enter Name: ";

let player_name = document.createElement("input");
player_name.setAttribute("type", "text");
player_name.setAttribute("name", "player_name")

// - Submit High Score Button
let high_score_button = document.createElement("button");
high_score_button.textContent = "Submit High Score";


// Append to window
form_form.appendChild(score_h2);
player_name_div.appendChild(player_name);
form_form.appendChild(player_name_div);
form_form.appendChild(high_score_button)
form_div.appendChild(form_form);
document.body.appendChild(form_div);


// Click Event Listener for 'Submit High Score' Button
/* This will:
    - Save the name and score
    - Go to high scores page
*/

high_score_button.addEventListener("click", function(event){
    event.preventDefault();
    debugger;
    let scores = localStorage.getItem("scores");
    if (scores === null){
        scores = [];
    } else {
        scores = JSON.parse(scores);
    };

    let player_name_and_score = [player_name.value.trim(), time_comp_left]
    scores.push(player_name_and_score)
    console.log(scores);
    localStorage.setItem("scores", JSON.stringify(scores));

    window.location.href = "./high_scores.html";

});