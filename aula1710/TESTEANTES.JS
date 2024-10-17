const participantes = [];

document.getElementById('registroForm').addEventListener('submit', function 
    (event)
{
    Event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    if (nome && cpf) {
        participantes.push({ nome, cpf });
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        alert('Participantes registrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('mostrarLista').addEventListener('click', function (){
    const lista = document.getElementById('listaParticipantes');
    lista.innerHTML = '';
    participantes.forEach(participantes => {
        const li = document.createElement('li');
        li.textContent = 'nome: ${participante.nome}, CPF: ${participantes.cpf}';
        lista.appendChild(li);    
    });
});