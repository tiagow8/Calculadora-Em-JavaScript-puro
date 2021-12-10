// calculadora em javascript
function calculadora () {
  // definindo as operações e pegando valor de entrada do usuário
    // usamos "\n" para fazer uma quebra de linha
  const operacao = prompt('escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciaçaõ (**)');

// verificando se a operação é válida
  if (!operacao || operacao >= 7) {
    alert('erro - operação inválida! ');
    calculadora();
  }else {

    // definindo variáveis
        // todas as entradas devem ser do tipo number
    let n1 = Number(prompt('insira o primeiro valor:'));
  let n2 = Number(prompt('Insira o segundo valor:'));
  let resultado;

// verificando se as variáveis são válidas
  if(!n1 || !n2) {
    alert('Erro - parametros inválidos!')
    calculadora();
  } else {

    // definindo as funções
    function soma () {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
  }
  function subtracao () {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
  }
  function multiplicacao () {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoreal () {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaointeira () {
    resultado = n1 % n2;
    alert(`o resto da divisao entre ${n1} % ${n2} = ${resultado}`)
    novaOperacao();
  }
  function potenciacao () {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
    novaOperacao();
  }

  function novaOperacao (){
    let opcao = prompt('Deseja fazer outra operacao?\n 1 - sim \n 2 - não');
    if (opcao == 1) {
      calculadora();
    }else if (opcao == 2){
      alert('até mais!')
    }else{
      alert('digite uma opção válida!')
      novaOperacao();
    }
  }
  }

  function soma () {
    resultado = n1 + n2;

    // mostrando o resultado usando template strings
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
  }
  function subtracao () {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
  }
  function multiplicacao () {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoreal () {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaointeira () {
    resultado = n1 % n2;
    alert(`o resto da divisao entre ${n1} % ${n2} = ${resultado}`)
    novaOperacao();
  }
  function potenciacao () {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
    novaOperacao();
  }

  function novaOperacao (){
    let opcao = prompt('Deseja fazer outra operacao?\n 1 - sim \n 2 - não');
    if (opcao == 1) {
      calculadora();
    }else if (opcao == 2){
      alert('até mais!')
    }else{
      alert('digite uma opção válida!')
      novaOperacao();
    }
  }


// escolhendo operação
    // usand if && else
  if(operacao == 1) {
  soma();
 }else if(operacao == 2) {
  subtracao();
 }else if (operacao == 3) {
  multiplicacao();
 }else if (operacao == 4) {
  divisaoreal();
 }else if (operacao ==5) {
  divisaointeira();
 }else if (operacao ==6) {
  potenciacao();
 }
}

  let n1 = Number(prompt('insira o primeiro valor:'));
  let n2 = Number(prompt('Insira o segundo valor:'));
  let resultado;

  function soma () {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
  }
  function subtracao () {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
  }
  function multiplicacao () {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaoreal () {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
  }
  function divisaointeira () {
    resultado = n1 % n2;
    alert(`o resto da divisao entre ${n1} % ${n2} = ${resultado}`)
    novaOperacao();
  }
  function potenciacao () {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a = ${resultado}`)
    novaOperacao();
  }

  function novaOperacao (){
    let opcao = prompt('Deseja fazer outra operacao?\n 1 - sim \n 2 - não');
    if (opcao == 1) {
      calculadora();
    }else if (opcao == 2){
      alert('até mais!')
    }else{
      alert('digite uma opção válida!')
      novaOperacao();
    }
  }



  /*if(operacao == 1) {
  soma();
 }else if(operacao == 2) {
  subtracao();
 }else if (operacao == 3) {
  multiplicacao();
 }else if (operacao == 4) {
  divisaoreal();
 }else if (operacao ==5) {
  divisaointeira();
 }else if (operacao ==6) {
  potenciacao();
 } */

 // usando switch case
 switch (operacao) {
   case 1:
   soma();
   break;
    case 2:
    subtracao();
    break;
     case 3:
      multiplicacao();
      break;
        case 4:
        divisaoreal();
        break;
          case 5:
          divisaointeira();
          break;
            case 6:
            potenciacao();
            break;
         }


    }

calculadora();