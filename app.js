let add = prompt("ingrese titulo");
let titulo = document.querySelector('h1');
titulo.innerHTML = add;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Hora del desafio';

function intentoUsuario(){
    let namecity = prompt("Escribe el nombre de una ciudad de tu país");
    alert(`Estuve en ${namecity} y me acorde del ti`);

    let n1 = parseInt(prompt("Ingresa el número 1"));
    let n2 = parseInt(prompt("Ingresa el número 2"));

    let result = n1 + n2;
    alert(`El resultado es: ${result}`);
}