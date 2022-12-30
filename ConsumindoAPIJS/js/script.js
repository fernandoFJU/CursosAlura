//var consultaCEP = "https://viacep.com.br/ws/06624510/json/";

/*fetch(consultaCEP)
    .then(resposta => resposta.json())
    .then(dados => {
        if (dados.erro) {
            throw Error("Este CEP não existe");
        }else{
            console.log(dados)
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log("Finalizado"));*/

async function buscaCEP(cep) {
    var mensagem_erro = document.getElementById("mensagem-erro");
    mensagem_erro.textContent = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaConvertida = await consultaCEP.json();
        
        preencheCampos(consultaConvertida);
    } catch (erro) {
        mensagem_erro.textContent = "CEP inválido, tente novamente";
    }

    
    
}

// let ceps = ["06624510", "01001001", "06626460"];
// let conjuntoCeps = ceps.map(valores => buscaCEP(valores));

// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));


var input_cep = document.getElementById("cep");
input_cep.addEventListener("blur", () => buscaCEP(input_cep.value));

function preencheCampos(cep){
    var endereco = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");


    endereco.value = cep.logradouro;
    bairro.value = cep.bairro;
    cidade.value = cep.localidade;
    estado.value = cep.uf;

}