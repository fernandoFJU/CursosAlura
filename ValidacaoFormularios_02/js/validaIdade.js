export default function ehMaiorDeIdade(data) {

    const dataNascimento = new Date(data.value);
    
    if (!validaIdade(dataNascimento)) {
        data.setCustomValidity("O usuário não é maior de idade");
    }
}

function validaIdade(data){

    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}