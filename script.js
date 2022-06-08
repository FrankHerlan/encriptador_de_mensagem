const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

//  CriptografarButtom
function btnCriptografar () {
    const textoEncriptado = criptografar(inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    
}

function criptografar(stringCriptografar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"],["1","11"],["2","22"],["3","33"],["4","44"],["5","55"],["6","66"],["7","77"],["8","88"],["9","99"]];
      stringCriptografar = stringCriptografar.toLowerCase();
    
        for(let i=0; i < matrizCodigo.length; i++) {
        if(stringCriptografar.includes(matrizCodigo[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])     
        }
    }
    return stringCriptografar;
}

//  DesencriptografarButtom
function btnDescriptografar () {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
}

function desencriptar (stringDesencriptografar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"],["1","11"],["2","22"],["3","33"],["4","44"],["5","55"],["6","66"],["7","77"],["8","88"],["9","99"]];
    stringDesencriptografar = stringDesencriptografar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptografar.includes(matrizCodigo[i][0])) {
            stringDesencriptografar = stringDesencriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])     
        }
    }
    return stringDesencriptografar;
    
}
//  CopyButoon
    document.getElementById("copiar").onclick("btnCopiar");

    const copyBtn = document.querySelector(".copiar")
   
    function btnCopiar() {
        navigator.clipboard.writeText(mensagem.value);
            var copyText = document.querySelector(".mensagem");
            copyText.select();

    }
    