document.addEventListener("DOMContentLoaded", () => {
    const nomes = []; // Array para armazenar os nomes dos amigos
    const botaoAdicionar = document.querySelector(".button-add");
    const botaoSortear = document.querySelector(".button-draw");
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Função para adicionar o nome à lista
    botaoAdicionar.addEventListener("click", () => {
        const nome = inputAmigo.value.trim();
        if (nome) {
            nomes.push(nome); // Adiciona o nome ao array
            listaAmigos.innerHTML += `<li>${nome}</li>`; // Exibe o nome na lista
            inputAmigo.value = ''; // Limpa o campo de texto
        } else {
            alert("Por favor, insira um nome válido.");
        }
    });

    // Função para sortear um nome aleatório da lista
    botaoSortear.addEventListener("click", () => {
        if (nomes.length > 0) {
            const sorteado = nomes[Math.floor(Math.random() * nomes.length)]; // Sorteia um nome
            resultado.textContent = `Amigo sorteado: ${sorteado}`; // Exibe o nome sorteado
        } else {
            resultado.textContent = "Adicione alguns amigos antes de sortear.";
        }
    });
});