function adicionaDesconto(listaLivros) {

    const desconto = 0.3;

    livrosComDesconto = listaLivros.map(livro => {

        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })

    return livrosComDesconto;
}