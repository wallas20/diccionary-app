// ----------- DATOS (LOCALSTORAGE) -----------

const defaultDictionary = [
    {
        name: "Pronombres",
        words: [
            { es: "yo", en: "I (ái)" },
            { es: "tú / usted", en: "You (yú)" },
            { es: "él", en: "He (jí)" },
            { es: "ella", en: "She (shí)" },
            { es: "eso", en: "It (ít)" },
            { es: "nosotros", en: "We (uí)" },
            { es: "ellos", en: "They (déi)" },
            { es: "me", en: "Me (mí)" },
            { es: "mi", en: "My (mái)" },
            { es: "tu", en: "Your (yór)" },
            { es: "su (de él)", en: "His (jís)" },
            { es: "su (de ella)", en: "Her (jér)" }
        ]
    },
    {
        name: "Verbos",
        words: [
            { es: "ser / estar", en: "Be (bí)" },
            { es: "tener", en: "Have (jav)" },
            { es: "hacer", en: "Do (dú)" },
            { es: "decir", en: "Say (séi)" },
            { es: "ir", en: "Go (góu)" },
            { es: "obtener", en: "Get (guét)" },
            { es: "hacer / crear", en: "Make (méik)" },
            { es: "saber", en: "Know (nóu)" },
            { es: "pensar", en: "Think (zínk)" },
            { es: "ver", en: "See (sí)" },
            { es: "querer", en: "Want (uánt)" },
            { es: "usar", en: "Use (yús)" },
            { es: "encontrar", en: "Find (fáind)" },
            { es: "dar", en: "Give (guív)" },
            { es: "trabajar", en: "Work (uérk)" },
            { es: "llamar", en: "Call (kól)" },
            { es: "intentar", en: "Try (trái)" },
            { es: "preguntar", en: "Ask (ask)" },
            { es: "necesitar", en: "Need (níid)" },
            { es: "sentir", en: "Feel (fíil)" }
        ]
    },
    {
        name: "Verbos básicos de acción",
        words: [
            { es: "comer", en: "Eat (ít)" },
            { es: "beber", en: "Drink (drínk)" },
            { es: "dormir", en: "Sleep (slíip)" },
            { es: "correr", en: "Run (ran)" },
            { es: "caminar", en: "Walk (uók)" },
            { es: "venir", en: "Come (kám)" },
            { es: "salir", en: "Leave (líiv)" },
            { es: "traer", en: "Bring (bríng)" },
            { es: "tomar / llevar", en: "Take (téik)" },
            { es: "poner", en: "Put (put)" },
            { es: "abrir", en: "Open (óupen)" },
            { es: "cerrar", en: "Close (klóus)" },
            { es: "empezar", en: "Start (stárt)" },
            { es: "terminar", en: "Finish (fínish)" },
            { es: "jugar", en: "Play (pléi)" },
            { es: "leer", en: "Read (ríd)" },
            { es: "escribir", en: "Write (ráit)" },
            { es: "escuchar", en: "Listen (lí-sen)" },
            { es: "hablar", en: "Speak (spíik)" }
        ]
    },
    {
        name: "Verbos mentales",
        words: [
            { es: "pensar", en: "Think (zínk)" },
            { es: "creer", en: "Believe (bi-líiv)" },
            { es: "entender", en: "Understand (ander-stánd)" },
            { es: "recordar", en: "Remember (ri-mém-ber)" },
            { es: "olvidar", en: "Forget (for-guét)" },
            { es: "aprender", en: "Learn (lérn)" },
            { es: "enseñar", en: "Teach (tíich)" },
            { es: "explicar", en: "Explain (eks-pléin)" },
            { es: "responder", en: "Answer (án-ser)" },
            { es: "preguntar", en: "Ask (ask)" },
            { es: "conversar", en: "Talk (tók)" },
            { es: "contar / decir", en: "Tell (tél)" },
            { es: "significar", en: "Mean (míin)" }
        ]
    },
    {
        name: "Verbos de necesidad",
        words: [
            { es: "necesitar", en: "Need (níid)" },
            { es: "querer", en: "Want (uánt)" },
            { es: "gustar", en: "Like (láik)" },
            { es: "amar", en: "Love (láv)" },
            { es: "odiar", en: "Hate (jéit)" },
            { es: "sentir", en: "Feel (fíil)" },
            { es: "esperar", en: "Hope (jóup)" },
            { es: "disfrutar", en: "Enjoy (en-yóy)" },
            { es: "preferir", en: "Prefer (pri-fér)" },
            { es: "extrañar", en: "Miss (mis)" }
        ]
    },
    {
        name: "Verbos de trabajo",
        words: [
            { es: "trabajar", en: "Work (uérk)" },
            { es: "estudiar", en: "Study (stá-di)" },
            { es: "usar", en: "Use (yús)" },
            { es: "intentar", en: "Try (trái)" },
            { es: "ayudar", en: "Help (jélp)" },
            { es: "pagar", en: "Pay (péi)" },
            { es: "comprar", en: "Buy (bái)" },
            { es: "vender", en: "Sell (sél)" },
            { es: "manejar", en: "Drive (dráiv)" },
            { es: "viajar", en: "Travel (trá-vel)" },
            { es: "conocer / reunirse", en: "Meet (míit)" },
            { es: "llamar", en: "Call (kól)" }
        ]
    },
    {
        name: "Verbos muy usados",
        words: [
            { es: "ser / estar", en: "Be (bí)" },
            { es: "tener", en: "Have (jav)" },
            { es: "hacer", en: "Do (dú)" },
            { es: "decir", en: "Say (séi)" },
            { es: "ir", en: "Go (góu)" },
            { es: "obtener", en: "Get (guét)" },
            { es: "hacer", en: "Make (méik)" },
            { es: "saber", en: "Know (nóu)" },
            { es: "ver", en: "See (sí)" },
            { es: "dar", en: "Give (guív)" },
            { es: "encontrar", en: "Find (fáind)" },
            { es: "pensar", en: "Think (zínk)" },
            { es: "tomar", en: "Take (téik)" },
            { es: "usar", en: "Use (yús)" },
            { es: "trabajar", en: "Work (uérk)" }
        ]
    },
    {
        name: "Palabras básicas",
        words: [
            { es: "sí", en: "Yes (yés)" },
            { es: "no", en: "No (nóu)" },
            { es: "por favor", en: "Please (plíis)" },
            { es: "gracias", en: "Thanks (zánks)" },
            { es: "hola", en: "Hello (je-lóu)" },
            { es: "adiós", en: "Bye (bái)" },
            { es: "perdón", en: "Sorry (só-ri)" },
            { es: "ok", en: "Ok (óu-kéi)" },
            { es: "bueno", en: "Good (gud)" },
            { es: "malo", en: "Bad (bad)" },
            { es: "grande", en: "Big (big)" },
            { es: "pequeño", en: "Small (smól)" },
            { es: "nuevo", en: "New (niú)" },
            { es: "viejo", en: "Old (óuld)" },
            { es: "fácil", en: "Easy (íi-si)" },
            { es: "difícil", en: "Hard (járd)" },
            { es: "mismo", en: "Same (séim)" },
            { es: "diferente", en: "Different (dí-fe-rent)" }
        ]
    },
    {
        name: "Preposiciones",
        words: [
            { es: "en", en: "In (ín)" },
            { es: "sobre", en: "On (ón)" },
            { es: "en", en: "At (at)" },
            { es: "a", en: "To (tú)" },
            { es: "de", en: "From (from)" },
            { es: "con", en: "With (uíz)" },
            { es: "sin", en: "Without (wi-dáut)" },
            { es: "para", en: "For (for)" },
            { es: "sobre", en: "About (a-báut)" },
            { es: "entre", en: "Between (bi-tuín)" },
            { es: "debajo", en: "Under (án-der)" },
            { es: "encima", en: "Over (óu-ver)" }
        ]
    },
    {
        name: "Sustantivos",
        words: [
            { es: "tiempo", en: "Time (táim)" },
            { es: "día", en: "Day (déi)" },
            { es: "personas", en: "People (pí-pol)" },
            { es: "hombre", en: "Man (man)" },
            { es: "mujer", en: "Woman (wú-man)" },
            { es: "niño", en: "Child (cháild)" },
            { es: "vida", en: "Life (láif)" },
            { es: "mundo", en: "World (uérld)" },
            { es: "dinero", en: "Money (má-ni)" },
            { es: "trabajo", en: "Work (uérk)" },
            { es: "casa", en: "Home (jóum)" },
            { es: "escuela", en: "School (skúul)" },
            { es: "comida", en: "Food (fúud)" },
            { es: "agua", en: "Water (uó-ter)" }
        ]
    },
    {
        name: "Conectores",
        words: [
            { es: "y", en: "And (and)" },
            { es: "o", en: "Or (ór)" },
            { es: "pero", en: "But (bát)" },
            { es: "porque", en: "Because (bi-kós)" },
            { es: "si", en: "If (if)" },
            { es: "así que", en: "So (sóu)" },
            { es: "cuando", en: "When (uén)" },
            { es: "donde", en: "Where (uér)" },
            { es: "qué", en: "What (uát)" },
            { es: "quién", en: "Who (jú)" },
            { es: "cómo", en: "How (jáu)" },
            { es: "por qué", en: "Why (uái)" }
        ]
    },
    {
        name: "Números",
        words: [
            { es: "0", en: "Zero (sí-ro)" },
            { es: "1", en: "One (uan)" },
            { es: "2", en: "Two (tú)" },
            { es: "3", en: "Three (zrí)" },
            { es: "4", en: "Four (fór)" },
            { es: "5", en: "Five (fáiv)" },
            { es: "6", en: "Six (siks)" },
            { es: "7", en: "Seven (sé-ven)" },
            { es: "8", en: "Eight (éit)" },
            { es: "9", en: "Nine (náin)" },
            { es: "10", en: "Ten (ten)" },
            { es: "11", en: "Eleven (i-lé-ven)" },
            { es: "12", en: "Twelve (tuélv)" },
            { es: "13", en: "Thirteen (zér-tiin)" },
            { es: "14", en: "Fourteen (fór-tiin)" },
            { es: "15", en: "Fifteen (fif-tíin)" },
            { es: "16", en: "Sixteen (siks-tíin)" },
            { es: "17", en: "Seventeen (sé-ven-tíin)" },
            { es: "18", en: "Eighteen (éi-tíin)" },
            { es: "19", en: "Nineteen (náin-tíin)" },
            { es: "20", en: "Twenty (tuén-ti)" },
            { es: "30", en: "Thirty (zér-ti)" },
            { es: "40", en: "Forty (fór-ti)" },
            { es: "50", en: "Fifty (fif-ti)" },
            { es: "60", en: "Sixty (siks-ti)" },
            { es: "70", en: "Seventy (sé-ven-ti)" },
            { es: "80", en: "Eighty (éi-ti)" },
            { es: "90", en: "Ninety (náin-ti)" },
            { es: "100", en: "One hundred (uan ján-dred)" }
        ]
    },
    {
        name: "especiales",
        words: [
            { es: "0", en: "Zero (sí-ro)" },
            { es: "100", en: "One hundred (uan ján-dred)" }
        ]
    }
];

if (!localStorage.getItem("diccionario")) {
    localStorage.setItem("diccionario", JSON.stringify(defaultDictionary));
}

let dictionary = JSON.parse(localStorage.getItem("diccionario")) || defaultDictionary;

function guardarEnLocal() {
    localStorage.setItem("diccionario", JSON.stringify(dictionary));
}

// ----------- VARIABLES -----------
let practiceWords = [];
let remainingWords = [];
let currentWord = null;
let editMode = false;

// ----------- MOSTRAR GRUPOS -----------
function renderGroups() {
    const groupsDiv = document.getElementById("groups");
    groupsDiv.innerHTML = "";

    dictionary.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.onclick = () => startPractice(index);

        const title = document.createElement("div");
        title.className = "group-title";
        title.textContent = group.name;
        groupDiv.appendChild(title);

        const wordList = document.createElement("div");
        wordList.className = "word-list";

        group.words.forEach(word => {
            const item = document.createElement("div");
            item.className = "word-item";
            item.textContent = `${word.es} → ${word.en}`;
            wordList.appendChild(item);
        });

        groupDiv.appendChild(wordList);
        groupsDiv.appendChild(groupDiv);
    });
}

// ----------- PRÁCTICA -----------
function startPractice(groupIndex) {
    if (groupIndex === "all") {
        practiceWords = [];
        dictionary.forEach(g => practiceWords.push(...g.words));
    } else {
        practiceWords = [...dictionary[groupIndex].words];
    }

    resetRemainingWords();
    showScreen("practiceScreen");
    nextWord();
}

function resetRemainingWords() {
    remainingWords = [...practiceWords];
    shuffleArray(remainingWords);
}

function nextWord() {
    if (remainingWords.length === 0) resetRemainingWords();

    currentWord = remainingWords.pop();

    document.getElementById("spanishWord").textContent = currentWord.es;
    document.getElementById("userAnswer").value = "";
    document.getElementById("correctAnswer").textContent = "";
}

function showAnswer() {
    document.getElementById("correctAnswer").textContent = currentWord.en;
}

function goBack() {
    showScreen("dictionaryScreen");
    renderGroups();
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// =====================================================
// 🔥 EDITAR
// =====================================================

function goToEdit() {
    showScreen("editScreen");
    loadFolders();
}

// CARGAR CARPETAS
function loadFolders() {
    const select = document.getElementById("folderSelect");
    select.innerHTML = "";

    dictionary.forEach((g, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = g.name;
        select.appendChild(option);
    });

    loadWords();
}

// CAMBIO DE CARPETA
document.addEventListener("change", (e) => {
    if (e.target.id === "folderSelect") {
        loadWords();
    }
});

// MOSTRAR PALABRAS
function loadWords() {
    const index = document.getElementById("folderSelect").value;
    const words = dictionary[index].words;

    const container = document.getElementById("wordList");
    container.innerHTML = "";

    words.forEach((word, i) => {
        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <div class="edit-row">
                <input value="${word.es}" id="es-${i}" ${editMode ? "" : "disabled"}>
                <input value="${word.en}" id="en-${i}" ${editMode ? "" : "disabled"}>
                ${editMode ? `<button onclick="eliminarPalabra(${i})">❌</button>` : ""}
            </div>
        `;

        container.appendChild(div);
    });
}

// ACTIVAR EDICIÓN
function activarEdicion() {
    editMode = true;
    loadWords();
}

// 🔥 ELIMINAR CON CONFIRMACIÓN
function eliminarPalabra(i) {
    const index = document.getElementById("folderSelect").value;

    let confirmar = confirm("¿Seguro que deseas eliminar esta palabra?");

    if (confirmar) {
        dictionary[index].words.splice(i, 1);
        guardarEnLocal();
        loadWords();
    }
}

// AGREGAR PALABRA
function agregarPalabra() {
    const index = document.getElementById("folderSelect").value;

    dictionary[index].words.push({
        es: "",
        en: ""
    });

    editMode = true;
    loadWords();
}

// GUARDAR
function guardarCambios() {
    const index = document.getElementById("folderSelect").value;
    const words = dictionary[index].words;

    words.forEach((word, i) => {
        const esInput = document.getElementById(`es-${i}`);
        const enInput = document.getElementById(`en-${i}`);

        if (esInput && enInput) {
            word.es = esInput.value.trim();
            word.en = enInput.value.trim();
        }
    });

    guardarEnLocal();

    editMode = false;

    alert("Cambios guardados");

    showScreen("dictionaryScreen");
    renderGroups();
}

// ----------- INICIO -----------
window.onload = function () {

    // asegurar datos iniciales
    if (!localStorage.getItem("diccionario")) {
        localStorage.setItem("diccionario", JSON.stringify(defaultDictionary));
    }

    dictionary = JSON.parse(localStorage.getItem("diccionario"));

    renderGroups();

    // 🔥 ACTIVAR SERVICE WORKER
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(() => console.log("Service Worker activo"))
            .catch(err => console.log("Error:", err));
    }
};
