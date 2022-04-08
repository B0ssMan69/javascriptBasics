/**js ejercicio1**/

function algoritmo(){
    let antiguedad, salario, utilidades;
    antiguedad = parseFloat (document.formulario1.antiguedad.value);
    salario = parseFloat (document.formulario1.salario.value);
    utilidades=0;
    if(antiguedad<1)
        utilidades=0.05*salario;
    if(antiguedad>=1&&antiguedad<2)
        utilidades=0.07*salario;
    if(antiguedad>=2&&antiguedad<5)
        utilidades=0.1*salario;
    if(antiguedad>=5&&antiguedad<10)
        utilidades=0.15*salario;
    if(antiguedad>=10)
        utilidades=0.2*salario;
    document.formulario1.utilidades.value = utilidades;
}

/**js ejercicio2**/

function liquidar(){
    let horas=parseInt(document.getElementById('numhoras').value);
    let tarifa=parseInt(document.getElementById('tarifah').value);
    document.getElementById('pagar').innerHTML=horas*tarifa;
}

/**js ejercicio3**/

function promnotas(){
    let n1=parseFloat(document.getElementById('nota1').value);
    let n2=parseFloat(document.getElementById('nota2').value);
    let n3=parseFloat(document.getElementById('nota3').value);
    document.getElementById('promedio').innerHTML=(n1+n2+n3)/3;
}

/**js ejercicio4**/
function calcular(){
let diametro=parseInt(document.getElementById('diameter').value);
let altura=parseInt(document.getElementById('height').value);
let npi=3.1416
let radioc=(diametro/2);
let base=(radioc*radioc)*npi;
document.getElementById('calculate').innerHTML=base*altura;
}
  
/**js ejercicio5**/

function promprecios(){
    let precio1=parseInt(document.getElementById("price1").value);
    let precio2=parseInt(document.getElementById("price2").value);
    let precio3=parseInt(document.getElementById("price3").value);
    document.getElementById("pricepromedio").innerHTML=(precio1+precio2+precio3)/3;
}

/**js ejercicio6**/

function convierte(){
    let kmh1=parseInt(document.getElementById("kmh").value);
    document.getElementById("ms").innerHTML=kmh1/3.6
}

/**js ejercicio7**/

function gana(){
    let inversion1=parseInt(document.getElementById("inversion").value)
    document.getElementById("win").innerHTML=inversion1*0.02;
}
    
/**js ejercicio8**/

function contar(){
    let entrada=parseInt(document.getElementById("in").value);
    let cifras=parseInt(entrada.length);
    document.getElementById("salida").innerHTML=cifras;
}

/**js ejercicio9**/

function medir(){
    let altura=parseInt(document.getElementById("alture").value);
    if (altura <150) {
        document.getElementById("resultado").innerHTML= "Persona de baja estatura";
        
    } else {
        if(altura >150 && altura<=170){
        document.getElementById("resultado").innerHTML="Persona de altura media";
        }else{
            if(altura>170){
                document.getElementById("resultado").innerHTML="Persona alta"
            }
        }
    }
}

/**js ejercicio10**/

function validar(){
    let nombre=document.getElementById("name").value;
    let edad=parseInt(document.getElementById("age").value);
    if (edad >=18) {
        document.getElementById("respuesta").innerHTML=nombre + " Puede votar"
    } else {
         document.getElementById("respuesta").innerHTML= "No puede votar"        
    }
}

/**js ejercicio11**/

function valida(){
    let numero=parseInt(document.getElementById("num").value);
    if (numero<0) {
        document.getElementById("respuesta11").innerHTML=numero+"El número es negativo";
    } else {
        document.getElementById("respuesta11").innerHTML="su número es Positivo";
    }
}

/**js ejercicio12**/

function revisa(){
let numero1=parseInt(document.getElementById("number1").value);
let numero2=parseInt(document.getElementById("number2").value);
if (numero1>numero2) {
    document.getElementById("menor").innerHTML=numero2+" es el número menor."
} else {
    document.getElementById("menor").innerHTML=numero1+" es el número menor."
}
}

/**js ejercicio13**/

function funcion13(){
    let numero13=parseInt(document.getElementById("number13").value);
    if (numero13<10) {
        document.getElementById("salida13").innerHTML=numero13/4
    } else {
        document.getElementById("salida13").innerHTML=numero13*3
    }
}

/**js ejercicio14**/

function funcion14(){
    let numero141=parseInt(document.getElementById("number141").value);
    let numero142=parseInt(document.getElementById("number142").value);
    if (numero142<1) {
        document.getElementById("salida14").innerHTML="No se permita la división por cero, intente con otro número"
        
    } else {
        numero141/numero142;
    }
}

/**js ejercicio8**/

