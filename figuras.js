
//codigo del cuadrado
console.group('Cuadrados');
//const ladoCuadrado = 5;
//console.log('Los lados del cuadrado miden '+ ladoCuadrado);

function perimetroCuadrado (lado)
{
    return lado*4;   
}

//const areaCuadrada = ladoCuadrado*ladoCuadrado;
//console.log('El area del cuadrado es:'+areaCuadrada);
function areaCuadrado (lado)
{
    return lado*lado;   
}

console.groupEnd();
//codigo del triangulo

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log('Los lados de los triangulos miden: '
+ ladoTriangulo1 
+ ' cm '
+ ladoTriangulo2
+ ' cm '
+ ladoTriangulo3
+ ' cm '
);

const alturaTriangulo =5.5;
console.log('La altura del triangulo es: '+alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
console.log('El perimetro del triangulo es: '+perimetroTriangulo);

const areaTriangulo = (ladoTriangulo3* alturaTriangulo)/2;
console.log('El area del Triangulo es :'+areaTriangulo);

console.groupEnd();

//codigo del circulo
console.group('Circulos');
//radio
const radioCirculo = 4;
console.log('El radio del circulo es: '+ radioCirculo);
//diametro
const diametroCirculo = radioCirculo*2;
console.log('El diametro del Circulo es : '+ diametroCirculo);
//PI
const pI = Math.PI;
console.log('El pi es: '+ pI);
//circunferencia
const perimetroCirculo = diametroCirculo *pI;
console.log('EL perimetro del Circulo es: '+ perimetroCirculo);
//Area
const areaCirculo = (radioCirculo*radioCirculo)*pI;
console.log('El area del Circulo es: '+ areaCirculo);

console.groupEnd();

//Aqui interactuamos con el HTML
function CalcPerimeCuadrado (){
    //const value = $('#inputCuadrado').val();
    const value = document.getElementById ('inputCuadrado').value;
    //const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
