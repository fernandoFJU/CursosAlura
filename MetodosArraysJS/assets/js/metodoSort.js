const btn_ordenar_por_preco = document.getElementById("btnOrdenarPorPreco");

btn_ordenar_por_preco.addEventListener("click", ordenarPorPreco);

function ordenarPorPreco(){
    let livrosOrdenadosPorPreco = livros.sort((a, b)  => a.preco - b.preco);

    exibeLivrosNaTela(livrosOrdenadosPorPreco);
}