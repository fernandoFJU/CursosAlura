import { conectaAPI } from "./conexaoAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function inserirVideo(evento) {

    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10). toString();

    try {

        await conectaAPI.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";

    } catch (error) {
        alert(error);
    }
    

    
}   

formulario.addEventListener("submit", e => inserirVideo(e));