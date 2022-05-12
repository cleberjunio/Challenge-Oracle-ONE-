const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')

function btnCriptografar() {
    const textoEncriptado = criptografar(inputTexto.value)
    mensagem.value = textoEncriptado
}

function criptografar(stringCriptografada) {
    let arrayCodigo = [
        ['a', 'ai'],
        ['e', 'enter'],
        ['i', 'imes'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]
    stringCriptografada = stringCriptografada.toLowerCase()

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (stringCriptografada.includes(arrayCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(
                arrayCodigo[i][0],
                arrayCodigo[i][1]
            )
        }
    }
    return stringCriptografada
}

function btnDescriptografar() {
    const textoDesencriptado = descriptografar(inputTexto.value)
    mensagem.value = textoDesencriptado
}

function descriptografar(stringDesencriptografada) {
    let arrayReverso = [
        ['ai', 'a'],
        ['enter', 'e'],
        ['imes', 'i'],
        ['ober', 'o'],
        ['ufat', 'u']
    ]
    stringDesencriptografada = stringDesencriptografada.toLowerCase()

    for (let a = 0; a < arrayReverso.length; a++) {
        if (stringDesencriptografada.includes(arrayReverso[a][0])) {
            stringDesencriptografada = stringDesencriptografada.replaceAll(
                arrayReverso[a][0],
                arrayReverso[a][1]
            )
        }
    }
    return stringDesencriptografada
}

function btnCopiar() {
    var copiaTexto = document.querySelector('.mensagem')
    var copiaInput = document.querySelector('.input-texto')
    var copiar = document.querySelector('.copiar')
    if (navigator.clipboard.writeText(copiaTexto.value)) {
        copiaTexto.value = ''
        copiar.textContent = 'Copiado'
    }
    if (copiaInput == stringCriptografada) {
        return stringDesencriptografada
    }
    setInterval(function() {
        copiar.textContent = 'Copiar'
    }, 2000)
}