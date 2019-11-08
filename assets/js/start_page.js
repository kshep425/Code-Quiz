// Code Quiz Start Page
console.log("Let's Start the Code Quiz")

/*
On the start page, the player can:
 -  select the type of quiz questions to include in the code quiz.
 -  start the quiz.
 -  or view the high scores
*/

let container_div,                          // container_div
    time_div, time_display, time,           // time section
    code_quiz_div, code_quiz_h1,            //code quiz header section
    start_form_div, start_form,             // start quiz form section
    quiz_type_div, quiz_type_options,       // quiz type options section
    start_button_div, start_quiz_btn,       // start quiz button section
    high_scores_div, view_high_scores_link, //high scores link section
    index,                                  // for loop index
    selected_quiz_options;

// create page areas for time, code quiz header, start quiz form, and high scores.
container_div = document.createElement("div")
time_div = document.createElement("div");
code_quiz_div = document.createElement("div");
start_form_div = document.createElement("div");
quiz_type_div = document.createElement("div");
start_button_div = document.createElement("div");
high_scores_div = document.createElement("div");

// Add Classes
container_div.setAttribute("class", "container text-center")
time_div.setAttribute("class", "text-right")

// divs
time_div.setAttribute("id", "time-area");
code_quiz_div.setAttribute("id", "code_quiz_heading_area");
start_form_div.setAttribute("id", "form_area");
quiz_type_div.setAttribute("id", "quiz_type_area");
start_button_div.setAttribute("id", "start_button_area");

// add timer starting at 0
time = document.createElement("span");
time.textContent = 0;

time_display = document.createElement("p");
time_display.textContent = "Time: " ;
//time_display.setAttribute("class", "float-right")

//add heading
h1_code_quiz = document.createElement("h1");
h1_code_quiz.textContent = "Code Quiz";
h1_code_quiz.setAttribute("style", "text-align: center");

// Create form
start_form = document.createElement("form");
h4_instructions = document.createElement("h4");
h4_instructions.textContent = "Select Quiz Question Types, then Start Quiz."
// add quiz question types
quiz_type_options = ["html", "css", "javascript", "jquery"]

for (index = 0; index < quiz_type_options.length; index++) {
    let quiz_types = document.createElement("p");
    quiz_types.setAttribute("class", "btn btn-primary d-inline-block m-3");
    quiz_types.textContent = quiz_type_options[index] + "  ";

    let quiz_type_option = document.createElement("input");
    quiz_type_option.setAttribute("type", "checkbox")
    quiz_type_option.setAttribute("id", quiz_type_options[index]);
    quiz_type_option.setAttribute("value", quiz_type_options[index]);


    quiz_types.appendChild(quiz_type_option)
    quiz_type_div.appendChild(quiz_types)

    quiz_type_option.textContent = quiz_type_options[index];

}

// check if quiz_type_option isChecked? Add to selected_quiz_options object

function isChecked(){

    let all_quiz_types = ["html", "css", "javascript", "jquery"];
    let quiz_types = [];
    // add checked types to quiz_types array
    for (let i = 0; i < all_quiz_types.length; i++) {
        const opt = all_quiz_types[i];
        if (document.getElementById(opt).checked){
            quiz_types.push(opt);
        };
    };

    // if no quiz types are selected, default to all true
    if (quiz_types === []){
        quiz_types = all_quiz_types;
    }

    // Store selected quiz types in local storage
    localStorage.setItem("quiz_types", JSON.stringify(quiz_types));

};

// add Start Quiz Button
start_quiz_btn = document.createElement("button");
start_quiz_btn.setAttribute("id", "start_quiz");
start_quiz_btn.setAttribute("class", "start_quiz btn btn-primary clear-fix");
start_quiz_btn.setAttribute("type", "Submit")
start_quiz_btn.textContent = "Start Quiz";

start_quiz_btn.onclick = function start_quiz (event){
    alert("Let's start code quiz! \nYou have 60 seconds to complete 5 questions.")

    console.log("Start Quiz Button Clicked")

    isChecked();

    event.preventDefault();
    window.location.href = "./quiz.html";
}

// add view high scores link
view_high_scores_link = document.createElement("a");
view_high_scores_link.textContent = "View High Scores"
view_high_scores_link.setAttribute("href", "./high_scores.html")

//Add elements to page

// - append timer elements
time_display.appendChild(time);
time_div.appendChild(time_display);
container_div.appendChild(time_div);

// - append heading
code_quiz_div.appendChild(h1_code_quiz);
container_div.appendChild(code_quiz_div);

// - append form elements: quiz types and start button
start_form.appendChild(h4_instructions);
start_form.appendChild(quiz_type_div);
start_form.appendChild(start_button_div);
start_button_div.appendChild(start_quiz_btn);
start_form_div.appendChild(start_form);
container_div.appendChild(start_form_div);

// - append high scores link
high_scores_div.appendChild(view_high_scores_link);
container_div.appendChild(high_scores_div);
document.body.appendChild(container_div)