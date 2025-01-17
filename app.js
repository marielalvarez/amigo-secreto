let amigos = [];
let lista_amigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

let agregarAmigo = () => {
    amigos.push(document.getElementById('amigo').value);
    lista_amigos.innerHTML = amigos.join('<br>');
}

let sortearAmigo = () => {
    let indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = amigos[indice];
    lista_amigos.innerHTML = '';
    amigos = [];
}
