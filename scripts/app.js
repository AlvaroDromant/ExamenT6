document.addEventListener('DOMContentLoaded', function(){
    iniciarapp()
})

function iniciarapp(){
    creargaleria()
}

function creargaleria(){
    const galeria = document.querySelector('imagen')

    for(i = 0; 1 <= 6; i++){
       const imagen = document.createElement(i)
       galeria.innerHTML = `
       <source srcset = "/assets/img/thumb/${i}.png type=img/.jpg>
       <source srcset = "/assets/img/thumb/${i}.webp type=img/.webp>
       <source laded=lazy width=200px heigt=300px scrset = "/assets/img/thumb>
       `
    }

    galeria.onclick()

    galeria.appendChild()
}