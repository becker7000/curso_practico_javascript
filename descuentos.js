
//Encapusulando el calculo del precio con descuento en una función.
function calcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento=100-descuento;
    const precioConDescuento=precio*(porcentajeConDescuento/100);
    return precioConDescuento;
}

function aplicarDescuento(){
    const precio=parseFloat(document.getElementById('precio').value);
    const descuento=parseFloat(document.getElementById('descuento').value);
    const precioFinal=calcularPrecioConDescuento(precio,descuento);
    const mostrar=document.getElementById('mostrador');
    mostrar.innerText="El precio ya con el descuento aplicado es: $"+precioFinal;
}

