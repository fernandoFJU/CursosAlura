// URL que está hospedado os pacientes
var endPoint = "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json";


// esse método XMLHttpRequest é antigo, hoje em dia usa-se mais o fetch API
var xhr = new XMLHttpRequest();

xhr.open("GET", endPoint);

xhr.addEventListener("load", function(){

    if(xhr.status >= 200 && xhr.status < 300){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    }else if(xhr.status >= 400 && xhr.status < 500){
        console.log(`Erro: ${xhr.status} | Ocorreu um erro na sua aplicação`);
    }else if(xhr.status >= 500){
        console.log(`Erro: ${xhr.status} | Ocorreu um erro no servidor`);
    }
    
});

xhr.send();