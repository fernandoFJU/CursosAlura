async function listaVideos(){
    
    const ENDPOINT = "http://localhost:3000/videos";

    try {
        const conexao = await fetch(ENDPOINT);
        var resposta = await conexao.json();
        
        return resposta;

    } catch (erro) {
        console.log(erro);
    }
}

async function criaVideo(titulo, descricao, url, imagem) {
    
    const dados = {
        titulo: titulo,
        descricao: `${descricao} mil visualizações`,
        url: url,
        imagem: imagem,
    }
    const ENDPOINT = "http://localhost:3000/videos";
    const SETTINGS = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    const conexao = await fetch(ENDPOINT, SETTINGS);

    if (!conexao.ok) {
        throw new Error("Não foi possivel inserir o Vídeo");
    }
    var resposta = await conexao.json();
    
    return resposta;
}

async function buscaVideo(termo) {
    
    const ENDPOINT = `http://localhost:3000/videos?q=${termo}`;

    try {
        const conexao = await fetch(ENDPOINT);
        var resposta = await conexao.json();
        
        return resposta;

    } catch (erro) {
        console.log(erro);
    }
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}
