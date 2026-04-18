// ----------- DATOS (LOCALSTORAGE) -----------

const defaultDictionary = [
    {
        name: "Pronombres",
        words: [
            { es: "yo", en: "I (ái)" },
            { es: "tú / usted", en: "You (yú)" },
            { es: "su (de él)", en: "His (jís)" },
            { es: "su (de ella)", en: "Her (jér)" }
        ]
    },
    {
        name: "Verbos",
        words: [
            { es: "ser / estar", en: "Be (bí)" },
            { es: "tener", en: "Have (jav)" },
            { es: "preguntar", en: "Ask (ask)" },
            { es: "necesitar", en: "Need (níid)" },
            { es: "sentir", en: "Feel (fíil)" }
        ]
    },
    {
        name: "Números",
        words: [
            { es: "0", en: "Zero (sí-ro)" },
            { es: "1", en: "One (uan)" }
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