
function ordenar(lista){
    return lista.sort();
}

function calcularMediana(listaEntrada){

    const lista = ordenar(listaEntrada);

    const mitad=parseInt(lista.length/2);
    let mediana;

    if(lista.length%2==0)
        mediana = (lista[mitad-1]+lista[mitad])/2;
    else
     mediana = lista[mitad];

    return "La mediana es: "+mediana;

}
