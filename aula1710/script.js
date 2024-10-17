const form = document.getElementById('participanteForm');
const resultado = document.getElementById('resultado');

const participantes = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const categoria = document.getElementById('categoria').value;

    // Verifica se a palavra chave "ACABOU" foi inserida
    if (nome.toUpperCase() === "ACABOU") {
        listarParticipantes();
        return;
    }

    // Envia os dados do participante para o Formspree
    const data = {
        nome: nome,
        cpf: cpf,
        email: email,
        categoria: categoria
    };

    fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            participantes.push(data);
            alert("Dados enviados com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar dados. Tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

function listarParticipantes() {
    resultado.innerHTML = <h2>Lista de Participantes:</h2>;
    participantes.forEach(participante => {
        let categoriaNome = '';

        switch (participante.categoria) {
            case "1":
                categoriaNome = 'Ouvinte';
                break;
            case "2":
                categoriaNome = 'Palestrante';
                break;
            case "3":
                categoriaNome = 'Organizador';
                break;
        }

        resultado.innerHTML += <p>${categoriaNome}: ${participante.nome}</p>;
    });

    resultado.innerHTML += <p>Total de Participantes: ${participantes.length}</p>;
}