
function calcularPrecioConDescuento (){
   
   const precio     = document.getElementById('idPrecio').value;
   const descuento  = document.getElementById('inputCoupon').value;

    precioCon = (precio * (100-descuento))/100

    const parrafo = document.getElementById('parrafoPrecio');
    parrafo.innerText = 'El precio con descuento es: '+ precioCon;
}

const coupons = [
    'JuanDC_es_Batman',
    'Pero_no_le_digas_a_nadie',
    'es_un_secreto',
];