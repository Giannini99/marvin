function pares(n1,n2)   {
    var n1pares = n1/2
    var n1impares = Number.isInteger(n1pares)
    var n2pares = n2/2
    var n2impares = Number.isInteger(n2pares)
    

    if (n1impares&&n2impares)
    return "Os n�meros s�o pares"
    else
    return "Os n�meros n�o s�o pares"
}

