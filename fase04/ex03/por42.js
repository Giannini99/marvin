function por42(num1,num2)     {
    var ZERO = 0;
    
    while(num1<=num2)   {
    if(num1%42===0)     {
        ZERO++;
        if(ZERO===2)    {
            return num1;
        }
    }
    num1++;
    
}
if(ZERO===0||ZERO===1)  {
    console.log("Não encontrado")
    return false
    }
}