let time_div, time_display, time;
let code_quiz_div, code_quiz_h1;
let start_form_div, start_form;
let quiz_type_div, quiz_types, quiz_type_options, quiz_type_option;
let start_button_div, start_quiz_btn;
let high_scores_div, view_high_scores_link;

// Code Quiz Start Page
console.log("Let's Start the Code Quiz")

// create page areas for time, code quiz header, start quiz form, and high scores.
time_div = document.createElement("div");
code_quiz_div = document.createElement("div");
start_form_div = document.createElement("div");
quiz_type_div = document.createElement("div");
start_button_div = document.createElement("div");
high_scores_div = document.createElement("div");

time_div.setAttribute("id", "time-area");
code_quiz_div.setAttribute("id", "code_quiz_heading_area");
start_form_div.setAttribute("id", "form_area");
quiz_type_div.setAttribute("id", "quiz_type_area");
start_button_div.setAttribute("id", "start_button_area");

// add timer starting at 0
time = document.createElement("span");
time.textContent = 0;
console.log(time)


time_display = document.createElement("p");
time_display.textContent = "Time: " ;
console.log(time_display)

//add heading
h1_code_quiz = document.createElement("h1");
h1_code_quiz.textContent = "Code Quiz";
h1_code_quiz.setAttribute("style", "text-align: center");
console.log(h1_code_quiz);


// Create form
start_form = document.createElement("form");
// add quiz question types
quiz_types = document.createElement("select")
quiz_types.setAttribute("name", "quiz_types");
quiz_types.setAttribute("multiple", true)
quiz_type_options = ["html", "css", "javascript", "jquery"]
for (let index = 0; index < quiz_type_options.length; index++) {
    let quiz_type_option = document.createElement("option");
    quiz_type_option.setAttribute("id", index);
    quiz_type_option.setAttribute("value", quiz_type_options[index]);
    quiz_types.appendChild(quiz_type_option);
    if(index == 0){
        quiz_type_option.setAttribute("selected", true);
    }
    quiz_type_option.textContent = quiz_type_options[index];

    console.log(quiz_type_option)
}


console.log(quiz_types);
// add Start Quiz Button
start_quiz_btn = document.createElement("button");
start_quiz_btn.setAttribute("id", "start_quiz");
start_quiz_btn.setAttribute("class", "start_quiz");
start_quiz_btn.textContent = "Start Quiz";
start_quiz_btn.onclick = function start_quiz (event){
    alert("Let's start code quiz! \nYou have 60 seconds to complete 5 questions.")
    console.log("Start Quiz Button Clicked")
    event.preventDefault();
    window.location.href = "./quiz.html";
}
console.log(start_quiz_btn)

console.log(start_form);

// add view high scores link
view_high_scores_link = document.createElement("a");
view_high_scores_link.textContent = "View High Scores"
view_high_scores_link.setAttribute("href", "./high_scores.html")
console.log(view_high_scores_link)

//Add elements to page

// - append timer elements
time_display.appendChild(time);
time_div.appendChild(time_display);
document.body.appendChild(time_div);

// - append heading
code_quiz_div.appendChild(h1_code_quiz);
document.body.appendChild(code_quiz_div);

// - append form elements: quiz types and start button
quiz_type_div.appendChild(quiz_types)
start_form.appendChild(quiz_type_div);
start_button_div.appendChild(start_quiz_btn);
start_form.appendChild(start_button_div);
start_form_div.appendChild(start_form);
document.body.appendChild(start_form_div);

// - append high scores link
high_scores_div.appendChild(view_high_scores_link);
document.body.appendChild(high_scores_div);
