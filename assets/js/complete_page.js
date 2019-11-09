/* On the the complete page the user will be able to:
    - submit their high score
    - save their high score with their name
*/

// Declare all variables
let container_div,
    time_comp_div, time_comp_p, time_comp_sp, time_comp_left,   // time area
    code_quiz_div, code_quiz_h1,                                // code quiz header area
    great_job_div, great_job_h1,                                // great job header area
    form_div, form_form,                                        // form area
    score_h2,
    player_name_div, player_name,
    high_score_button

// Container div
container_div = document.createElement("div");
container_div.setAttribute("class", "container text-center")
document.body.appendChild(container_div)

// Time
//  - create time area
time_comp_div = document.createElement("div");
time_comp_div.setAttribute("id", "time_area");
time_comp_div.setAttribute("class", "text-right my-3")

//  - Create text content Time: <time_left>
time_comp_p = document.createElement("p");
time_comp_sp = document.createElement("span");
time_comp_left = localStorage.getItem("score");
time_comp_p.textContent = "Time: ";
time_comp_sp.textContent = time_comp_left;

// - Add text content to time_div
time_comp_p.appendChild(time_comp_sp);
time_comp_div.appendChild(time_comp_p);
container_div.appendChild(time_comp_div);

// Great Job Header
// - Create header div
code_quiz_div = document.createElement("div");
code_quiz_div.setAttribute("id", "code_quiz_div");
code_quiz_h1 = document.createElement("h1");
code_quiz_h1.textContent = "Code Quiz";
code_quiz_h1.setAttribute("id", "code_quiz_h1");
code_quiz_div.setAttribute("class", "my-3")
code_quiz_div.appendChild(code_quiz_h1);
container_div.appendChild(code_quiz_div);

// Great Job Header
// - Create header div
great_job_div = document.createElement("div")
great_job_div.setAttribute("id", "great_job_div");

great_job_h1 = document.createElement("h1");
great_job_h1.textContent = "Great Job!";
great_job_h1.setAttribute("id", "great_job_h1");
great_job_h1.setAttribute("class", "my-3")

great_job_div.appendChild(great_job_h1);
container_div.appendChild(great_job_div);


// Form area
form_div = document.createElement("div");
form_form = document.createElement("form");
form_form.setAttribute("class", "my-3")
form_form.setAttribute("id", "high_score_form");

// - Display Score
score_h2 = document.createElement("h2");
score_h2.setAttribute("class", "my-3")
score_h2.textContent = "Your score is: " + time_comp_left;

// - Input Name
player_name_div = document.createElement("div");
player_name_div.setAttribute("class", "input-group my-3");

player_name_div_2 = document.createElement("div");
player_name_div_2.setAttribute("class", "input-group-prepend mx-auto")

player_name_text = document.createElement("span")
player_name_text.setAttribute("class", "input-group-text")
player_name_text.textContent = "Enter Name: ";

player_name = document.createElement("input");
player_name.setAttribute("type", "text");
player_name.setAttribute("name", "player_name");
player_name.setAttribute("class", "form-control ml-3")

// - Submit High Score Button
high_score_button = document.createElement("button");
high_score_button.textContent = "Submit High Score";
high_score_button.setAttribute("class", "btn btn-secondary")


// Append to window
form_form.appendChild(score_h2);
player_name_text.appendChild(player_name)
player_name_div_2.appendChild(player_name_text)
player_name_div.appendChild(player_name_div_2)
form_form.appendChild(player_name_div);
form_form.appendChild(high_score_button)
form_div.appendChild(form_form);
container_div.appendChild(form_div);


// Click Event Listener for 'Submit High Score' Button
/* This will:
    - Save the name and score
    - Go to high scores page
*/

high_score_button.addEventListener("click", function(event){
    event.preventDefault();
    let scores = localStorage.getItem("scores");
    if (scores === null){
        scores = [];
    } else {
        scores = JSON.parse(scores);
    };

    let quiz_types = localStorage.getItem("quiz_types");
    console.log(quiz_types)

    let d = new Date();
    let formatted_date = d.getMonth() + "/" + d.getDate() +"/" + d.getFullYear();

    let player_name_and_score = [player_name.value.trim(), formatted_date, time_comp_left, quiz_types]
    scores.push(player_name_and_score)
    console.log(scores);
    localStorage.setItem("scores", JSON.stringify(scores));

    window.location.href = "./high_scores.html";

});