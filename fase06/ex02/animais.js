  function animais(array)   {
    
    var num = 5;
    var ar = 0;
    while (ar < array.length){
    delete array[ar].altura;
    array[ar].idade = num;
    num++;
    ar++;
}
    return array
}
