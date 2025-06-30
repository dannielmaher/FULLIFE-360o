// Dados das perguntas do teste (NOVO QUESTIONÁRIO)
const questions = [
    {
        id: 1,
        question: "O que mais te faz sentir amado(a)?",
        options: [
            { text: "(A) Receber elogios e reconhecimento", type: "PA" },
            { text: "(B) Passar tempo junto, mesmo sem fazer nada especial", type: "TQ" },
            { text: "(C) Receber presentes que mostram que alguém lembrou de você", type: "RP" },
            { text: "(D) Receber ajuda em tarefas ou responsabilidades", type: "AS" },
            { text: "(E) Receber abraços ou carinho", type: "TF" }
        ]
    },
    {
        id: 2,
        question: "Como você geralmente demonstra amor às pessoas?",
        options: [
            { text: "(A) Digo palavras gentis e elogios sinceros", type: "PA" },
            { text: "(B) Dedico meu tempo exclusivo para conversar ou passear", type: "TQ" },
            { text: "(C) Dou presentes especiais e personalizados", type: "RP" },
            { text: "(D) Ajudo em tarefas cotidianas ou resolvo algo para elas", type: "AS" },
            { text: "(E) Ofereço contato físico afetuoso frequentemente", type: "TF" }
        ]
    },
    {
        id: 3,
        question: "O que mais te incomoda numa relação?",
        options: [
            { text: "(A) Não ser reconhecido(a) ou elogiado(a)", type: "PA" },
            { text: "(B) Não ter tempo suficiente com a pessoa", type: "TQ" },
            { text: "(C) Não receber nenhum presente ou gesto material", type: "RP" },
            { text: "(D) Não ser ajudado(a) nas responsabilidades", type: "AS" },
            { text: "(E) Falta de carinho físico", type: "TF" }
        ]
    },
    {
        id: 4,
        question: "Quando você pensa num momento especial, o que vem primeiro à mente?",
        options: [
            { text: "(A) Palavras carinhosas que foram ditas", type: "PA" },
            { text: "(B) Momentos tranquilos e íntimos juntos", type: "TQ" },
            { text: "(C) Presentes recebidos em datas especiais", type: "RP" },
            { text: "(D) Ações ou gestos que facilitaram a sua vida", type: "AS" },
            { text: "(E) Toques ou demonstrações físicas de carinho", type: "TF" }
        ]
    },
    {
        id: 5,
        question: "Se alguém quer pedir desculpas, o que mais te comove?",
        options: [
            { text: "(A) Desculpas sinceras e verbalizadas claramente", type: "PA" },
            { text: "(B) Passar um tempo especial juntos após a briga", type: "TQ" },
            { text: "(C) Receber um presente simbólico como reconciliação", type: "RP" },
            { text: "(D) Ter a pessoa demonstrando esforço em resolver um problema seu", type: "AS" },
            { text: "(E) Um abraço ou contato físico afetuoso", type: "TF" }
        ]
    },
    {
        id: 6,
        question: "O que você valoriza muito numa relação afetiva?",
        options: [
            { text: "(A) Comunicação aberta e verbal de sentimentos", type: "PA" },
            { text: "(B) Fazer atividades juntos regularmente", type: "TQ" },
            { text: "(C) Troca de presentes e lembranças", type: "RP" },
            { text: "(D) Cooperação diária em tarefas", type: "AS" },
            { text: "(E) Intimidade física e contato constante", type: "TF" }
        ]
    },
    {
        id: 7,
        question: "Quando você está triste, prefere que:",
        options: [
            { text: "(A) Alguém diga palavras de encorajamento", type: "PA" },
            { text: "(B) Passe tempo de qualidade com você", type: "TQ" },
            { text: "(C) Te traga algum mimo ou presente pequeno", type: "RP" },
            { text: "(D) Te ajude com algo prático que você precisa resolver", type: "AS" },
            { text: "(E) Te abrace e faça carinho", type: "TF" }
        ]
    },
    {
        id: 8,
        question: "O que mais sente falta quando está distante da pessoa que ama?",
        options: [
            { text: "(A) Conversas e mensagens carinhosas", type: "PA" },
            { text: "(B) Tempo juntos, conversas longas", type: "TQ" },
            { text: "(C) Presentes e lembranças físicas", type: "RP" },
            { text: "(D) Apoio em tarefas ou problemas", type: "AS" },
            { text: "(E) Contato físico, abraço e toque", type: "TF" }
        ]
    },
    {
        id: 9,
        question: "Como prefere comemorar uma conquista pessoal?",
        options: [
            { text: "(A) Ouvir palavras de reconhecimento e incentivo", type: "PA" },
            { text: "(B) Comemorando ao lado de quem você gosta", type: "TQ" },
            { text: "(C) Recebendo presentes ou algo especial", type: "RP" },
            { text: "(D) Com alguém realizando algo útil para você", type: "AS" },
            { text: "(E) Abraçando e estando próximo fisicamente das pessoas que ama", type: "TF" }
        ]
    },
    {
        id: 10,
        question: "Que tipo de comportamento mais demonstra falta de amor para você?",
        options: [
            { text: "(A) Não demonstrar afeto com palavras", type: "PA" },
            { text: "(B) Não querer passar tempo juntos", type: "TQ" },
            { text: "(C) Não lembrar de datas especiais com presentes ou gestos materiais", type: "RP" },
            { text: "(D) Não ajudar em situações cotidianas importantes", type: "AS" },
            { text: "(E) Evitar ou rejeitar contato físico e carinho", type: "TF" }
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
        console.log("[updateNavigation] (Last Q) All questions answered:", allQuestionsAnswered);
        console.log("[updateNavigation] (Last Q) finishBtn disabled:", finishBtn.disabled);
        console.log("[updateNavigation] (Last Q) answers keys:", Object.keys(answers));
        console.log("[updateNavigation] (Last Q) questions length:", questions.length);
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


