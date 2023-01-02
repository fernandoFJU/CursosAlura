import { conectaAPI } from "./conexaoAPI.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(item){

    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `
        <iframe width="100%" height="72%" src="${item.url}"
        title="${item.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${item.imagem}" alt="${item.titulo}">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        </div>
    `

    return video;
}

async function listaVideo(){
    try{

        const listaApi = await conectaAPI.listaVideos();
        listaApi.forEach(item => {
            lista.appendChild(constroiCard(item));
        });

    }catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carreegar os vídeos</h2>`
    }
}

listaVideo()