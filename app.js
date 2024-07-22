
//encriptar texto
function encriptarTexto(texto){
    return btoa(texto);

}

//desencriptar texto
function desencriptarTexto(textoEncriptado){
    return atob(textoEncriptado);
}



function guardarTexto(){
    const texto = document.getElementById('textoAEncriptar').value;

    const textoEncriptado = encriptarTexto(texto);
    
    console.log(textoEncriptado);


    //reemplazar imagen 
    const section = document.getElementById('imagenNoEncontrado');
    section.innerHTML = `<div class="cuadro__informacion"><h1 id="copiarButton">${textoEncriptado}</h1> <button  class="btn_copiar" onclick="copiarTexto()">Copiar</button></div>`;
    



}

function mostrarTextoDesencriptado(){
    const textoEncriptado = document.getElementById('textoAEncriptar').value;

    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    console.log(textoDesencriptado);

    //reemplazar imagen 
    const section = document.getElementById('imagenNoEncontrado');
    
    section.innerHTML = `<div class="cuadro__informacion"><h1 id="copiarButton">${textoDesencriptado}</h1> <button  class="btn_copiar" onclick="copiarTexto()">Copiar</button></div>`;
}

function copiarTexto(){
    const textoEncriptado = document.getElementById('copiarButton').innerText;
    navigator.clipboard.writeText(textoEncriptado).then(()=>{
        alert('texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto:', err);
    });

};


