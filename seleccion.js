document.addEventListener('DOMContentLoaded', inicializacion)

function inicializacion(){
    var cambiaClaseButton = document.getElementById('cambiaClase')
    cambiaClaseButton.addEventListener('click', cambiaEstilosClase)

    var cambiaLiButton = document.getElementById('cambiaLi')
    cambiaLiButton.addEventListener('click', cambiarEstilosLi)

    var aniadirParrafo = document.getElementById('anadirParrafo')
    aniadirParrafo.addEventListener('click', eventoAniadir)
}

function cambiaEstilosClase(){
    var elementos = document.getElementsByClassName('item')
    console.log(elementos)
    console.log(elementos.length)
    console.log(elementos.item(0))
   for(let i = 0; i<elementos.length; i++){
        console.log('item:', elementos.item(i));
        elementos.item(i).style.color = '#ff00ff';
   }
}

function cambiarEstilosLi(){
    var liElementos = document.getElementsByTagName('li')
    console.log(liElementos)
    for(let i = 0; i < liElementos.length; i++){
        console.log('Item: ', liElementos.item(i))
        liElementos.item(i).classList.add('itemgrande','hola','mundo')
    }
}

function eventoAniadir(){
    var capaCookies = document.createElement('div')
    capaCookies.innerHTML = '<p> Hola esto es una prueba </p>'
    document.body.appendChild(capaCookies)
}

