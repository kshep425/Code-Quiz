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

// Set time left, type, question, answer, and result areas
let time_div = document.createElement("div");
time_div.setAttribute("id", "time_area");
console.log(time_div)

let type_div = document.createElement('div');
type_div.setAttribute("id", "type_area");
console.log(type_div);

let question_div = document.createElement("div");
question_div.setAttribute("id", "question_area");

let answer_div = document.createElement("div");
answer_div.setAttribute("id", "answer_area");

let result_div = document.createElement("div");
result_div.setAttribute("id", "result_area");


// Add Timer starting countdown of 60 seconds
// add timer starting at 60
let time = document.createElement("span")
var time_left = 60;
time.textContent = time_left;
var error_time = 0;

let time_display = document.createElement("p");
time_display.textContent = "Time: ";
console.log(time_display)

console.log(time);
console.log(time_left);

// Create type elements
let type_sp = document.createElement("span");
let type_p = document.createElement("p");
type_p.textContent = "Type: "

// Create question elements
let question_h2 = document.createElement("h2");

// Create answer elements
let answers_ul = document.createElement("ul");
answers_ul.setAttribute("id", "answer_list");

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

function display_type_questions_and_answers(question){
    // add code to replace old answers_ul with new_answers_ul
    new_answers_ul = document.createElement("ul");
    ans_li = document.getElementById("answer_list")
    answer_div.replaceChild(new_answers_ul, ans_li);
    answers_ul = new_answers_ul;
    answers_ul.setAttribute("id", "answer_list");
    console.log(answers_ul);

    // Get the question, type, question, and choices
    let type = question["type"];
    let quiz_question = question["title"];
    let choices = question["choices"];
    console.log(type);
    console.log(quiz_question);
    console.log(choices);

    // Type
    type_sp.textContent = type;

    // Add Question
    question_h2.textContent = quiz_question;

    // Add Choices
    for (let index = 0; index < choices.length; index++) {
        // Create answer and button elements
        let choice = document.createElement("li");
        choice.textContent = choices[index];
        choice.setAttribute("id", choices[index]);
        choice.setAttribute("selected_answer", choices[index]);
        choice.setAttribute("data-index", index);

        var choice_button = document.createElement("button");
        choice_button.textContent = "Submit";
        choice_button.setAttribute("selected_answer", choices[index]);
        choice_button.setAttribute("data-index", index);


        // Append answer and button elements
        choice.appendChild(choice_button);
        answers_ul.appendChild(choice);
        console.log(choice)
    }

}

// Area for Results

//  - Add Horizontal Line
let horizontal_line = document.createElement("hr")
horizontal_line.setAttribute("hidden", true)

//  - Add Result Message
let correct_result_msg = "Correct";
let wrong_result_msg = "Wrong";

result_h3 = document.createElement("h3")




// Append Elements to page
//   - Append time, question, answer, and result divs
document.body.appendChild(time_div);
document.body.appendChild(type_div);
document.body.appendChild(question_div);
document.body.appendChild(answer_div);
document.body.appendChild(result_div);

//   - Append time elements
time_display.appendChild(time)
time_div.appendChild(time_display);

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
let quiz_questions = localStorage.getItem("questions");
let selected_quiz_questions = []
quiz_questions = JSON.parse(quiz_questions);

// Get quiz questions that match selected_quiz_options
let all_quiz_options = ["html", "css", "javascript", "jquery"]
let quiz_options = localStorage.getItem("quiz_types")
quiz_options = JSON.parse(quiz_options)
if (quiz_options != [] || quiz_options != all_quiz_options){
    console.log("filter questions to type" + quiz_options)
    for (let i = 0; i < quiz_questions.length; i++) {
        for (let j = 0; j < quiz_options.length; j++) {
            if (quiz_questions[i]["type"] === quiz_options[j]){
                selected_quiz_questions.push(quiz_questions[i])
            }
        }
    }
    quiz_questions = selected_quiz_questions
}

console.log(quiz_questions);
question_count = 1
var current_question = quiz_questions[question_count - 1];
display_type_questions_and_answers(current_question);



// Listen for click on answer div and validate answer
answer_div.addEventListener("click", function(event){
    var element = event.target;
    console.log(element);
    console.log(element.getAttribute("data-index"));
    console.log(element.getAttribute("selected_answer"))

    let result = check_answer(element.getAttribute("selected_answer"));

    if (result){
        result_h3.textContent = correct_result_msg;
    } else {
        result_h3.textContent = wrong_result_msg;
        error_time = error_time + 5;
    }

    // Switch to next question 1 second after result is displayed!
    timeout = setTimeout(next_question, 500);





    //  * Or when timer reaches 0
});

function check_answer(selected_answer){
    console.log(current_question["answer"])
    console.log(selected_answer)

    let correct = current_question["answer"] === selected_answer
    console.log(correct)
    return correct;
}

function next_question(){
    question_count += 1;

    if (question_count >= 6){
        //  When 5 questions are answered
        localStorage.setItem("score", time_left - error_time);
        // localStorage.setItem("quiz_types", JSON.stringify(quiz_options));
        alert("Times Up!\n You scored " + time_left + " with error seconds " + error_time + "!");
        // Switch to complete.html:
        window.location.href = "./complete.html"
    }

    // Set current_question
    current_question = quiz_questions[question_count];
    console.log("question count: " + question_count);

    // clear result display
    result_h3.textContent = "";
    display_type_questions_and_answers(current_question);
}

// Start Timer
timer();
