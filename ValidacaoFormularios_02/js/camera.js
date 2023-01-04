const botao_inicia_camera = document.querySelector("[data-video-botao]");
const campo_camera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

const botao_tirar_foto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

const botao_enviar_foto = document.querySelector("[data-enviar]");

let imagemURL = "";

botao_inicia_camera.addEventListener("click", async function(){

    const inicia_video = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    botao_inicia_camera.style.display = "none";
    campo_camera.style.display = "block";

    video.srcObject = inicia_video;
});

botao_tirar_foto.addEventListener("click", () => {

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg");

    campo_camera.style.display = "none";
    mensagem.style.display = "block";
});

botao_enviar_foto.addEventListener("click", () => {

    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem("cadastro", JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})