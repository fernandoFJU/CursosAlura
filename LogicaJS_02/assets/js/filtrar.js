var input_filtro = document.querySelector("#filtrar-tabela");

input_filtro.addEventListener("keyup", function(evento){
    var tabela_pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        
        for(var i = 0; i < tabela_pacientes.length; i++){

            var paciente = tabela_pacientes[i];
            var td_nome = paciente.querySelector(".info-nome");
            var nomePaciente = td_nome.textContent;

            var exp_nome = new RegExp(this.value, "i");

            if(!exp_nome.test(nomePaciente)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < tabela_pacientes.length; i++){

            var paciente = tabela_pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

    
})