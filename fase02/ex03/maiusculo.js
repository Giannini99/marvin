function maiuscula(palavra) {
    var M = palavra.toUpperCase()
    var N = M.substring(0,3)
    var O = palavra.toLowerCase()
    var P = O.substring(3,palavra.length)
    return N+P
    
}