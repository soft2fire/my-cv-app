if (localStorage.getItem('words')) {
    var myWords = JSON.parse(localStorage.getItem("words"));
} else {
    var myWords = [{
        "words": "hello",
        "synonyms": "salam",
        "learned": true
    }];
}

displayWords();
function Word(words, synonyms, learned) {
    
    this.words = words;
    this.synonyms = synonyms;
    this.learned = learned;

    function displayWords() {
        var word = "<tr><td>" + this.words + "</td></tr>";
    }
}

function addWordToLibrary(params) {
    var words = document.getElementById("words");
    var synonyms = document.getElementById("synonyms");
    var learned = document.getElementById("learned");

    if (words.value && synonyms.value) {
        var ele1 = new Word(words.value, synonyms.value, learned.checked);
        myWords.push(ele1);

        displayWords();
        saveWords();

        words.value = "";
        synonyms.value = "";
        learned.checked = false;

        if (document.getElementById("emptyFieldAlert")) {
            document.getElementById("emptyFieldAlert").remove()
        }

    } else {
        if (!document.getElementById("emptyFieldAlert")) {
            var warning = document.createElement("div");
            var warningText = "Please complete all fields";
            warning.textContent = (warningText);
            warning.classList.add("alert");
            warning.setAttribute("id", "emptyFieldAlert");
            var buttonParent = document.getElementById("addWord").parentNode;
            var button = document.getElementById("addWord");
            buttonParent.insertBefore(warning, button);
        }
    }

}

function displayWords() {
    var tableOutput = document.getElementById("tableoutput");
    tableOutput.innerHTML = "";

    for (var i = 0; i < myWords.length; i++) {

        const newTr = document.createElement("tr");
        newTr.innerHTML = "<td>" + myWords[i]['words'] + "</td>";
        newTr.innerHTML += "<td>" + myWords[i]['synonyms'] + "</td>";

        if (myWords[i]["learned"] === true) {
            console.log("TRUE");
            newTr.innerHTML += `<td><input type="checkbox" name="readCheckbox" value="${i}" checked></td>` + "</input>";
        } else {
            console.log("FALSE");
            newTr.innerHTML += `<td><input type="checkbox" name="readCheckbox" value="${i}"></td>` + "</input>";
        }
        newTr.innerHTML += `<td><button onclick="deleteWord(${i})" class="deleteBook">Remove</button></td>`;
        tableOutput.appendChild(newTr);

    }
    var checkboxes = document.getElementsByName("readCheckbox")

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("change", function () {
            if (myWords[this.value]['learned'] === true) {
                myWords[this.value]['learned'] = false;
                saveWords();
            } else {
                myWords[this.value]['learned'] = true;
                saveWords();
            }

            console.log(myWords[this.value]['learned']);
        })
    }
}

function saveWords() {
    localStorage.setItem("words", JSON.stringify(myWords));
}

function deleteWord(id) {
    this.id = id
    myWords.splice(id, 1);
    saveWords();
    displayWords();
}