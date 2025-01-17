let amigos = [];
let lista_amigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

let agregarAmigo = () => {
    let amigo = document.getElementById('amigo').value;
    let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    if (regex.test(amigo)) {
        amigos.push(amigo);
        lista_amigos.innerHTML = amigos.join('<br>');
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }

}

let sortearAmigo = () => {
    let indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = amigos[indice];
    lista_amigos.innerHTML = '';
    amigos = [];
}
