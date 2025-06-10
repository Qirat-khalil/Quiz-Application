

let con = document.querySelector(".container");
let questionbox = document.querySelector(".ques");
let optionbox = document.querySelector(".opt");
let butt = document.querySelector(".btn");
let scorecard = document.querySelector(".scorecard");
let strbtn = document.querySelector(".strbtn");
let timer = document.querySelector(".timer");

let quizQ = [

  {
    question: "Q1: HTML ka full form kya hai?",
    name: "q1",
    Option: [
      "A) HighText Machine Language",
      "B) HyperText and links Markup Language",
      "C) HyperText Markup Language",
      "D) None of these"
    ],
    answer: "C) HyperText Markup Language"
  },
  {
    question: "Q2: <br> tag ka kya use hota hai?",
    name: "q2",
    Option: [
      "A) New paragraph",
      "B) Bold text",
      "C) Line break",
      "D) Image insert"
    ],
    answer: "C) Line break"
  },
  {
    question: "Q3: Image insert karne ke liye konsi tag hoti hai?",
    name: "q3",
    Option: [
      "A) <img>",
      "B) <image>",
      "C) <picture>",
      "D) <src>"
    ],
    answer: "A) <img>"
  },

  {
    question: "Q4: CSS ka full form kya hai?",
    name: "q4",
    Option: [
      "A) Computer Style Sheets",
      "B) Colorful Style Sheets",
      "C) Cascading Style Sheets",
      "D) Creative Style Sheets"
    ],
    answer: "C) Cascading Style Sheets"
  },
  {
    question: "Q5: CSS mein background color kaise set karte hain?",
    name: "q5",
    Option: [
      'A) background = "red";',
      "B) color: red;",
      "C) bg-color: red;",
      "D) background-color: red;"
    ],
    answer: "D) background-color: red;"
  },
  {
    question: "Q6: External CSS file ka extension kya hota hai?",
    name: "q6",
    Option: [
      "A) .html",
      "B) .css",
      "C) .js",
      "D) .style"
    ],
    answer: "B) .css"
  },


  {
    question: "Q7: JavaScript ko HTML file mein kaise link karte hain?",
    name: "q7",
    Option: [
      'A) <script href="file.js">',
      'B) <link src="file.js">',
      'C) <script src="file.js"></script>',
      'D) <js file="file.js">'
    ],
    answer: 'C) <script src="file.js"></script>'
  },
  {
    question: "Q8: let keyword kis liye use hota hai?",
    name: "q8",
    Option: [
      "A) Constant value banane ke liye",
      "B) Variable declare karne ke liye",
      "C) Loop banane ke liye",
      "D) Error show karne ke liye"
    ],
    answer: "B) Variable declare karne ke liye"
  },
  {
    question: "Q9: JavaScript mein alert box kaise show hota hai?",
    name: "q9",
    Option: [
      'A) show("Hello")',
      'B) alert("Hello")',
      'C) message("Hello")',
      'D) popup("Hello")'
    ],
    answer: 'B) alert("Hello")'
  },


  {
    question: "Q10: JavaScript mein loop ke liye kaunsa keyword use hota hai?",
    name: "q10",
    Option: [
      "A) loop",
      "B) for",
      "C) iterate",
      "D) repeat"
    ],
    answer: "B) for"
  }
];

let currindex = 0;
let score = 0;
let totalTime = 25;
let timerInterval;

function showques() {
  let q = quizQ[currindex];
  questionbox.textContent = q.question;
  optionbox.innerHTML = "";

  q.Option.forEach(opt => {
    let div = document.createElement("div");
    div.classList.add("choicselec");
    div.textContent = opt;
    
    div.addEventListener("click", function () {
      document.querySelectorAll(".choicselec").forEach(d => d.classList.remove("selected"));
      div.classList.add("selected");
    });
    optionbox.appendChild(div);
  });
}

function showanswer() {
  let selected = document.querySelector(".choicselec.selected");
  if (selected && selected.textContent === quizQ[currindex].answer) {
    score++;
  }
  currindex++;
  if (currindex < quizQ.length) {
    showques();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  questionbox.textContent = "";
  optionbox.textContent = "";
  butt.style.display = "none";

  // Swal alert box show score
  Swal.fire({
    title: '🎉 Quiz Completed!',
    html: `<strong>Your score is:</strong> ${score} out of ${quizQ.length}`,
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false
  });
}



function startQuiz() {
  strbtn.style.display = "none";
  con.style.display = "block";
  showques();
  startTimer();
}

function startTimer() {
  timer.textContent = totalTime;
  timerInterval = setInterval(() => {
    totalTime--;
    timer.textContent = totalTime;

    if (totalTime <= 0) {
      endQuiz();
    }
  }, 1000);
}


strbtn.addEventListener("click", startQuiz);
butt.addEventListener("click", showanswer);
