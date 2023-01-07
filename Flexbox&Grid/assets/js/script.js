var btn_menu = document.querySelector(".cabecalho__menu");
var menu_lateral = document.querySelector(".menu-lateral");

btn_menu.addEventListener("click", () => {
    
    if(menu_lateral.classList.contains("menu-lateral--ativo")){
        menu_lateral.classList.remove("menu-lateral--ativo");
    }else{
        menu_lateral.classList.add("menu-lateral--ativo");
    }
})