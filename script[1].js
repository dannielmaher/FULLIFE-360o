// Dados das perguntas do teste
const questions = [
    {
        id: 1,
        question: "Escolha a opção que melhor descreve você:",
        options: [
            { text: "Gosto de receber elogios e palavras de encorajamento.", type: "PA" },
            { text: "Gosto quando alguém me ajuda com tarefas práticas.", type: "AS" }
        ]
    },
    {
        id: 2,
        question: "Qual situação faz você se sentir mais amado(a)?",
        options: [
            { text: "Quando passamos um tempo de qualidade juntos, sem distrações.", type: "TQ" },
            { text: "Quando recebo um presente significativo.", type: "RP" }
        ]
    },
    {
        id: 3,
        question: "O que mais toca seu coração?",
        options: [
            { text: "Abraços, beijos e carícias.", type: "TF" },
            { text: "Ouvir palavras de apreço e gratidão.", type: "PA" }
        ]
    },
    {
        id: 4,
        question: "Quando você se sente mais valorizado(a)?",
        options: [
            { text: "Quando alguém faz algo por mim que me alivia o fardo.", type: "AS" },
            { text: "Quando recebo um pequeno presente inesperado.", type: "RP" }
        ]
    },
    {
        id: 5,
        question: "O que mais fortalece sua conexão com alguém?",
        options: [
            { text: "Ter conversas profundas e significativas.", type: "TQ" },
            { text: "Demonstrações físicas de afeto.", type: "TF" }
        ]
    },
    {
        id: 6,
        question: "Como você prefere ser valorizado(a)?",
        options: [
            { text: "Quando me dizem o quanto sou importante.", type: "PA" },
            { text: "Quando alguém dedica seu tempo exclusivamente a mim.", type: "TQ" }
        ]
    },
    {
        id: 7,
        question: "O que mais te faz sentir cuidado(a)?",
        options: [
            { text: "Um toque gentil ou um abraço me faz sentir seguro(a).", type: "TF" },
            { text: "Alguém fazendo uma tarefa para mim, como lavar a louça.", type: "AS" }
        ]
    },
    {
        id: 8,
        question: "Qual gesto toca mais seu coração?",
        options: [
            { text: "Receber presentes que mostram que a pessoa pensou em mim.", type: "RP" },
            { text: "Ser elogiado(a) por minhas qualidades ou conquistas.", type: "PA" }
        ]
    },
    {
        id: 9,
        question: "Quando você se sente mais conectado(a)?",
        options: [
            { text: "Quando estamos fazendo algo juntos, como um hobby ou passeio.", type: "TQ" },
            { text: "Quando há contato físico, como de mãos dadas.", type: "TF" }
        ]
    },
    {
        id: 10,
        question: "Quando você está triste, o que mais te conforta?",
        options: [
            { text: "Um abraço apertado me conforta mais do que palavras.", type: "TF" },
            { text: "Ouvir palavras de apoio e compreensão me ajuda mais.", type: "PA" }
        ]
    }
];

// Descrições das linguagens do amor
const loveLanguages = {
    PA: {
        name: "Palavras de Afirmação",
        emoji: "💬",
        description: "Sua linguagem do amor são as palavras! Você se sente amado(a) quando ouve elogios, palavras de encorajamento, apreço e afirmações positivas. Frases como 'eu te amo', 'você é incrível' ou 'estou orgulhoso(a) de você' fazem seu coração se aquecer.",
        tips: "Para nutrir relacionamentos: expresse verbalmente seus sentimentos, elogie qualidades e conquistas, deixe bilhetes carinhosos, e sempre comunique apreço e gratidão."
    },
    TQ: {
        name: "Tempo de Qualidade",
        emoji: "⏰",
        description: "Sua linguagem do amor é o tempo! Você se sente amado(a) quando recebe atenção total e exclusiva. Conversas profundas, atividades compartilhadas e momentos sem distrações são o que mais valoriza nos relacionamentos.",
        tips: "Para nutrir relacionamentos: dedique tempo exclusivo, tenha conversas significativas, faça atividades juntos, desligue dispositivos durante momentos especiais, e pratique escuta ativa."
    },
    RP: {
        name: "Receber Presentes",
        emoji: "🎁",
        description: "Sua linguagem do amor são os presentes! Você se sente amado(a) quando recebe presentes significativos que mostram que alguém pensou em você. Não é sobre o valor monetário, mas sobre o simbolismo e o carinho por trás do gesto.",
        tips: "Para nutrir relacionamentos: dê presentes significativos, lembre-se de datas especiais, traga pequenas lembranças de viagens, e escolha presentes que mostrem que você conhece a pessoa."
    },
    AS: {
        name: "Atos de Serviço",
        emoji: "🤝",
        description: "Sua linguagem do amor são as ações! Você se sente amado(a) quando alguém faz algo prático para ajudá-lo(a). Tarefas domésticas, favores, ou qualquer ação que facilite sua vida são interpretadas como demonstrações de amor.",
        tips: "Para nutrir relacionamentos: ajude com tarefas práticas, antecipe necessidades, ofereça ajuda sem ser pedido, e demonstre amor através de ações concretas."
    },
    TF: {
        name: "Toque Físico",
        emoji: "🤗",
        description: "Sua linguagem do amor é o toque! Você se sente amado(a) através do contato físico apropriado. Abraços, carícias, de mãos dadas, e proximidade física fazem você se sentir conectado(a) e seguro(a) nos relacionamentos.",
        tips: "Para nutrir relacionamentos: ofereça abraços, segure as mãos, faça carícias gentis, sente-se próximo, e use o toque físico apropriado para demonstrar carinho."
    }
};

// Variáveis globais
let currentQuestionIndex = 0;
let answers = {};
let scores = { PA: 0, TQ: 0, RP: 0, AS: 0, TF: 0 };

// Elementos DOM
const introSection = document.getElementById('intro');
const testSection = document.getElementById('test');
const resultSection = document.getElementById('result');
const startTestBtn = document.getElementById('startTest');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const restartBtn = document.getElementById('restartBtn');
const progressBar = document.getElementById('progress');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const questionContainer = document.getElementById('questionContainer');
const resultContent = document.getElementById('resultContent');

// Event listeners
startTestBtn.addEventListener('click', startTest);
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
finishBtn.addEventListener('click', showResults);
restartBtn.addEventListener('click', restartTest);

// Inicialização
function init() {
    totalQuestionsSpan.textContent = questions.length;
}

function startTest() {
    introSection.classList.add('hidden');
    testSection.classList.remove('hidden');
    currentQuestionIndex = 0;
    answers = {};
    scores = { PA: 0, TQ: 0, RP: 0, AS: 0, TF: 0 };
    showQuestion();
}

function showQuestion() {
    console.log(`[showQuestion] Showing question ${currentQuestionIndex + 1}/${questions.length}`);
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option" for="option${index}">
                        <input type="radio" id="option${index}" name="question${question.id}" value="${option.type}">
                        <span class="option-text">${option.text}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `;
    
    const options = questionContainer.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", function() {
            const radio = this.querySelector("input[type=\"radio\"]");
            radio.checked = true;
            
            options.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
                       
            answers[question.id] = radio.value;
            console.log(`[showQuestion] Answered question ${question.id}: ${radio.value}`);
            console.log("[showQuestion] Current answers object:", answers);
            
            updateNavigation();       
        });
    });
    
    if (answers[question.id]) {
        const savedAnswer = answers[question.id];
        const savedRadio = questionContainer.querySelector(`input[value=\"${savedAnswer}\"]`);
            if (savedRadio) {
                savedRadio.checked = true;
                savedRadio.closest(".option").classList.add("selected");
                console.log(`[showQuestion] Restored answer for question ${question.id}: ${savedAnswer}`);
            }
        }
}

function previousQuestion() {
    console.log("[previousQuestion] called");
    currentQuestionIndex--;
    showQuestion();
}

function nextQuestion() {
    console.log("[nextQuestion] called");
    currentQuestionIndex++;
    showQuestion();
}

function updateNavigation() {
    console.log("--- [updateNavigation] called ---");
    console.log("[updateNavigation] currentQuestionIndex:", currentQuestionIndex);
    console.log("[updateNavigation] questions.length:", questions.length);
    console.log("[updateNavigation] answers object:", answers);
    console.log("[updateNavigation] Number of answers:", Object.keys(answers).length);

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    prevBtn.disabled = currentQuestionIndex === 0;

    const currentQuestionAnswered = answers[questions[currentQuestionIndex].id] !== undefined;
    nextBtn.disabled = !currentQuestionAnswered;
    console.log("[updateNavigation] currentQuestionAnswered:", currentQuestionAnswered);
    console.log("[updateNavigation] nextBtn disabled:", nextBtn.disabled);

    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    console.log("[updateNavigation] isLastQuestion:", isLastQuestion);

    if (isLastQuestion) {
        nextBtn.classList.add("hidden");
        finishBtn.classList.remove("hidden");
        const allQuestionsAnswered = Object.keys(answers).length === questions.length;
        finishBtn.disabled = !allQuestionsAnswered;
        console.log("[updateNavigation] All questions answered:", allQuestionsAnswered);
        console.log("[updateNavigation] finishBtn disabled:", finishBtn.disabled);
    } else {
        nextBtn.classList.remove("hidden");
        finishBtn.classList.add("hidden");
    }
    console.log("--- [updateNavigation] End ---");
}

function calculateScores() {
    console.log("[calculateScores] called");
    scores = { PA: 0, TQ: 0, RP: 0, AS: 0, TF: 0 }; // Reset scores
    for (const questionId in answers) {
        const answerType = answers[questionId];
        scores[answerType]++;
    }
    console.log("[calculateScores] Final scores:", scores);
}

function getPrimaryLoveLanguage() {
    console.log("[getPrimaryLoveLanguage] called");
    let primaryLanguage = "";
    let maxScore = -1;

    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            primaryLanguage = type;
        }
    }
    console.log("[getPrimaryLoveLanguage] Primary language:", primaryLanguage, "with score:", maxScore);
    return primaryLanguage;
}

function showResults() {
    console.log("[showResults] called");
    calculateScores();
    const primaryLanguage = getPrimaryLoveLanguage();
    const languageData = loveLanguages[primaryLanguage];

    resultContent.innerHTML = `
        <h2>Sua Linguagem do Amor Predominante é:</h2>
        <h3>${languageData.emoji} ${languageData.name}</h3>
        <p>${languageData.description}</p>
        <h4>Dicas para Nutrir essa Linguagem:</h4>
        <p>${languageData.tips}</p>
    `;

    testSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    console.log("[showResults] Results displayed.");
}

function restartTest() {
    console.log("[restartTest] called");
    resultSection.classList.add("hidden");
    introSection.classList.remove("hidden");
    currentQuestionIndex = 0;
    answers = {};
    scores = { PA: 0, TQ: 0, RP: 0, AS: 0, TF: 0 };
    progressBar.style.width = "0%";
    currentQuestionSpan.textContent = "0";
    init();
    console.log("[restartTest] Test reset.");
}

// Chamar init ao carregar a página
document.addEventListener("DOMContentLoaded", init);
