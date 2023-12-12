<script>
    const startBtn = document.getElementById('start-btn');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const timerElement = document.getElementById('timer');
    const timeSpan = document.getElementById('time');
    const gameOverContainer = document.getElementById('game-over-container');
    const finalScoreElement = document.getElementById('final-score');
    const initialsInput = document.getElementById('initials');
    const saveScoreBtn = document.getElementById('save-score-btn');

    let currentQuestionIndex = 0;
    let timeLeft = 60;
    let timer;

    const questions = [
        {
            question: 'Which is the correct symbol used for comments in javascript?',
            choices: ['#', '//', '*'],
            correctAnswer: '//'
        },
        {
            question: 'What does the "==" comapre in javascript?',
            choices: ['Data', 'Values', 'Data and values'],
            correctAnswer: 'Data and values'
        },
    ];

    startBtn.addEventListener('click', startQuiz);
    saveScoreBtn.addEventListener('click', saveScore);

    function startQuiz() {
        startBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
        startTimer();
    }

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;

        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].textContent = question.choices[i];
            choiceButtons[i].addEventListener('click', checkAnswer);
        }
    }

    function startTimer() {
        timer = setInterval(function() {
            timeLeft--;
            timeSpan.textContent = timeLeft;

            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function checkAnswer(event) {
        const selectedChoice = event.target.textContent;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedChoice === correctAnswer) {
        } else {
            timeLeft -= 10;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }

    function endGame() {
        clearInterval(timer);
        quizContainer.style.display = 'none';
        gameOverContainer.style.display = 'block';
        finalScoreElement.textContent = timeLeft;

        let gameOverMessage = 'Game Over!';
        if (timeLeft > 0) {
            gameOverMessage += ` You have completed the quiz with ${timeLeft} seconds remaining.`;
        } else {
            gameOverMessage += ' Time has run out! Try again.';
        }
            }
            document.getElementById('quiz-complete-message').style.display = 'block';
    }

    function saveScore() {
        const initials = initialsInput.value;
        alert(`Score saved: ${initials} - ${timeLeft}`);
    }
</script>