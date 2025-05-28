//CPF 

function validarCPF(cpf){
    cpf = cpf.replace(/[^\d] + /g,"")  //remover tudo que nao for numero

    if(cpf.length!=11 || /^(\d)\1+$/.test(cpf)){

        return false;
    }

    let soma=0;
    let resto;

    //validar primeira dv
    for(let i=1;i<=9;i++)
    {
        soma+= parseInt(cpf.substring(i-1,i) * (11-i));
    }

    resto = (soma*10)%11;

    if(resto === 10 || resto === 11)
    {
        resto = 0;
    }

    if(resto!=parseInt(cpf.substring(9,10))){
        return false;
    }


    //validar segunda dv

    soma=0;
    for(let i=1;i<=10;i++){
        soma += parseInt(cpf.substring(i-1,i))*(12-i)
    }

    resto=(soma*10) % 11;
if(resto ===10 || resto ===11){
    resto = 0;
}
if(resto!=parseInt(cpf.substring(10,11))){
        return false;
    }

    //valido
    return true;
}

function cadastrar(){
const cpfInput = document.getElementById("cpf").value; //busca o valor dentro do input
const messageDiv = document.getElementById("message");

const messageError = document.getElementById("messageError")

if(validarCPF(cpfInput)){
    messageDiv.textContent = "VÁLIDO";

}
else{
    messageDiv.textContent = " Favor digitar um CPF válido";
    messageDiv.style.color = "red";
    messageError.textContent = "ERRO: conferir credenciais";
    messageError.style.color = "red";

}
messageDiv.style.display = "block";
messageError.style.display = "block";
}


'use strict'; //usado para mostrar o problema, caso tenha

 //verifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);                //expressão para ver se está entre 0 e 9
const cepValido = (cep) => cep.length == 8 && eNumero(cep);        //length verifica o tamanho do cep

const pesquisarCep = async() =>{
    limparFormulario();
    const url = ` http://viacep.com.br/ws/${cep.value}/json/`;
}

// função limpar formulario
limparFormulario = () =>{                                    // => arrow function nao precisa do return
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
