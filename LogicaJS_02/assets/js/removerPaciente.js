/*PARA MEMORIZAR:
    Quando ocorrer a necessidade de remover um DOM do HTML que ainda não existe, 
    ou seja, não foi implementado na hora de criar o html, mas sim pelo javascript,
    caimos em uma armadilha, pois acontece o "Event Bubbling" que nada mais é que
    pensando em bolhas, quando clicamos em uma mais baixa que seja, ela vai subindo, e subindo,
    ou seja, quando clicamos no mais intimo filho, afetamos o pai;

    Então, temos que atrelar o evento ao pai, para que ele fique coordenando qual filho DOM sera apagado.
*/

var pacientes = document.querySelectorAll(".paciente");
var tabela_pacientes = document.querySelector("table");

tabela_pacientes.addEventListener("dblclick", function(evento){
    var evento_alvo = evento.target;
    var evento_alvo_pai = evento_alvo.parentNode;

    evento_alvo_pai.remove();
});

/*pacientes.forEach(function(paciente){

    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});
*/