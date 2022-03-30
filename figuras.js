
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
function alturaTriangulo(lado1,lado2,base){
    const s=(lado1+lado2+base)/2;
    const altura=(2/base)*(Math.sqrt(s*(s-lado1)*(s-lado2)*(s-base)));
    return altura;
}

//Encapsulando la formula del perímetro del triángulo en una función.
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

//Encapsulando la formula del área del triángulo en una función.
function areaTriangulo(lado1,lado2,base){
    return base*((alturaTriangulo(lado1,lado2,base))/2);
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

//Conectando JS con HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const lado=parseFloat(document.getElementById('cuadrado').value);
    const mostrar=document.getElementById('mostrador1');
    mostrar.innerText="El perímetro del cuadrado mide: "+perimetroCuadrado(lado);
}

function calcularAreaCuadrado(){
    const lado=parseFloat(document.getElementById('cuadrado').value);
    const mostrar=document.getElementById('mostrador1');
    mostrar.innerText="El área del cuadrado mide: "+areaCuadrado(lado);
}

//Triángulo
function calcularPerimetroTriangulo(){
    const lado1=parseFloat(document.getElementById('lado1').value);
    const lado2=parseFloat(document.getElementById('lado2').value);
    const base=parseFloat(document.getElementById('base').value);
    const mostrar=document.getElementById('mostrador2');
    mostrar.innerText="El perímetro del triángulo mide: "+perimetroTriangulo(lado1,lado2,base);
}

function calcularAreaTriangulo(){
    const lado1=parseFloat(document.getElementById('lado1').value);
    const lado2=parseFloat(document.getElementById('lado2').value);
    const base=parseFloat(document.getElementById('base').value);
    const mostrar=document.getElementById('mostrador2');
    mostrar.innerText="El área del triángulo mide: "+areaTriangulo(lado1,lado2,base);
}

function calcularAlturaTriangulo(){
    const lado1=parseFloat(document.getElementById('lado1').value);
    const lado2=parseFloat(document.getElementById('lado2').value);
    const base=parseFloat(document.getElementById('base').value);
    const mostrar=document.getElementById('mostrador2');
    mostrar.innerText="La altura del triángulo respecto de la base mide: "+alturaTriangulo(lado1,lado2,base);
}

//Círculo
function calcularPerimetroCirculo(){
    const radio=parseFloat(document.getElementById('radio').value);
    const mostrar=document.getElementById('mostrador3');
    mostrar.innerText="El perímetro del círculo mide: "+perimetroCirculo(radio);
}

function calcularAreaCirculo(){
    const radio=parseFloat(document.getElementById('radio').value);
    const mostrar=document.getElementById('mostrador3');
    mostrar.innerText="El área del círculo mide: "+areaCirculo(radio);
}