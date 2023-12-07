const box = document.querySelector (".slide");
const imagens = document.querySelector(".slide img");

let contador = 0;

function slider () {
    contador++;

    if(contador>imagens.legth -1) {
        contador = 0;
    }

    box.style.transform = `margin-left${contador*200}px)`;
} 

setInterval(slider,2000); 