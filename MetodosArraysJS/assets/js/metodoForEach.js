const section_livros = document.querySelector("#livros");
const section_valor_total_livros = document.querySelector("#valor_total_livros_disponiveis");


function exibeLivrosNaTela(listaLivros){
    section_livros.innerHTML = "";
    
    listaLivros.forEach(livro => {
        
        let disponibilidade = verificaDisponibilidade(livro);
        section_livros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
}

function verificaDisponibilidade(livro){
    if (livro.quantidade <= 0){
        return "livro__imagens indisponivel";
    }else{
        return "livro__imagens";
    }
}