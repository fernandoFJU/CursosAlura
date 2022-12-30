const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const botao = document.getElementById(this.id);
    const categoria = botao.value;

    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    
    exibeLivrosNaTela(livrosFiltrados);

    if(categoria == "disponivel"){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibeValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    section_valor_total_livros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}