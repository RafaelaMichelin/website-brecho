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
const cepValido = (cep) => cep.length == 8 && eNumero(cep);        //length verifica o tamanho do cep// se tem 8 digitos

const pesquisarCep = async() =>{
    limparFormulario();
    const url = ` https://viacep.com.br/ws/${cep.value}/json/`;


    //reliza verificação 
    if(cepValido(cep.value)){
           const dados = await fetch(url);      //await é uma pausa para ver se o fetch vai conseguir dar o retorno da url
           const addres = await dados.json();    //transforma o conteudo dados em json
        
        //hasOwnProprety retorna um valor boolean indicando se o objetivo possui a propriedade específica no parenteses
           if(addres.hasOwnProperty('erro')){
              alert('CEP não encontrado');
           }
           else{
            preencherFormulario(addres);
           }
    }
    else{
        alert('CEP incorreto, tente novamente!');    //se for digitado cep incorreto
    }

}

const preencherFormulario = (endereco)  => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.estado;

}

// função limpar formulario
const limparFormulario = () =>{                                    // => arrow function nao precisa do return
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


document.getElementById('cep').addEventListener('focusout',pesquisarCep);       //evento