const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    // numero / 2
    //(numero % 2) true false
    //%
    /* if (lista.length % 2){
        return false;
    } else {
        return true;
    } */

    return !(lista.length % 2);
} 

PlatziMath.esImpar = function esImpar(lista) {
    return !lista.length % 2;
} 

PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]){
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    const moda = listaMaxNumber[0];

    //console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
    //console.log('la moda es: ' + listaMaxNumber[0]);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana (listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        
        // lista[indexMitad1ListaPar]
        const listaMitades = [lista[indexMitad1ListaPar], lista [indexMitad2ListaPar]];
        calcularPromedio(listaMitades);
    } else {
        const indexMitadListaImpar = Math.floor (lista.length / 2); 
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

// [1, 2, 3, 4]
PlatziMath.calcularPromedio = function calcularPromedio (lista) {


//sumar todos los elementos del array / cantidad de elementos   

/* let sumaLista = 0;
for (let i = 0; i < lista.legth; i++) {
    sumaLista = sumaLista + lista[i];
} */

function sumarTodosElementos (valorAcomulado, nuevoValor) {
    return valorAcomulado + nuevoValor;
}

const sumaLista  = lista.reduce(sumarTodosElementos);
const promedio = sumaLista / lista.length;
console.log(promedio);
return promedio;


    //lista.length
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcomulado, nuevoValor){
       /*  if (valorAcomulado > nuevoValor) {
            return 1;
        } else if (valorAcomulado == nuevoValor) { 
            return 0;
        } else if (valorAcomulado < nuevoValor){
            return -1;
        } */

        return valorAcomulado - nuevoValor; 
        //return nuevoValor - valorAcomulado;
        //return 5 - 10 -> -5;
        //return 5 - 5 -> 0;
        //return 10 - 5 -> 5;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    //const lista = listaDesordenada.sort((a,b) => a-b);

    return lista;
}
// [[0,1], [0,1], [0,1]]

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcomulado, nuevoValor){
        return valorAcomulado[1] - nuevoValor[1]; 
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}
/* function ordenarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcomulado, nuevoValor){
        return valorAcomulado[i] - nuevoValor[i]; 
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
} */






/* export function solution(obj) {
    return Object.entries(obj).map(value => ({ id: value[0], name: value[1]}));
    } */
/* Vista
Pruebas
En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

Input

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

solution(obj);

Output

[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra',
  },
] */