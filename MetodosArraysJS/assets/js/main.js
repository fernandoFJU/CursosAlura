let livros = [];

const endpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

buscarLivrosDaAPI();

async function buscarLivrosDaAPI(){

    const resposta = await fetch(endpoint);
    livros = await resposta.json();

    let livrosComDesconto = adicionaDesconto(livros);
    
    exibeLivrosNaTela(livrosComDesconto);
}
