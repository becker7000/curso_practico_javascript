
//Encapsulando la formula del perímetro del cuadrado en una función: 
function perimetroCuadrado(lado){
    return lado*4;
}

//Encapsulando la fórmula del área del cuadrado en una función:
function areaCuadrado(lado){
    return lado**2;
}

//Encapsulando la formula general de Héron para obtener la altura 
// de un triángulo a tráves de sus lados.
function alturaTriangulo(lado1, lado2,base){
    const s=(lado1+lado2+base)/2;
    const altura = (2/base)*(Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base)));
    return altura;
}

//Encapsulando la formula del perímetro del triángulo en una función.
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

//Encapsulando la formula del área del triángulo en una función.
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

//Encapsulando la formula del diámetro del círculo en una función.
function diametroCirculo(radio){
    return radio*2;
}

//Calculando el perímetro del círculo.
function perimetroCirculo(radio){
    return Math.PI*diametroCirculo(radio);
}

//Calculando el área del círculo.
function areaCirculo(radio){
    return Math.PI*Math.pow(radio,2);
}