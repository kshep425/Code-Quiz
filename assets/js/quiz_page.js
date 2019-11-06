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

// Set time left, question, answer, and result areas
let time_div = document.createElement("div");
time_div.setAttribute("id", "time_area");
console.log(time_div)

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

let time_display = document.createElement("p");
time_display.textContent = "Time: ";
console.log(time_display)

console.log(time);
console.log(time_left);

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
            debugger;
            window.location.href = "./complete.html"
        }

    }, 1000)
}

// Get Questions out of Local Storage based on type
let quiz_questions = localStorage.getItem("questions");
quiz_questions = JSON.parse(quiz_questions);
console.log(quiz_questions);


// Type

// Add Question


// Add Answers


// Area for Results

//  - Add Horizontal Line
//  - Add Result Message

// Switch to next question after result is displayed!

// Switch to complete.html:
//  * When 5 questions are answered
//  * Or when timer reaches 0


// Append Elements to page
//   - Add time, question, answer, and result divs
document.body.appendChild(time_div);
document.body.appendChild(question_div);
document.body.appendChild(answer_div);
document.body.appendChild(result_div);

//   - Add time elements
time_display.appendChild(time)
time_div.appendChild(time_display);


// Start Timer
timer()