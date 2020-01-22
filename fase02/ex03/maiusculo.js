function maiusculo(palavra) {
    var M = palavra.toUpperCase()
    var N = M.substring(0,3)
    var O = palavra.substring(3,palavra.length)
    return N+O
    
}
