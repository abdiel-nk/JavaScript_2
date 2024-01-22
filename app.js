let secretNumber = 0;
let contador = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === secretNumber){
        asignarTextoElemento('p',` Acertaste el número en ${contador}${(contador ===  1) ? 'vez' : ' veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > secretNumber){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 a 10');
    secretNumber = generarNumeroSecreto();
    console.log(secretNumber);

    contador = 1;
}


function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
//First Challegue
/* function firstChallengue(){
    let namecity = prompt("Escribe el nombre de una ciudad de tu país");
    alert(`Estuve en ${namecity} y me acorde del ti`);

    let n1 = parseInt(prompt("Ingresa el número 1"));
    let n2 = parseInt(prompt("Ingresa el número 2"));

    let result = n1 + n2;
    alert(`El resultado es: ${result}`);
} */
//Second Challegue
//function test(){
    /* let nombre= 'jorge';
    console.log("Hola," + nombre);
    let n3 = parseInt(prompt("ingresa un número"));
    let doubleNumber= n3*2;
    console.log(doubleNumber); */

    //calcular promedio
    /* let cantidadNumero = prompt("ingrese la cantidad de números");
    let suma = 0;
    let intento = cantidadNumero;
    while(intento > 0 ){
        let numeros = parseInt(prompt("Ingrese las notas"));
        suma+=numeros ;
        intento--;
    }

    let promedio = suma/cantidadNumero;

    console.log("promedio " + promedio); */

    //high number
   /*  let intentonumeros1 = parseInt(prompt("ingrese n1"));
    let intentonumeros2 = parseInt(prompt("ingrese n2 "));
    if(intentonumeros1 == intentonumeros2){
        console.log(intentonumeros1 + " es igual " + intentonumeros2);
    }else if(intentonumeros1 > intentonumeros2){
        console.log(intentonumeros1 + " mayor a " + intentonumeros2);
    }else{
        console.log(intentonumeros1 + " menor a " + intentonumeros2);
    } */
//}

/* function IMC(){
    let peso = prompt('Ingrese su peso');
    let estatura = prompt('Ingrese su estatura');
    let imc = 0;
    imc= peso/(estatura*2);
    console.log(imc);

    return imc;

} */
/* function factorial(){
    let numerof= parseInt(prompt('Ingrese el número factorial')); */
   /*  let resultado= calcular(numerof);
    console.log("Este es el resultado: " + resultado); */
    //factorial con for
/*     let base = numerof;
    for (let i=1; i < base; i++) {
        let num= numerof * i;
        numerof = num;
        console.log(numerof);
    }
}

function calcular(numerof){
    if(numerof === 0) return 1;
    return  numerof*calcular(numerof-1);
} */

//dolares to soles
/* function dolaresToSoles(){
    let valorSoles = prompt("ingreso se monto en soles");
    let resultadofina = calculardolarestoSoles(valorSoles);
    console.log(resultadofina);
}
function calculardolarestoSoles(valorSoles){
    return  valorSoles * 3.16;
} */

/* function dolaresToSoles2(dolares){
    var cotizacion = 3.14;
    var soles = dolares * cotizacion;
    return soles; 
}
let  valorEnDolares= 100;
let valorEnSoles = dolaresToSoles2(valorEnDolares);
console.log(`${valorEnDolares} es S/${valorEnSoles} `);
 */
//calcular area rectangular
/* function area(altura, anchura){
   
    let areatotal= altura * anchura;
    let perimetro = 2*(altura  + anchura);
    console.log(`El area es ${areatotal}`);
    console.log(`El area es ${perimetro}`);


}
let altura = 100;
let anchura= 20;
area(altura, anchura);
 */
//calcular area circular
/* function calAreaYPerimetroCircular(radio){
    let pi= 3.14;
    let area = pi*(radio)^2 ;
    let perimetro = 2 * pi * radio;
    console.log(`El area es: ${area}`);
    console.log(`El perimetro es: ${perimetro}`);
}

let radio=3;
calAreaYPerimetroCircular(radio);

 */

//table de multiplicar
/* function calculartabla(numeroT){
    contador=1;
    while(contador<=12){
        resultado = numeroT*contador;
        console.log(`${numeroT} * ${contador} = ${resultado}`);
        contador++;
        console.log(numeroT + "x" + contador + "= " +resultado);

    }
    console.log("--------------");
    for (var i = 1; i <= 12; i++) {
        var resultado = numeroT * i;
        console.log(numeroT + " x " + i + " = " + resultado);
      }
}
let numeroT= 2;
calculartabla(numeroT); */