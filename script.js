const quizData = [
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<button>"],
      answer: "<a>"
    },
    {
      question: "Which property is used to change text color in CSS?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color"
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Management",
        "Desktop Oriented Model",
        "Document Oriented Method"
      ],
      answer: "Document Object Model"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "int", "let", "Both var and let"],
      answer: "Both var and let"
    },
    {
      question: "Which of the following is NOT a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: "HTML"
    }
  ];
  
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option-btn");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    clearStyles();
  
    const currentData = quizData[currentQuestion];
    questionEl.textContent = currentData.question;
  
    optionButtons.forEach((btn, index) => {
      btn.textContent = currentData.options[index];
      btn.disabled = false;
  
      btn.onclick = () => {
        if (btn.textContent === currentData.answer) {
          btn.style.backgroundColor = "#28a745"; // green
          btn.style.color = "white";
          score++;
        } else {
          btn.style.backgroundColor = "#dc3545"; // red
          btn.style.color = "white";
        }
  
        // Highlight correct answer
        optionButtons.forEach(button => {
          if (button.textContent === currentData.answer) {
            button.style.backgroundColor = "#28a745";
            button.style.color = "white";
          }
          button.disabled = true;
        });
      };
    });
  }
  
  function clearStyles() {
    optionButtons.forEach(btn => {
      btn.style.backgroundColor = "white";
      btn.style.color = "#0077cc";
    });
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };
  
  function showScore() {
    document.getElementById("quiz").innerHTML = `
      <h2>Your Score: ${score}/${quizData.length}</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
  
  loadQuestion();
  