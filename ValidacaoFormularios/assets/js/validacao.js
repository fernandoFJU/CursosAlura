const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input),
    cep: input => recuperaCEP(input)
}

const mensagensDeErro = {
    nome: {
        valueMissing: "O nome não pode estar vazio!"
    },
    senha: {
        valueMissing: "A senha não pode estar vazia!",
        patternMismatch: "A senha deve conter: entre 6 e 12 caracteres, Letra Maiúscula, Número e Símbolo"
    },
    email: {
        valueMissing: "O E-mail não pode estar vazio",
        typeMismatch: "O E-mail digitado não é válido"
    },
    dataNascimento: {
        valueMissing: "A data de nascimento não pode ser vazia!",
        customError: "Você deve ser maior que 18 anos para se cadastrar!"
    },
    cpf: {
        valueMissing: "O CPF não pode ser vazio!",
        customError: "Digite um CPF válido!"
    },
    cep: {
        valueMissing: "O CEP não pode ser vazio!",
        patternMismatch: "O CEP digitado não é válido!",
        customError: "Digite um CEP válido!"
    },
    logradouro: {
        valueMissing: "O campo logradouro não pode ser vazio!"
    },
    cidade: {
        valueMissing: "O campo cidade não pode ser vazio!"
    },
    estado: {
        valueMissing: "O campo estado não pode ser vazio!"
    },
    preco: {
        valueMissing: "O campo de preço não pode ser vazio!"
    }
}

const tiposDeErro = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError"
];

function mostraMensagemErro(tipo_input, input){
    let mensagem = "";

    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipo_input][erro];
        }
    });

    return mensagem;
}

export function valida(input){
    const tipoInput = input.dataset.tipo;

    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    var input_container = input.parentElement;
    var span_erro = input_container.querySelector(".input-mensagem-erro");

    if(input.validity.valid){

        input_container.classList.remove("input-container--invalido");
        span_erro.innerHTML = mostraMensagemErro(tipoInput, input);
    }else{

        input_container.classList.add("input-container--invalido");
        span_erro.innerHTML = mostraMensagemErro(tipoInput, input);
    }
}

function validaDataNascimento(input){

    const dataRecebida = new Date(input.value);
    let mensagemErro = "";

    if(!maiorDeIdade(dataRecebida)){
        mensagemErro = "Você deve ser maior que 18 anos para se cadastrar!";
    }

    input.setCustomValidity(mensagemErro);
}

function maiorDeIdade(data) {

    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataMais18 <= dataAtual;
}

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'Digite um CPF válido!'
    }

    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) {
            cpfValido = false
        }
    })

    return cpfValido
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}


function recuperaCEP(input){

    const cepFormatado = input.value.replace(/\D/g, '');
    const endpoint = `https://viacep.com.br/ws/${cepFormatado}/json/`;
    const opcoes = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8"
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing ){
        fetch(endpoint, opcoes).then(
            response => response.json()
            ).then(data => {
                if(data.erro){
                    input.setCustomValidity("Digite um CEP válido");
                    return
                }
                input.setCustomValidity("");
                preencheCamposEndereco(data);
                return;
            })
    }
}

function preencheCamposEndereco(dados){
    const logradouro = document.querySelector("[data-tipo='logradouro']");
    const cidade = document.querySelector("[data-tipo='cidade']");
    const estado = document.querySelector("[data-tipo='estado']");

    logradouro.value = dados.logradouro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;

}