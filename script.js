const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptar = encriptar(textArea.value);
    mensagem.value = textoEncriptar;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter" ] , ["i" , "imes"], ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++)  {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter" ] , ["i" , "imes"], ["a", "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++)  {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}


function copiarTexto() {
    const mensagem = document.querySelector('.mensagem');
    const texto = mensagem.value;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado com sucesso!');
    }).catch(err => {
        alert('Erro ao copiar o texto: ' + err);
    });
}


