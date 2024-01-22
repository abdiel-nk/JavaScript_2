function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
function intentoUsuario(){
    alert("El botón funciona");
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 a 10');


//First Challegue
/* function firstChallengue(){
    let namecity = prompt("Escribe el nombre de una ciudad de tu país");
    alert(`Estuve en ${namecity} y me acorde del ti`);

    let n1 = parseInt(prompt("Ingresa el número 1"));
    let n2 = parseInt(prompt("Ingresa el número 2"));

    let result = n1 + n2;
    alert(`El resultado es: ${result}`);
} */