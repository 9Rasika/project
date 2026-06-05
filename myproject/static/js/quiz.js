const questions = [
    {
        q: "Which item belongs in the organic waste bin?",
        options: ["Plastic bottles", "Fruit peels", "Glass jars", "Metal cans"],
        answer: 1
    },
    {
        q: "What is the recycling code for PET plastic?",
        options: ["#1", "#2", "#3", "#5"],
        answer: 0
    },
    {
        q: "Which waste should be composted?",
        options: ["Aluminum foil", "Food scraps", "Broken glass", "Plastic bags"],
        answer: 1
    },
    {
        q: "Which is NOT recyclable?",
        options: ["Paper", "Glass", "Styrofoam", "Metal"],
        answer: 2
    },
    {
        q: "What color bin is usually used for recyclable waste?",
        options: ["Green", "Blue", "Red", "Black"],
        answer: 1
    },
    {
        q: "Which practice reduces waste the most?",
        options: ["Recycling", "Landfilling", "Reducing usage", "Burning waste"],
        answer: 2
    },
    {
        q: "E-waste includes?",
        options: ["Food waste", "Electronics", "Garden waste", "Glass"],
        answer: 1
    },
    {
        q: "What gas is produced from landfills?",
        options: ["Oxygen", "Methane", "Nitrogen", "Hydrogen"],
        answer: 1
    },
    {
        q: "Which item is biodegradable?",
        options: ["Plastic spoon", "Banana peel", "Metal can", "Glass bottle"],
        answer: 1
    },
    {
        q: "Best alternative to plastic bags?",
        options: ["Paper bags", "Cloth bags", "Foil bags", "Rubber bags"],
        answer: 1
    }
];

let current = 0;
let score = 0;
let time = 0;
let timerInterval;

function startQuiz() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("quizScreen").classList.remove("hidden");
    loadQuestion();
    timerInterval = setInterval(() => {
        time++;
        document.getElementById("timer").innerText =
            `⏱ ${String(Math.floor(time/60)).padStart(2,'0')}:${String(time%60).padStart(2,'0')}`;
    }, 1000);
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.getElementById("progressText").innerText = `Question ${current+1} of ${questions.length}`;
    document.getElementById("score").innerText = `Score: ${score}/${current}`;
    document.getElementById("progressFill").style.width =
        `${((current)/questions.length)*100}%`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("nextBtn").classList.add("hidden");

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.innerText = opt;
        div.onclick = () => selectAnswer(i, div);
        optionsDiv.appendChild(div);
    });
}

function selectAnswer(i, el) {
    const correct = questions[current].answer;
    document.querySelectorAll(".option").forEach(o => o.onclick = null);

    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";

    if (i === correct) {
        el.classList.add("correct");
        score++;
        feedback.className = "correct";
        feedback.innerText = "✔ Correct!";
    } else {
        el.classList.add("wrong");
        document.querySelectorAll(".option")[correct].classList.add("correct");
        feedback.className = "wrong";
        feedback.innerText = "✖ Not quite right.";
    }

    document.getElementById("nextBtn").classList.remove("hidden");
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        document.getElementById("quizScreen").classList.add("hidden");
        document.getElementById("resultScreen").classList.remove("hidden");
        document.getElementById("finalScore").innerText =
            `You scored ${score} out of ${questions.length}`;
    }
}
