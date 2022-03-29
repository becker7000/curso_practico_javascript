
//Variables que vamos a usar para el cuadrado:
const ladoCuadrado=5;

//Agrupando las salidas de la consola según cada figura.
console.group("---Cuadrado---");
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" unidades lineales.");

//Calculando el perímetro del cuadrado: 
const perimetroCuadrado=ladoCuadrado*4;
console.log("El perímetro del cuadrado mide: "+perimetroCuadrado+" unidades lineales.");

//Calculando el área del cuadrado:
const areaCuadrado=ladoCuadrado**2;
console.log("El área del cuadrado mide: "+areaCuadrado+" unidades cuadradas.");

console.groupEnd(); //Fin del grupo de salidas de consola del cuadrado.


//Variables que vamos a usar para el triángulo:
const ladoTriangulo1=5;
const ladoTriangulo2=5;
const baseTriangulo=6;

//Agrupando las salidas de consola del triángulo.
console.group("---Triángulo---");
console.log("Los lados del triángulo miden: ");
console.log(" Lado 1: "
            +ladoTriangulo1
            +" unidades lineales."
            +"\n Lado 2: "
            +ladoTriangulo2
            +" unidades lineales."
            +"\n Base: "
            +baseTriangulo
            +" unidades lineales."
            );

//Calculando la altura del triángulo con la fórmula de Herón respecto de la base dada.
const s=(ladoTriangulo1+ladoTriangulo2+baseTriangulo)/2;
const alturaTriangulo=(2/baseTriangulo)*(Math.sqrt(s*(s-ladoTriangulo1)*(s-ladoTriangulo2)*(s-baseTriangulo)));
console.log("La altura del triángulo mide: "+alturaTriangulo+" respecto de la báse.");

//Calculando el perímetro del triángulo.
const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;

console.log("El perímetro del triángulo mide: "+perimetroTriangulo+" unidades lineales.");

//Calculando el área del triángulo.
const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("El área del tríangulo mide: "+areaTriangulo+" unidades cuadradas.");

console.groupEnd(); //Fin del grupo de salidas de consola del triángulo.


//Variables que vamos a ocupar para el Círculo.
const radio=4;
const PI=Math.PI;

//Agrupando las salidas de consola del círculo.
console.group("---Círculo---");
console.log("El rádio del círculo mide: "+radio+" unidades lineales.");

//Calculando el diámetro del círculo.
const diametro=radio*2;
console.log("El diámetro del círculo mide: "+diametro+" unidades lineales.");

//Calculando el perímetro del círculo.
const perimetroCirculo=PI*diametro;
console.log("El perímetro del círculo mide: "+perimetroCirculo+" unidades lineales.");

//Calculando el área del círculo.
const areaCirculo=PI*Math.pow(radio,2);
console.log("El área del círculo mide: "+areaCirculo+" unidades cuadradas.");

console.groupEnd(); //Fin del grupo de salidas de consola del círculo.



