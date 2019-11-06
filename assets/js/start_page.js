// Code Quiz Start Page
console.log("Let's Start the Code Quiz")

// add timer starting at 0
let time = document.createElement("span");
time.textContent = 0;
console.log(time)


let time_display = document.createElement("div");
time_display.textContent = "Time: " ;
console.log(time_display)

//add heading
let h1_code_quiz = document.createElement("h1");
h1_code_quiz.textContent = "Code Quiz";
h1_code_quiz.setAttribute("style", "text-align: center");
console.log(h1_code_quiz);


// Create form
let start_form = document.createElement("form");
// add quiz question types
let quiz_types = document.createElement("select")
quiz_types.setAttribute("name", "quiz_types");
quiz_types.setAttribute("multiple", true)
let quiz_type_options = ["html", "css", "javascript", "jquery"]
for (let index = 0; index < quiz_type_options.length; index++) {
    let quiz_type_option = document.createElement("option");
    quiz_type_option.setAttribute("id", index);
    quiz_type_option.setAttribute("value", quiz_type_options[index]);
    quiz_type_option.textContent = quiz_type_options[index];

    console.log(quiz_type_option)
    quiz_types.appendChild(quiz_type_option);

}
console.log(quiz_types);
// add Start Quiz Button
let start_quiz_btn = document.createElement("button");
start_quiz_btn.setAttribute("id", "start_quiz");
start_quiz_btn.textContent = "Start Quiz";
start_quiz_btn.onclick = function(event){
    alert("Let's start code quiz! \nYou have 60 seconds to complete 5 questions.")
    console.log("Start Quiz Button Clicked")
    event.preventDefault();
    window.location.href = "./quiz.html";
}
console.log(start_quiz_btn)

console.log(start_form);

// add view high scores link
let view_high_scores_link = document.createElement("a");
view_high_scores_link.textContent = "View High Scores"
view_high_scores_link.setAttribute("href", "./high_scores.html")
console.log(view_high_scores_link)

//Add elements to page
document.body.appendChild(time_display)
time_display.appendChild(time);
document.body.appendChild(h1_code_quiz);
start_form.appendChild(quiz_types);
// start_quiz_btn.appendChild(start_quiz_btn_link)
start_form.appendChild(start_quiz_btn)
document.body.appendChild(start_form)
document.body.appendChild(view_high_scores_link)
