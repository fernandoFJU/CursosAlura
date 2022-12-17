function calculaIMC(peso, altura){

    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso > 0 && peso < 500) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0.20 && altura < 2.50) {
        return true;
    }else{
        return false;
    }
}

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    
    var td_peso = paciente.querySelector(".info-peso");
    var peso = parseInt(td_peso.textContent);

    var td_altura = paciente.querySelector(".info-altura");
    var altura = parseFloat(td_altura.textContent);

    var td_imc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {

        td_imc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("invalido");
    }
    if (!alturaEhValida) {

        td_imc.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("invalido");
    }

    if(pesoEhValido && alturaEhValida){

        var imc = calculaIMC(peso, altura);
        td_imc.textContent = imc;
    }
    
}
