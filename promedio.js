
function calcularPromedio(lista){

    // let suma=0;

    // for(let i=0;i<lista.length;i++)
    //     suma+=lista[i];
    


    const suma = lista.reduce(
        function(acumulado=0,nuevo){
            return acumulado+nuevo;
        }
    );

    const promedio = suma/lista.length;

    return promedio;

}