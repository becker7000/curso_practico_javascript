
const lista=[
    3,
    2,
    3,
    4,
    5,
    1,
    5,
    2,
    4,
    3,
    2,
    6,
    2,
    2,
    2,
    2,
    1
];

function ordenar(lista){
    lista.sort();
}

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

console.log("La moda es: "+contador_array[contador_array.length-1][0]);
console.log("Aparece "+contador_array[contador_array.length-1][1]+" veces");
