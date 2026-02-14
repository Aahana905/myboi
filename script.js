// ==================== FALLING HEARTS (all pages) ====================
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

// Hearts appear every 300ms
setInterval(createHeart, 300);

// ==================== QUIZ DATA ====================
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
// ==================== LOAD QUIZ QUESTIONS ====================
function loadQuestion() {
    if (!document.getElementById('question')) return; // only run on quiz page

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

// ==================== CHECK ANSWER + CONFETTI ====================
function checkAnswer(selected) {
    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option');

    if (selected === q.answer) {
        buttons[selected].classList.add('correct');
        celebrate(); // 🎉 confetti for correct answer
    } else {
        buttons[selected].classList.add('wrong');
        buttons[q.answer].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestion++;
        loadQuestion();
    }, 1000);
}

// ==================== CONFETTI FUNCTION ====================
function celebrate() {
    const colors = ['#ff6f91','#ff92a9','#ffafbd','#ffc3a0','#ff355e','#ffccf9'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.opacity = 1;
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `fall 1.5s forwards`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1500);
    }
}

// ==================== FINALE PAGE FLOATING HEARTS ====================
if(window.location.pathname.includes('finale.html')){
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'finale-heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}

// ==================== INITIALIZE ====================
window.onload = () => {
    loadQuestion();
    
    // No button moving trick (on index.html)
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
};
