arrayAmigos = [];

function adicionarAmigo() {
    let addAmigo = document.querySelector('input').value;

    if (addAmigo.trim() === '' || /[^a-zA-Z\s]/.test(addAmigo)) {
        alert('Por favor, insira um nome válido contendo apenas letras.');
        return;
    }

    arrayAmigos.push(addAmigo);
    console.log(arrayAmigos);
    document.querySelector('input').value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    arrayAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    arrayAmigos = [];
    atualizarListaAmigos();
}



