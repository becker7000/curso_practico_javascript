
//Encapusulando el calculo del precio con descuento en una función.
function calcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento=100-descuento;
    const precioConDescuento=precio*(porcentajeConDescuento/100);
    return precioConDescuento;
}

function aplicarDescuento(){
    const precio=parseFloat(document.getElementById('precio').value);
    let descuento=parseFloat(document.getElementById('descuento').value);
    let cupon=parseInt(document.getElementById('cupon').value);
    switch(cupon){
        case 1: 
            descuento+=0;
            cupon="Ninguno";
            break;
        case 2: 
            descuento+=5;
            cupon="bckr05";
            break;
        case 3: 
            descuento+=10;
            cupon="bckr10";
            break;
        case 4:
            descuento+=12;
            cupon="bckr12";
            break;
    }
    const precioFinal=calcularPrecioConDescuento(precio,descuento);
    const mostrar=document.getElementById('mostrador');
    mostrar.innerText="El precio ya con el descuento aplicado es: $"+precioFinal+" | Cupón: "+cupon;
}

