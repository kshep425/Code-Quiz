var questions = [
    {
        title: "1Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "html"
    },
    {
        title: "2The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "html"
    },
    {
        title: "3Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "html"
    },
    {
        title: "4The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "html"
    },
    {
        title: "5Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "html"
    },
    {
        title: "6The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "html"
    },
    {
        title: "7Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "html"
    },
    {
        title: "8The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "css"
    },
    {
        title: "9Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "css"
    },
    {
        title: "10The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "css"
    },
    {
        title: "11Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "css"
    },
    {
        title: "12The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "css"
    },
    {
        title: "13The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "javascript"
    },
    {
        title: "14Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "javascript"
    },
    {
        title: "15The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "javascript"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "javascript"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "javascript"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "jquery"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "jquery"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "jquery"
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        type: "jquery"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: [
        'quotes ""',
        "curly brackets {}",
        "parentheses ()",
        "square brackets []"
        ],
        answer: "parentheses ()",
        type: "jquery"
    }
];

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
function shuffle(arra1) {
    var ctr = arra1.length,
    temp,
    index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

localStorage.setItem("questions", JSON.stringify(shuffle(questions)));
