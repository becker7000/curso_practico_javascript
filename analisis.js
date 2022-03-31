
const salarios = colombia.map(
    function (empleado){
        return empleado.salary;
        //Esto me va devolviendo un arreglo de una dimensión.
    }
);

const salariosOrdenados = salarios.sort(
    function (salarioA,salarioB){
        return salarioA-salarioB;
    }
);

function calcularMedianaSalarios(lista){
    
    const mitad=parseInt(lista.length/2);
    let mediana;

    if(lista.length%2==0)
        mediana = (lista[mitad-1]+lista[mitad])/2;
    else
        mediana = lista[mitad];

    return mediana;

}

const medianaGeneral=calcularMedianaSalarios(salariosOrdenados);

//Mediana del top 10%

//Inicia el corte en: 
const spliceStart = parseInt((salariosOrdenados.length*90)/100);
const spliceCount = salariosOrdenados.length-spliceStart;
const salariosTop10=salariosOrdenados.splice(spliceStart,spliceCount);
const medianaTop10=calcularMedianaSalarios(salariosTop10);
