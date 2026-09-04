
let result = document.querySelector("p")
let inputName = document.querySelector("input")
let buttonSearch = document.querySelector(".search")
let buttonClear = document.querySelector(".clear")

let contacts = [];

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSmBNTdbf7pZgv7dlcOYISLkSJsMAu5B3Dgs4WrkM65KfErlCR1d_XXuZM3F7ErSMWoSh0331EX9m2c/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(data => {

        const linhas = data.split("\n");
        for (let i = 1; i < linhas.length; i++) {
            const dados = linhas[i].split(",");
            const contato = {
                name: dados[0],
                number: dados[1]
            };
            contacts.push(contato);
        }
    });

buttonSearch.addEventListener("click", function() {
    const name = inputName.value;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            result.innerHTML = `
            Nome: ${contacts[i].name} <br>
            Número: ${contacts[i].number}
            `
        }
    }
})

buttonSearch.addEventListener("click", function () {

    const name = inputName.value.toLowerCase();
    let encontrado = false;

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === name) {

            result.innerHTML = `
                Contato encontrado!<br>
                Nome: ${contacts[i].name}<br>
                Número: ${contacts[i].number}
            `;

            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        result.innerHTML = "Contato não encontrado";
    }
});

buttonClear.addEventListener("click", function () {
    inputName.value = "";
    result.innerHTML = "";
});