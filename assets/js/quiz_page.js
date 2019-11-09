// Code Quiz - Quiz Page
/* This page will display the time left, questions, answers and results.  Once an answer is selected, it will:
    * Display the Result and after a second
    * Switch to the next question and answers
    * Repeat

    The complete.html page will display when:
    * The timer reaches zero, or
    * 5 questions are answered
*/

console.log("Let's start the Quiz!")

// Declare Variables
let container_div,
    time_div,
    type_div,
    question_div,
    answer_div,
    result_div,
    time, time_left, time_display, error_time,
    type_p, type_sp,
    question_h2,
    answers_ul,
    horizontal_line,
    correct_result_msg, wrong_result_msg, result_h3,
    quiz_questions, selected_quiz_questions, all_quiz_options, quiz_options,
    current_question,
    i, j // for loop indexes

// Container Div
container_div = document.createElement("div");
container_div.setAttribute("class", "container")

// Set time left, code_quiz_header, type, question, answer, and result areas
time_div = document.createElement("div");
time_div.setAttribute("id", "time_area");
time_div.setAttribute("class", "text-right my-1")

code_quiz_div = document.createElement("div");
code_quiz_div.setAttribute("id", "code_quiz_heading_area");
code_quiz_div.setAttribute("class", "my-1")

type_div = document.createElement('div');
type_div.setAttribute("id", "type_area");
type_div.setAttribute("class", "my-1")

question_div = document.createElement("div");
question_div.setAttribute("id", "question_area");
question_div.setAttribute("class", "my-1")

answer_div = document.createElement("div");
answer_div.setAttribute("id", "answer_area");
answer_div.setAttribute("class", "mt-1 mb-0")

result_div = document.createElement("div");
result_div.setAttribute("id", "result_area");


// Add Timer starting countdown of 60 seconds
time = document.createElement("span")
time_left = 60;

// Add Error Time
time.textContent = time_left;
error_time = 0;

time_display = document.createElement("p");
time_display.textContent = "Time: ";
time_display.setAttribute("class", "font-weight-bold");

// Create Code Quiz Header elements
h1_code_quiz = document.createElement("h1");
h1_code_quiz.textContent = "Code Quiz";
h1_code_quiz.setAttribute("style", "text-align: center");

// Create type elements
type_sp = document.createElement("span");
type_p = document.createElement("p");
type_p.textContent = "Type: ";
type_p.setAttribute("class", "font-weight-bold");

// Create question elements
question_h2 = document.createElement("h2");
question_h2.setAttribute("class", "list-group-item list-group-item-secondary")

// Create answer elements
answers_ul = document.createElement("ul");
answers_ul.setAttribute("id", "answer_list");
console.log("set ul class");
answers_ul.setAttribute("class", "m-3 p-0");
console.log(answers_ul)

// Area for Results

//  - Create Horizontal Line element
horizontal_line = document.createElement("hr")
horizontal_line.setAttribute("hidden", true)

//  - Create Result Message elements
correct_result_msg = "Correct";
wrong_result_msg = "Wrong";

result_h3 = document.createElement("h3")


// Append Elements to page
//   - Append time, question, answer, and result divs
document.body.appendChild(container_div)
container_div.appendChild(time_div);
container_div.appendChild(code_quiz_div);
container_div.appendChild(type_div);
container_div.appendChild(question_div);
container_div.appendChild(answer_div);
container_div.appendChild(result_div);

//   - Append time elements
time_display.appendChild(time)
time_div.appendChild(time_display);

// - append heading
code_quiz_div.appendChild(h1_code_quiz);

//  - Append type elements
type_p.appendChild(type_sp)
type_div.appendChild(type_p)

//  - Append question elements
question_div.appendChild(question_h2);

//  - Append answers elements
answer_div.appendChild(answers_ul);

//  - Append results elements
result_div.appendChild(horizontal_line);
result_div.appendChild(result_h3);


// Get Questions out of Local Storage based on type
quiz_questions = localStorage.getItem("questions");
selected_quiz_questions = []
quiz_questions = JSON.parse(quiz_questions);

// Get quiz questions that match selected_quiz_options
all_quiz_options = ["html", "css", "javascript", "jquery"]
localStorage.setItem("all_quiz_options", JSON.stringify(all_quiz_options));

quiz_options = localStorage.getItem("quiz_types");
quiz_options = JSON.parse(quiz_options)

console.log("filter questions to types: " + quiz_options)
for (i = 0; i < quiz_questions.length; i++) {
    for (j = 0; j < quiz_options.length; j++) {
        if (quiz_questions[i]["type"] === quiz_options[j]){
            selected_quiz_questions.push(quiz_questions[i])
        }
    }
}
quiz_questions = selected_quiz_questions


// Set Question Count
question_count = 1

// Set current Question after filter
current_question = quiz_questions[question_count - 1];

// Add Event Listeners

// - Listen for click on answer div and validate answer
answer_div.addEventListener("click", function(event){

    let element = event.target;

    let result = check_answer(element.getAttribute("selected_answer"));
    //display horizontal line
    horizontal_line.removeAttribute("hidden")
    if (result){
        result_h3.textContent = correct_result_msg;
    } else {
        result_h3.textContent = wrong_result_msg;
        error_time = error_time + 5;
    }

    // Switch to next question 1/2 a second after result is displayed!
    timeout = setTimeout(next_question, 500);

});


// Add functions

// - Check if answer is correct or wrong and display result
function check_answer(selected_answer){

    let correct = current_question["answer"] === selected_answer
    return correct;
}

// - After answer is selected, go to next question.
//   If the question count is 6 or more,
//   then stop quiz, store score, and go to complete.html.
function next_question(){
    console.log("question count: " + question_count);
    question_count += 1;

    if (question_count >= 6){
        //  When 5 questions are answered
        localStorage.setItem("score", time_left - error_time);
        // localStorage.setItem("quiz_types", JSON.stringify(quiz_options));
        alert("You Finished!\n You scored " + time_left + " with error seconds " + error_time + "!");
        // Switch to complete.html:
        window.location.href = "./complete.html"
    }

    // Set current_question
    current_question = quiz_questions[question_count];

    // clear result display
    result_h3.textContent = "";
    horizontal_line.setAttribute('hidden', true);
    display_type_questions_and_answers(current_question);
}

// Navigate to next page when timer reaches 0
function timer(){
    let timer_interval = setInterval(function(){
        time_left--;
        time.textContent = time_left

        if(time_left <= -1 ){
            clearInterval(timer_interval);
            console.log("Times Up!")
            time_left = 0;
            localStorage.setItem("score", time_left);
            time.textContent = time_left;

            console.log(time)
            console.log(time_left)
            alert("Times Up!\n You scored 0!");
            window.location.href = "./complete.html"
        }

    }, 1000)
}

// Display question and answers
function display_type_questions_and_answers(question){
    // add code to replace old answers_ul with new_answers_ul
    new_answers_ul = document.createElement("ul");
    ans_li = document.getElementById("answer_list")
    answer_div.replaceChild(new_answers_ul, ans_li);
    answers_ul = new_answers_ul;
    answers_ul.setAttribute("id", "answer_list");

    // Get the question, type, question, and choices
    let type = question["type"];
    let quiz_question = question["title"];
    let choices = question["choices"];

    // Type
    type_sp.textContent = type;

    // Add Question
    question_h2.textContent = quiz_question;

    // Add Choices
    let index;
    for (index = 0; index < choices.length; index++) {
        // Create answer and button elements
        let choice = document.createElement("li");
        choice.textContent = choices[index];
        choice.setAttribute("id", choices[index]);
        choice.setAttribute("selected_answer", choices[index]);
        choice.setAttribute("data-index", index);
        choice.setAttribute("class", "list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between")

        var choice_button = document.createElement("button");
        choice_button.textContent = "Submit";
        choice_button.setAttribute("selected_answer", choices[index]);
        choice_button.setAttribute("data-index", index);
        choice_button.setAttribute("class", "btn btn-primary")


        // Append answer and button elements
        choice.appendChild(choice_button);
        answers_ul.appendChild(choice);
    }

}

// Display Questions and Answers
display_type_questions_and_answers(current_question);

// Start Timer
timer();
