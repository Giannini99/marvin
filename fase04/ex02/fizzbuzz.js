function fizzbuzz(num1,num2)     {
    
    while (num1<=num2+1)     {
        if(Number.isInteger(num1/3)&&Number.isInteger(num1/5)) {
            console.log(num1+" FizzBuzz")
        }else if(Number.isInteger(num1/5))  {
            console.log(num1+" Buzz")
        }else if(Number.isInteger(num1/3))  {
            console.log(num1+" Fizz")
        }else   {
            console.log(num1)
        }
        num1++;
        }
}
