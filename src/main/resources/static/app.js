const examplesList = document.getElementById("examplesList");
document.getElementById('addBtn').addEventListener("click", sendNewWords);
document.getElementById('addExampleBtn').addEventListener("click", addExample);

function sendNewWords() {
    const newWords = document.getElementById("newWordsTextarea");
    fetch('/api/word/create-word-list', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({words: newWords.value})
    })
        .then(() => {
            loadData();
            newWords.value = '';
        })
        .catch(err => console.log(err))
}

function preparePractice(wordId, word) {
    document.getElementById("exampleWordId").value = wordId;
    document.getElementById("practiceTheWordLabel").innerText = 'Your own examples of the word \"' + word + '\"';
    examplesList.innerHTML = '';
    fetch('/api/word/' + wordId + '/examples')
        .then((response) => response.json())
        .then(function (data) {
            data.map(val => {
                const newEl = document.createElement("li");
                newEl.className ="list-group-item";
                newEl.innerText = val.text;
                examplesList.appendChild(newEl);
            })
        })
}

function addExample() {
    const wordId = document.getElementById("exampleWordId").value;
    const exampleTextarea = document.getElementById("exampleTextarea");
    const exampleText = exampleTextarea.value;
    fetch('/api/word/example', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({wordId: wordId, text: exampleText})
    })
        .then(() => {
            const newEl = document.createElement("li");
            newEl.className ="list-group-item";
            newEl.innerText = exampleText;
            examplesList.appendChild(newEl);
            exampleTextarea.value = '';
        })
        .catch(err => console.log(err))
}

function loadData() {
    const table = document.getElementById('tbody');
    table.innerHTML = '';

    fetch('/api/word')
        .then((resp) => resp.json())
        .then(function (data) {
            let i = 1;
            data.map(val => {
                const word = val.name;
                if (word.length > 0) {
                    const newRow = document.createElement("tr");
                    newRow.innerHTML = pullWordRow(i, word, val.id);
                    table.appendChild(newRow);
                    i++;
                }
            })
        })
}

function pullWordRow(i, word, id) {
    return `<th scope="row">${i}</th>
    <td>${word}</td>
    <td class="d-lg-none">${id}</td>
    <td><a href="https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text=${word}" class="badge badge-primary">${word}</a></td>
    <td><a href="https://dictionary.cambridge.org/dictionary/english/${word}" class="badge badge-secondary">${word}</a></td>
    <td><a href="https://www.urbandictionary.com/define.php?term=${word}" class="badge badge-info">${word}</a></td>
    <td><a href="https://www.dictionary.com/browse/${word}" class="badge badge-light">${word}</a></td>
    <td><a href="https://youglish.com/search/${word}/us" class="badge badge-danger">${word}</a></td>
    <td><button onclick="return preparePractice('${id}', '${word}')" id="practiceBtn" type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#practiceTheWord">Practice</button></td>`
}

loadData();
