import { conectaAPI } from "./conexaoAPI.js";
import constroiCard from "./mostrarVideos.js";

const btn_pesquisar = document.querySelector("[data-botao-pesquisar]");


async function buscarVideo(evento) {

    evento.preventDefault();

    const input_pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(input_pesquisa);

    const lista = document.querySelector("[data-lista]");
    lista.innerHTML = "";
    busca.forEach(video => {
        lista.appendChild(constroiCard(video));
    });

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Pesquisa sem resultados, tente outro termo!</h2>`
    }
}   

btn_pesquisar.addEventListener("click", evento => buscarVideo(evento));