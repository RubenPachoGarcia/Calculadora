let resultado;

function calcular(){

    let n1=Number(document.getElementById('n1').value);
    let n2=Number(document.getElementById('n2').value);
    let operador=document.getElementById('operador').value;

    switch(operador){

        case '+':
            resultado=n1+n2;
            break;
        case '-':
            resultado=n1-n2;
            break;
        case 'x':
            resultado=n1*n2;
            break;
        case '/':
            resultado=n1/n2;
            break;
        default:
            document.write("La opcion seleccionada no existe");
            break;
    }
}

function resultado2(){

    let resultadoOperacion=document.getElementById('resultado');
    resultadoOperacion.textContent=`Resultado: ${resultado}`;
}