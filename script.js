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
        question: "Where did we first meet?",
        options: ["School", "Park", "Cafe", "Library"],
        answer: 0
    },
    {
        question: "My weirdest habit?",
        options: ["Talking to myself", "Eating at night", "Singing in shower", "Collecting pens"],
        answer: 2
    },
    {
        question: "Favorite snack I steal from you?",
        options: ["Chocolates", "Chips", "Ice Cream", "Cookies"],
        answer: 0
    },
    {
        question: "My go-to karaoke song?",
        options: ["Song A", "Song B", "Song C", "Song D"],
        answer: 1
    },
    {
        question: "My guilty pleasure show?",
        options: ["Show A", "Show B", "Show C", "Show D"],
        answer: 2
    },
    {
        question: "First movie we watched together?",
        options: ["Movie A", "Movie B", "Movie C", "Movie D"],
        answer: 0
    },
    {
        question: "My most repeated joke?",
        options: ["Joke A", "Joke B", "Joke C", "Joke D"],
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
