
function calcularPrecioConDescuento (){
   
   const precio     = document.getElementById('idPrecio').value;
   const descuento  = document.getElementById('idDescuento').value;

    precioCon = (precio * (100-descuento))/100

    const parrafo = document.getElementById('parrafoPrecio');
    parrafo.innerText = 'El precio con descuento es: '+ precioCon;
}