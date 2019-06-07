function loadData() {
    const table = document.getElementById('tbody');
    table.innerHTML = '';

    fetch('/api/example')
        .then((resp) => resp.json())
        .then(function (data) {
            let i = 1;
            data.map(val => {
                const newRow = document.createElement("tr");
                newRow.innerHTML = pullExampleRow(i, val);
                table.appendChild(newRow);
                i++;
            })
        })
}

function pullExampleRow(i, val) {
    const word = val.word.name;
    const example = val.text;
    const exampleDate = val.createdAt;
    const wordDate = val.word.createdAt;

    return `<th scope="row">${i}</th>
    <td>${word}</td>
    <td>${example}</td>
    <td><a href="https://translate.google.ru/#view=home&op=translate&sl=en&tl=ru&text=${word}" class="badge badge-primary">${word}</a></td>
    <td>${exampleDate}</td>
    <td>${wordDate}</td>`
}

loadData();
