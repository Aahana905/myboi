// No button moving trick
const noButton = document.getElementById('no');
if (noButton) {
    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = 'absolute';
        noButton.style.left = x + 'px';
        noButton.style.top = y + 'px';
    });
}

// Quiz logic
let currentQuestion = 0;
const quizData = [
    {
        question: "What do you call me?",
        options: ["Parvati", "Darling", "Love", "All of them!"],
        answer: 3
    },
    {
        question: "Something I am really good at?",
        options: ["Dancing", "Talking", "Loving you", "Games"],
        answer: 2
    },
    {
        question: "Something I would choose without hesitation?",
        options: ["Pizza", "Pani Puri", "Ice Cream", "Chocolates"],
        answer: 1
    },
    {
        question: "Who said 'I Love You' first?",
        options: ["You", "Me", "We both did at the same time", "No one did!"],
        answer: 0
    },
    {
        question: "What is that one thing that can instantly make me smile?",
        options: ["You", "Flowers", "Movie scene", "Food"],
        answer: 0
    },
    {
        question: "My favourite colour?",
        options: ["Black", "Pink", "Purple", "White"],
        answer: 1
    },
    {
        question: "If I could travel anywhere, where would I go?",
        options: ["Mumbai", "The whole world", "Park next road", "Nowhere"],
        answer: 3
    }
];

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        window.location.href = 'finale.html';
        return;
    }
    const q = quizData[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerText = opt;
        button.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected) {
    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option');
    if (selected === q.answer) {
        buttons[selected].classList.add('correct');
    } else {
        buttons[selected].classList.add('wrong');
        buttons[q.answer].classList.add('correct');
    }
    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

window.onload = () => {
    if(document.getElementById('question')) loadQuestion();
};


