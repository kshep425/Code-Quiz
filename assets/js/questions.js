var questions = [
  // https://www.javatpoint.com/html-interview-questions
  {
    title: "What is HTML",
    choices: [
      "Hyper Text Markup Language",
      "Home Technology Mark Language",
      "Hello To My Landlord",
      "Hundred Tech Men Lookup"
    ],
    answer: "Hyper Text Markup Language",
    type: "html"
  },
  {
    title: "HTML is a __________ of the World Wide Web",
    choices: ["language", "standard", "savior", "destroyer"],
    answer: "language",
    type: "html"
  },
  {
    title: "HTML is used to create and display ______________________",
    choices: [
      "pages on the Web",
      "videos on tv",
      "satellite streaming services",
      "radio shows"
    ],
    answer: "pages on the Web",
    type: "html"
  },
  {
    title: "HTML makes text: ______________________",
    choices: [
      "static and dry",
      "interactive and dynamic",
      "impossible to read",
      "hungry"
    ],
    answer: "interactive and dynamic",
    type: "html"
  },
  {
    title: "HTML Tags are not composed of",
    choices: ["An opening tag", "A closing tag", "Content", "Pictures"],
    answer: "Pictures",
    type: "html"
  },
  {
    title: "Which of these must have an end tag in HTML?",
    choices: ["<br>", "<image>", "<hr>", "<td>"],
    answer: "<td>",
    type: "html"
  },
  {
    title: "How many types of heading does an HTML contain?",
    choices: [
      Math.floor(Math.random() * 100),
      "6",
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ],
    answer: "6",
    type: "html"
  },
  // https://www.javatpoint.com/css-interview-questions
  {
    title: "CSS is used to :",
    choices: [
      "Make websites beautiful and appealing",
      "Make life miserable",
      "Call Standard Sequences",
      "Quickly and efficiently contact your clients"
    ],
    answer: "Make websites beautiful and appealing",
    type: "css"
  },
  {
    title: "What is SGML?",
    choices: [
      "Standard Generalized Markup Language is the origin of CSS",
      "Signal Game Markup Language, HTML Orgin",
      "System General Madeup Language",
      "I don't know"
    ],
    answer: "Standard Generalized Markup Language is the origin of CSS",
    type: "css"
  },
  {
    title: "What does CSS stand for?",
    choices: [
      "Cascading Superior Sheet",
      "Curl Standard Sheet",
      "Company Standard Style",
      "Cascading Style Sheet"
    ],
    answer: "Cascading Style Sheet",
    type: "css"
  },
  {
    title: "What method doesn't work to integrate CSS on a web page?",
    choices: [
      "Inline method",
      "Embedded/Internal method",
      "Out of Scope Method",
      "Linked/Imported/External method"
    ],
    answer: "Out of Scope Method",
    type: "css"
  },
  {
    title: "What is a limitation of CSS?",
    choices: [
      "Bandwidth",
      "No expressions",
      "Site-wide consistency",
      "Content separated from presentation"
    ],
    answer: "No expressions",
    type: "css"
  },
  //https://www.javatpoint.com/javascript-interview-questions
  {
    title: "What is not a feature of javascript",
    choices: [
      "Multithreading",
      "Interactivity is high",
      "Richer interfaces",
      "Open Source cross platfrom"
    ],
    answer: "Multithreading",
    type: "javascript"
  },
  {
    title: 'What is this function called? var display = function(){ alert("Can alert from this?");}  display();  ',
    choices: ["Error", "Anonymous Function", "Alert", "Warning"],
    answer: "Anonymous Function",
    type: "javascript"
  },
  {
    title: "Can you assign variables to anonymous functions?",
    choices: ["Yes", "No", "Maybe", "Not Sure"],
    answer: "Yes",
    type: "javascript"
  },
  {
    title: "What do you need when a variable is defined outside the scope in reference and is accessed from some inner scope?",
    choices: ["deep breath", "closure", "opening", "headache medication"],
    answer: "closure",
    type: "javascript"
  },
  {
    title: "If you have string var str ='MyString' and you want to get character 'S', what do you use?",
    choices: ["var s = S", "str[3]", "str.charAt(2)", "str.getMe('S')"],
    answer: "str.charAt(2)",
    type: "javascript"
  },
  {
    title: "What is the use of val() method in JQuery?",
    choices: [
      "To get the current value of the first element in the set of matched elements.",
      "To unset the value of every matched element.",
      "To create a text string in standard URL-encoded notation.",
      "To find values on the page"],
    answer: "To get the current value of the first element in the set of matched elements.",
    type: "jquery"
  },
  {
    title: "What does attr() do?",
    choices: [
        "It allows you to use <a> tag nested inside paragraph <p> tag to select all links.",
        "it gets the value of a property for the first element in the set of matched elements. It is introduced in jQuery 1.6.",
        "It gets the value of an attribute for the first element in the set of matched element.",
        "It is a method to add CSS class to an element and removeclass() jQuery method to remove CSS class from an element."],
    answer: "",
    type: "jquery"
  },
  {
    title: "What are the two types of CDN?",
    choices: ["Microsoft and Linux", "Microsoft and Google", "Apple and Microsoft", "Google and Yahoo"],
    answer: "Microsoft and Google",
    type: "jquery"
  },
  {
    title: "What is used for custom animation effects in JQuery?",
    choices: [
        "$(selector).animate({params}, [duration], [easing], [callback])",
        "$(event).moveit()",
        "$(jump).jumpandmove()",
        "You can't do animations"],
    answer: "$(selector).animate({params}, [duration], [easing], [callback])",
    type: "jquery"
  },
  {
    title: "Select command to disable animation using JQuery",
    choices: ["Trick Question you can't disable animation", "JQuery.animation.disable", "jQuery.fx.off", "$(animation).off"],
    answer: "jQuery.fx.off",
    type: "jquery"
  }
];

// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
function shuffle(arra1) {
  let ctr = arra1.length,
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
