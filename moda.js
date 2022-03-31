
function calcularModa(lista){

    const contador={};

    lista.map(
        function (elemento){
            if(contador[elemento]){
                contador[elemento]+=1;
            }else{
                contador[elemento]=1;
            }
        }
    );

    const contador_array=Object.entries(contador).sort(
        function(acumulado,nuevo){
            return acumulado[1]-nuevo[1];
        }
    );

    let moda = "La moda es: "+contador_array[contador_array.length-1][0];
    moda+=" | Aparece "+contador_array[contador_array.length-1][1]+" veces";

    return moda;

}

