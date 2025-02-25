'use strict'

async function pegarFotos (){
    const url = `https://picsum.photos/v2/list`
    const response = await fetch(url)
    const dados = await response.json()

    return dados
}


function criarFotos (link){
 
    const galeria = document.getElementById('galeriaF')
    const novaImagem = document.createElement('img')
   

   
    novaImagem.src = link.download_url 
    
    
    galeria.appendChild(novaImagem)
    
}

async function preencherFotos(){
    const pagina = document.getElementById("pagina")
    const titulo = document.createElement('h1')
    titulo.textContent = "Galeria de fotos!"
    pagina.appendChild(titulo)

    const fotos =  await pegarFotos()
    //const galeria= document.getElementById("galeria")

    fotos.forEach(criarFotos)

    console.log(fotos)
}

preencherFotos()