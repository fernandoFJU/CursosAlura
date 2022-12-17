var btn_adicionar = document.querySelector("#adicionar-paciente");
var formulario = document.querySelector("#form-adiciona");

btn_adicionar.addEventListener("click", function(evento){

    evento.preventDefault();

    // extraindo infos do form
    var paciente = obterDadosFormulario(formulario);

    // criando os elementos da tabela
    var tr_paciente = montaTr(paciente);

    // validadndo o paciente, se existir erros vão ser mostrados
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    // adicionando a TR paciente na Tabela
    var tabela_pacientes = document.querySelector("#tabela-pacientes");
    tabela_pacientes.appendChild(tr_paciente);

    formulario.reset();

    var ul_erros = document.querySelector("#mensagens-erro");
    ul_erros.innerHTML = "";
});

function obterDadosFormulario(formulario){

    // extraindo infos do form
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(parseInt(formulario.peso.value), parseFloat(formulario.altura.value))
    };
    
    return paciente;
}

function montaTr(paciente){

    // criando os elementos da tabela
    var tr_paciente = document.createElement("tr");
    tr_paciente.classList.add("paciente");

    // criando e atribuindo os valores do formulario aos TD's
    var td_nome = montaTd("info-nome", paciente.nome);
    var td_peso = montaTd("info-peso", paciente.peso);
    var td_altura = montaTd("info-altura", paciente.altura);
    var td_gordura = montaTd("info-gordura", paciente.gordura);
    var td_imc = montaTd("info-imc", paciente.imc);

    // adicionando as TD's na TR paciente
    tr_paciente.appendChild(td_nome);
    tr_paciente.appendChild(td_peso);
    tr_paciente.appendChild(td_altura);
    tr_paciente.appendChild(td_gordura);
    tr_paciente.appendChild(td_imc);
    
    return tr_paciente;
}

function montaTd(classe, dado){

    // criando as TD's com classe e o valor que virá do formulário
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];
    if (!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode estar vazio!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode estar vazia!");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode estar vazio!");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode estar vazia!");
    }

    return erros;
}   

function exibeMensagensDeErro(erros){
    var ul_erros = document.querySelector("#mensagens-erro");
    ul_erros.innerHTML = "";
    erros.forEach(function (erro) {
        var li_erro = document.createElement("li");
        li_erro.textContent = erro;
        ul_erros.appendChild(li_erro);
    });
}